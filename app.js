/**
 * Core Logic & Reliability Layer for Mini Logbook (Catatan Magang)
 * Handles CRUD operations, XSS sanitization, input validation, and localStorage reliability.
 */

const STORAGE_KEY = 'catatan_magang_data';

/**
 * Helper untuk sanitasi string mencegah XSS (Cross-Site Scripting)
 * Mengubah karakter berbahaya menjadi HTML entities.
 * @param {string} str
 * @returns {string} Sanitized string
 */
function escapeHTML(str) {
    if (typeof str !== 'string') {
        return '';
    }
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

/**
 * Validasi dan pembersihan payload input catatan
 * Memastikan tidak kosong, tidak melebihi batas panjang wajar, dan bebas dari bahaya XSS.
 * @param {Object} rawData - { title, content, date, category }
 * @returns {{ isValid: boolean, error?: string, sanitized?: Object }}
 */
function validateAndSanitizeNoteInput(rawData) {
    if (!rawData || typeof rawData !== 'object') {
        return { isValid: false, error: 'Data catatan tidak valid atau kosong.' };
    }

    const rawTitle = typeof rawData.title === 'string' ? rawData.title.trim() : '';
    const rawContent = typeof rawData.content === 'string' ? rawData.content.trim() : '';
    const rawDate = typeof rawData.date === 'string' ? rawData.date.trim() : '';
    const rawCategory = typeof rawData.category === 'string' ? rawData.category.trim() : 'other';

    if (!rawTitle) {
        return { isValid: false, error: 'Judul catatan tidak boleh kosong.' };
    }
    if (rawTitle.length > 200) {
        return { isValid: false, error: 'Judul catatan maksimal 200 karakter.' };
    }

    if (!rawContent) {
        return { isValid: false, error: 'Deskripsi kegiatan tidak boleh kosong.' };
    }
    if (rawContent.length > 5000) {
        return { isValid: false, error: 'Deskripsi kegiatan maksimal 5000 karakter.' };
    }

    // Validasi format tanggal YYYY-MM-DD sederhana atau fallback ke hari ini
    let cleanDate = rawDate;
    if (!cleanDate || !/^\d{4}-\d{2}-\d{2}$/.test(cleanDate)) {
        cleanDate = new Date().toISOString().split('T')[0];
    }

    // Whitelist kategori
    const allowedCategories = ['development', 'meeting', 'learning', 'testing', 'other'];
    const cleanCategory = allowedCategories.includes(rawCategory) ? rawCategory : 'other';

    return {
        isValid: true,
        sanitized: {
            title: escapeHTML(rawTitle),
            content: escapeHTML(rawContent),
            date: cleanDate,
            category: cleanCategory
        }
    };
}

/**
 * Deteksi ketersediaan dan kemampuan tulis localStorage
 * Menangani kasus: localStorage diblokir/disabled (Private Mode/Security Policy)
 * @returns {boolean}
 */
function isLocalStorageAvailable() {
    try {
        if (typeof window === 'undefined' || !window.localStorage) {
            return false;
        }
        const testKey = '__storage_test__';
        window.localStorage.setItem(testKey, testKey);
        window.localStorage.removeItem(testKey);
        return true;
    } catch (e) {
        return false;
    }
}

/**
 * Fallback in-memory storage jika localStorage browser tidak tersedia atau quota penuh
 */
const inMemoryFallback = {
    data: null,
    isUsingFallback: false
};

/**
 * Mendapatkan seluruh catatan magang dari localStorage dengan fallback dan penanganan error
 * @returns {Array<Object>} List data catatan
 */
function getAllNotes() {
    if (!isLocalStorageAvailable() || inMemoryFallback.isUsingFallback) {
        return inMemoryFallback.data ? [...inMemoryFallback.data] : [];
    }

    try {
        const rawData = window.localStorage.getItem(STORAGE_KEY);
        if (!rawData) return [];
        const parsed = JSON.parse(rawData);
        return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
        console.error('Gagal mengambil data dari localStorage:', error);
        return inMemoryFallback.data ? [...inMemoryFallback.data] : [];
    }
}

/**
 * Menyimpan array catatan ke localStorage dengan penanganan QuotaExceededError dan Disabled Storage
 * @param {Array<Object>} notes
 * @returns {{ success: boolean, quotaExceeded?: boolean, disabled?: boolean, error?: string }} Status hasil penyimpanan
 */
function saveNotesWithStatus(notes) {
    if (!Array.isArray(notes)) {
        return { success: false, error: 'Data harus berupa array.' };
    }

    if (!isLocalStorageAvailable()) {
        inMemoryFallback.isUsingFallback = true;
        inMemoryFallback.data = [...notes];
        console.warn('localStorage tidak aktif/diblokir. Data disimpan sementara di memori browser.');
        return {
            success: true,
            disabled: true,
            error: 'Penyimpanan lokal browser dinonaktifkan atau diblokir. Data hanya tersimpan sementara selama halaman dibuka.'
        };
    }

    try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
        return { success: true };
    } catch (error) {
        const isQuotaError =
            error instanceof DOMException &&
            (error.name === 'QuotaExceededError' ||
             error.name === 'NS_ERROR_DOM_QUOTA_REACHED' ||
             error.code === 22 ||
             error.code === 1014);

        if (isQuotaError) {
            console.error('localStorage penuh (QuotaExceededError):', error);
            // Simpan ke inMemoryFallback agar data saat ini tidak langsung hilang dari UI
            inMemoryFallback.isUsingFallback = true;
            inMemoryFallback.data = [...notes];
            return {
                success: false,
                quotaExceeded: true,
                error: 'Memori penyimpanan browser (localStorage) penuh! Hapus beberapa catatan lama untuk mengosongkan ruang.'
            };
        }

        console.error('Gagal menyimpan data ke localStorage:', error);
        inMemoryFallback.isUsingFallback = true;
        inMemoryFallback.data = [...notes];
        return {
            success: false,
            error: 'Terjadi kesalahan sistem saat menyimpan catatan: ' + (error.message || 'Unknown error')
        };
    }
}

/**
 * Backward compatibility wrapper untuk saveNotes
 * @param {Array<Object>} notes
 * @returns {boolean}
 */
function saveNotes(notes) {
    const res = saveNotesWithStatus(notes);
    return res.success;
}

/**
 * Menambahkan catatan magang baru dengan validasi anti-XSS dan handling storage
 * @param {Object} noteData - { title, content, date, category }
 * @returns {{ success: boolean, note?: Object, error?: string, warning?: string }}
 */
function createNote(noteData) {
    const validation = validateAndSanitizeNoteInput(noteData);
    if (!validation.isValid) {
        return { success: false, error: validation.error };
    }

    const { title, content, date, category } = validation.sanitized;
    const notes = getAllNotes();

    const newNote = {
        id: Date.now().toString() + '_' + Math.random().toString(36).substr(2, 5),
        title,
        content,
        date,
        category: category || 'other',
        createdAt: new Date().toISOString()
    };

    notes.unshift(newNote);
    const saveResult = saveNotesWithStatus(notes);

    if (!saveResult.success) {
        return {
            success: false,
            error: saveResult.error || 'Gagal menyimpan catatan baru.'
        };
    }

    return {
        success: true,
        note: newNote,
        warning: saveResult.disabled ? saveResult.error : undefined
    };
}

/**
 * Mengambil catatan berdasarkan ID
 * @param {string} id
 * @returns {Object|null}
 */
function getNoteById(id) {
    if (!id) return null;
    const notes = getAllNotes();
    return notes.find(note => note.id === id) || null;
}

/**
 * Memperbarui catatan magang berdasarkan ID dengan validasi anti-XSS
 * @param {string} id
 * @param {Object} updatedFields - { title, content, date, category }
 * @returns {{ success: boolean, note?: Object, error?: string }}
 */
function updateNote(id, updatedFields) {
    if (!id) return { success: false, error: 'ID catatan tidak valid.' };

    const notes = getAllNotes();
    const index = notes.findIndex(note => note.id === id);

    if (index === -1) {
        return { success: false, error: 'Catatan tidak ditemukan.' };
    }

    const currentNote = notes[index];
    const validation = validateAndSanitizeNoteInput({
        title: updatedFields.title !== undefined ? updatedFields.title : currentNote.title,
        content: updatedFields.content !== undefined ? updatedFields.content : currentNote.content,
        date: updatedFields.date !== undefined ? updatedFields.date : currentNote.date,
        category: updatedFields.category !== undefined ? updatedFields.category : currentNote.category
    });

    if (!validation.isValid) {
        return { success: false, error: validation.error };
    }

    const updatedNote = {
        ...currentNote,
        ...validation.sanitized,
        updatedAt: new Date().toISOString()
    };

    notes[index] = updatedNote;
    const saveResult = saveNotesWithStatus(notes);

    if (!saveResult.success) {
        return { success: false, error: saveResult.error || 'Gagal memperbarui catatan.' };
    }

    return { success: true, note: updatedNote };
}

/**
 * Menghapus catatan magang berdasarkan ID
 * @param {string} id
 * @returns {{ success: boolean, error?: string }} Status keberhasilan penghapusan
 */
function deleteNote(id) {
    if (!id) return { success: false, error: 'ID tidak valid.' };

    const notes = getAllNotes();
    const filteredNotes = notes.filter(note => note.id !== id);

    if (filteredNotes.length === notes.length) {
        return { success: false, error: 'Catatan tidak ditemukan.' };
    }

    const saveResult = saveNotesWithStatus(filteredNotes);
    return {
        success: saveResult.success,
        error: saveResult.error
    };
}

/**
 * Membersihkan seluruh catatan
 * @returns {{ success: boolean, error?: string }}
 */
function clearAllNotes() {
    const saveResult = saveNotesWithStatus([]);
    return {
        success: saveResult.success,
        error: saveResult.error
    };
}

/* ==========================================================================
   DOM & UI Controller Layer (Integrasi aman dengan index.html)
   ========================================================================== */

function initAppUI() {
    if (typeof document === 'undefined') return;

    const form = document.getElementById('logForm');
    const logDateInput = document.getElementById('logDate');
    const logTitleInput = document.getElementById('logTitle');
    const logCategoryInput = document.getElementById('logCategory');
    const logContentInput = document.getElementById('logContent');
    const formAlert = document.getElementById('formAlert');
    const logList = document.getElementById('logList');
    const emptyState = document.getElementById('emptyState');
    const logCount = document.getElementById('logCount');
    const clearAllBtn = document.getElementById('clearAllBtn');
    const exportJsonBtn = document.getElementById('exportJsonBtn');
    const copyReportBtn = document.getElementById('copyReportBtn');
    const toastContainer = document.getElementById('toastContainer');
    const submitBtn = document.getElementById('submitBtn');

    // Inisialisasi default tanggal ke hari ini jika ada input date
    if (logDateInput && !logDateInput.value) {
        logDateInput.value = new Date().toISOString().split('T')[0];
    }

    // Cek status ketersediaan localStorage saat aplikasi dimuat
    if (!isLocalStorageAvailable()) {
        showToast('Peringatan: localStorage tidak aktif atau diblokir. Catatan hanya tersimpan selama tab terbuka.', 'warning', 6000);
    }

    /**
     * Tampilkan notifikasi toast
     */
    function showToast(message, type = 'info', duration = 3500) {
        if (!toastContainer) return;
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        
        // Gunakan textContent untuk mencegah XSS di toast message
        toast.textContent = message;
        toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('fade-out');
            setTimeout(() => toast.remove(), 300);
        }, duration);
    }

    /**
     * Tampilkan alert pada form
     */
    function showFormAlert(message, type = 'error') {
        if (!formAlert) return;
        formAlert.textContent = message; // Safe against XSS
        formAlert.className = `form-alert alert-${type}`;
        formAlert.classList.remove('hidden');
    }

    function clearFormAlert() {
        if (!formAlert) return;
        formAlert.textContent = '';
        formAlert.className = 'form-alert hidden';
    }

    /**
     * Render daftar catatan ke DOM dengan keamanan anti-XSS
     */
    function renderNotes() {
        if (!logList) return;
        const notes = getAllNotes();

        // Update counter
        if (logCount) {
            logCount.textContent = `${notes.length} Catatan`;
        }

        if (notes.length === 0) {
            if (emptyState) emptyState.classList.remove('hidden');
            logList.innerHTML = '';
            return;
        }

        if (emptyState) emptyState.classList.add('hidden');
        logList.innerHTML = '';

        notes.forEach(note => {
            const li = document.createElement('li');
            li.className = 'log-item';
            li.dataset.id = note.id;

            // Buat elemen secara aman menggunakan textContent
            const headerDiv = document.createElement('div');
            headerDiv.className = 'log-item-header';

            const titleH4 = document.createElement('h3');
            titleH4.className = 'log-item-title';
            titleH4.textContent = note.title; // Aman dari XSS

            const metaDiv = document.createElement('div');
            metaDiv.className = 'log-item-meta';

            const dateSpan = document.createElement('span');
            dateSpan.className = 'log-badge log-date';
            dateSpan.textContent = note.date;

            const categorySpan = document.createElement('span');
            categorySpan.className = `log-badge log-cat-${note.category || 'other'}`;
            categorySpan.textContent = note.category || 'other';

            metaDiv.appendChild(dateSpan);
            metaDiv.appendChild(categorySpan);

            headerDiv.appendChild(titleH4);
            headerDiv.appendChild(metaDiv);

            const contentP = document.createElement('p');
            contentP.className = 'log-item-content';
            contentP.textContent = note.content; // Aman dari XSS

            const actionsDiv = document.createElement('div');
            actionsDiv.className = 'log-item-actions';

            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'btn btn-danger btn-sm';
            deleteBtn.setAttribute('type', 'button');
            deleteBtn.setAttribute('title', 'Hapus catatan');
            deleteBtn.textContent = 'Hapus';
            deleteBtn.addEventListener('click', () => {
                if (confirm('Apakah Anda yakin ingin menghapus catatan ini?')) {
                    const result = deleteNote(note.id);
                    if (result.success) {
                        showToast('Catatan berhasil dihapus.', 'info');
                        renderNotes();
                    } else {
                        showToast(result.error || 'Gagal menghapus catatan.', 'error');
                    }
                }
            });

            actionsDiv.appendChild(deleteBtn);

            li.appendChild(headerDiv);
            li.appendChild(contentP);
            li.appendChild(actionsDiv);

            logList.appendChild(li);
        });
    }

    // Handle Form Submit
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            clearFormAlert();

            const title = logTitleInput ? logTitleInput.value : '';
            const content = logContentInput ? logContentInput.value : '';
            const date = logDateInput ? logDateInput.value : '';
            const category = logCategoryInput ? logCategoryInput.value : 'other';

            if (submitBtn) {
                submitBtn.disabled = true;
            }

            const result = createNote({ title, content, date, category });

            if (submitBtn) {
                submitBtn.disabled = false;
            }

            if (!result.success) {
                showFormAlert(result.error || 'Gagal menambahkan catatan.', 'error');
                showToast(result.error || 'Terjadi kesalahan.', 'error');
                return;
            }

            // Berhasil
            if (result.warning) {
                showToast(result.warning, 'warning', 5000);
            } else {
                showToast('Catatan magang berhasil ditambahkan!', 'success');
            }

            // Reset form
            if (logTitleInput) logTitleInput.value = '';
            if (logContentInput) logContentInput.value = '';
            if (logDateInput) logDateInput.value = new Date().toISOString().split('T')[0];

            renderNotes();
        });
    }

    // Handle Export JSON
    if (exportJsonBtn) {
        exportJsonBtn.addEventListener('click', () => {
            const notes = getAllNotes();
            if (notes.length === 0) {
                showToast('Belum ada catatan untuk diekspor.', 'warning');
                return;
            }

            exportJsonBtn.classList.add('btn-active-feedback');
            setTimeout(() => exportJsonBtn.classList.remove('btn-active-feedback'), 300);

            try {
                if (typeof exportNotesToJSON === 'function') {
                    exportNotesToJSON(true);
                } else {
                    // Fallback jika exportNotesToJSON belum dimuat
                    const payload = {
                        exportDate: new Date().toISOString(),
                        totalNotes: notes.length,
                        version: '1.0.0',
                        notes: notes
                    };
                    const jsonString = JSON.stringify(payload, null, 2);
                    const blob = new Blob([jsonString], { type: 'application/json' });
                    const url = URL.createObjectURL(blob);
                    const downloadAnchor = document.createElement('a');
                    const dateStr = new Date().toISOString().split('T')[0];
                    downloadAnchor.href = url;
                    downloadAnchor.download = `catatan-magang-export-${dateStr}.json`;
                    document.body.appendChild(downloadAnchor);
                    downloadAnchor.click();
                    document.body.removeChild(downloadAnchor);
                    URL.revokeObjectURL(url);
                }
                showToast('Data catatan berhasil diekspor ke JSON!', 'success');
            } catch (err) {
                console.error('Gagal mengekspor catatan ke JSON:', err);
                showToast('Gagal mengekspor catatan.', 'error');
            }
        });
    }

    // Handle Salin Laporan ke Clipboard
    if (copyReportBtn) {
        copyReportBtn.addEventListener('click', async () => {
            const notes = getAllNotes();
            if (notes.length === 0) {
                showToast('Belum ada catatan untuk disalin.', 'warning');
                return;
            }

            copyReportBtn.classList.add('btn-active-feedback');
            setTimeout(() => copyReportBtn.classList.remove('btn-active-feedback'), 300);

            try {
                let reportText = `=== LAPORAN KEGIATAN MAGANG ===\nTotal Catatan: ${notes.length}\nTanggal Dibuat: ${new Date().toLocaleDateString('id-ID')}\n\n`;
                notes.forEach((item, index) => {
                    reportText += `${index + 1}. [${item.date}] (${item.category.toUpperCase()}) ${item.title}\n   ${item.content}\n\n`;
                });

                if (navigator.clipboard && navigator.clipboard.writeText) {
                    await navigator.clipboard.writeText(reportText);
                } else {
                    // Fallback untuk browser yang membatasi clipboard API
                    const textarea = document.createElement('textarea');
                    textarea.value = reportText;
                    textarea.style.position = 'fixed';
                    textarea.style.opacity = '0';
                    document.body.appendChild(textarea);
                    textarea.select();
                    document.execCommand('copy');
                    document.body.removeChild(textarea);
                }
                showToast('Laporan berhasil disalin ke clipboard!', 'success');
            } catch (err) {
                console.error('Gagal menyalin laporan:', err);
                showToast('Gagal menyalin laporan ke clipboard.', 'error');
            }
        });
    }

    // Handle Clear All
    if (clearAllBtn) {
        clearAllBtn.addEventListener('click', () => {
            const notes = getAllNotes();
            if (notes.length === 0) {
                showToast('Tidak ada catatan untuk dihapus.', 'info');
                return;
            }

            if (confirm('Peringatan: Semua catatan akan dihapus permanen. Lanjutkan?')) {
                const res = clearAllNotes();
                if (res.success) {
                    showToast('Semua catatan berhasil dibersihkan.', 'info');
                    renderNotes();
                } else {
                    showToast(res.error || 'Gagal membersihkan catatan.', 'error');
                }
            }
        });
    }

    // Render awal
    renderNotes();
}

// Auto init saat script dimuat di browser
if (typeof window !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAppUI);
    } else {
        initAppUI();
    }
}

// Export module untuk unit test / environment Node
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        STORAGE_KEY,
        escapeHTML,
        validateAndSanitizeNoteInput,
        isLocalStorageAvailable,
        inMemoryFallback,
        getAllNotes,
        saveNotesWithStatus,
        saveNotes,
        createNote,
        getNoteById,
        updateNote,
        deleteNote,
        clearAllNotes,
        initAppUI
    };
}
