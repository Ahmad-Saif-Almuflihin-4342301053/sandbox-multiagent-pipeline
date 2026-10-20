/**
 * Automated Unit & Reliability Tests for Mini Logbook
 * Focus on:
 * 1. Anti-XSS Sanitization & HTML Escaping
 * 2. Input Validation (Empty strings, whitespace, character length limits)
 * 3. LocalStorage Availability Detection (Handling disabled / blocked storage)
 * 4. QuotaExceededError handling (Storage full) & In-memory Fallback
 */

const assert = require('assert');
const {
    escapeHTML,
    validateAndSanitizeNoteInput,
    isLocalStorageAvailable,
    saveNotesWithStatus,
    getAllNotes,
    createNote,
    updateNote,
    deleteNote,
    getExportPayload,
    exportNotesToJSON,
    inMemoryFallback
} = require('./app.js');

let testsPassed = 0;
let testsTotal = 0;

function runTest(testName, fn) {
    testsTotal++;
    try {
        fn();
        console.log(`  ✔ PASS: ${testName}`);
        testsPassed++;
    } catch (err) {
        console.error(`  ✖ FAIL: ${testName}`);
        console.error(err);
    }
}

console.log('\n--- Running QA & Reliability Test Suite for Mini Logbook ---\n');

// 1. Anti-XSS Sanitization Tests
runTest('escapeHTML properly neutralizes malicious HTML/JS tags', () => {
    const maliciousPayload = '<script>alert("XSS")</script>';
    const escaped = escapeHTML(maliciousPayload);
    assert.strictEqual(escaped, '&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;');
    assert.strictEqual(escaped.includes('<script>'), false);
});

runTest('escapeHTML neutralizes single and double quotes, and ampersands', () => {
    const payload = `Tom & Jerry said "Hello" and 'Goodbye'`;
    const escaped = escapeHTML(payload);
    assert.strictEqual(escaped, `Tom &amp; Jerry said &quot;Hello&quot; and &#39;Goodbye&#39;`);
});

runTest('escapeHTML handles non-string inputs safely without crashing', () => {
    assert.strictEqual(escapeHTML(null), '');
    assert.strictEqual(escapeHTML(undefined), '');
    assert.strictEqual(escapeHTML(123), '');
});

// 2. Input Validation Tests
runTest('validateAndSanitizeNoteInput rejects empty title and empty content', () => {
    const result1 = validateAndSanitizeNoteInput({ title: '', content: 'Valid content' });
    assert.strictEqual(result1.isValid, false);
    assert.ok(result1.error.includes('Judul'));

    const result2 = validateAndSanitizeNoteInput({ title: '   ', content: 'Valid content' });
    assert.strictEqual(result2.isValid, false);

    const result3 = validateAndSanitizeNoteInput({ title: 'Valid title', content: '' });
    assert.strictEqual(result3.isValid, false);
    assert.ok(result3.error.includes('Deskripsi'));

    const result4 = validateAndSanitizeNoteInput({ title: 'Valid title', content: '   ' });
    assert.strictEqual(result4.isValid, false);
});

runTest('validateAndSanitizeNoteInput enforces length limits', () => {
    const longTitle = 'a'.repeat(201);
    const resultTitle = validateAndSanitizeNoteInput({ title: longTitle, content: 'Test' });
    assert.strictEqual(resultTitle.isValid, false);
    assert.ok(resultTitle.error.includes('200 karakter'));

    const longContent = 'b'.repeat(5001);
    const resultContent = validateAndSanitizeNoteInput({ title: 'Normal title', content: longContent });
    assert.strictEqual(resultContent.isValid, false);
    assert.ok(resultContent.error.includes('5000 karakter'));
});

runTest('validateAndSanitizeNoteInput escapes XSS payload in sanitized output', () => {
    const rawData = {
        title: '<img src=x onerror=alert(1)>',
        content: '<svg/onload=alert("hacked")>',
        category: 'development'
    };
    const result = validateAndSanitizeNoteInput(rawData);
    assert.strictEqual(result.isValid, true);
    assert.strictEqual(result.sanitized.title.includes('<img'), false);
    assert.strictEqual(result.sanitized.content.includes('<svg'), false);
});

// 3. LocalStorage Disabled / Blocked Tests
runTest('Handles disabled / blocked localStorage gracefully with fallback', () => {
    // Simulasi global.window dengan localStorage yang melempar exception saat diakses (misal cookies disabled)
    global.window = {
        localStorage: {
            getItem: () => { throw new Error('Access denied (SecurityError)'); },
            setItem: () => { throw new Error('Access denied (SecurityError)'); },
            removeItem: () => { throw new Error('Access denied (SecurityError)'); }
        }
    };

    assert.strictEqual(isLocalStorageAvailable(), false);

    const saveResult = saveNotesWithStatus([{ id: '1', title: 'Test Fallback' }]);
    assert.strictEqual(saveResult.success, true);
    assert.strictEqual(saveResult.disabled, true);
    assert.ok(saveResult.error.includes('dinonaktifkan'));

    const notes = getAllNotes();
    assert.strictEqual(notes.length, 1);
    assert.strictEqual(notes[0].title, 'Test Fallback');
});

// 4. LocalStorage Quota Exceeded (Storage Full) Tests
runTest('Handles QuotaExceededError when localStorage is full', () => {
    class FakeDOMException extends Error {
        constructor(name, code) {
            super('Quota exceeded');
            this.name = name;
            this.code = code;
        }
    }
    global.DOMException = FakeDOMException;

    let storageDisabled = false;
    global.window = {
        localStorage: {
            setItem: (key, val) => {
                if (key === '__storage_test__') return; // available check passes
                throw new FakeDOMException('QuotaExceededError', 22);
            },
            removeItem: () => {},
            getItem: () => null
        }
    };

    assert.strictEqual(isLocalStorageAvailable(), true);

    const saveResult = saveNotesWithStatus([{ id: '99', title: 'Big data note' }]);
    assert.strictEqual(saveResult.success, false);
    assert.strictEqual(saveResult.quotaExceeded, true);
    assert.ok(saveResult.error.includes('penuh'));
});

// 5. CRUD Flow with Validation & Sanitization
runTest('createNote integrates anti-XSS and creates new item', () => {
    // Reset window ke mock in-memory localStorage fungsional
    const store = {};
    global.window = {
        localStorage: {
            setItem: (k, v) => { store[k] = v; },
            getItem: (k) => store[k] || null,
            removeItem: (k) => { delete store[k]; }
        }
    };
    inMemoryFallback.isUsingFallback = false;
    inMemoryFallback.data = null;

    const res = createNote({
        title: 'Belajar <script>alert("test")</script>',
        content: 'Review code & implementasi',
        category: 'learning'
    });

    assert.strictEqual(res.success, true);
    assert.ok(res.note.id);
    assert.strictEqual(res.note.title, 'Belajar &lt;script&gt;alert(&quot;test&quot;)&lt;/script&gt;');
    assert.strictEqual(res.note.category, 'learning');

    const all = getAllNotes();
    assert.strictEqual(all.length, 1);
    assert.strictEqual(all[0].id, res.note.id);
});

// 6. Data Integrity & Export Payload Reliability Tests (Issue #5)
runTest('getExportPayload produces complete schema with valid metadata and empty notes array', () => {
    // Reset mock storage to empty
    const store = {};
    global.window = {
        localStorage: {
            setItem: (k, v) => { store[k] = v; },
            getItem: (k) => store[k] || null,
            removeItem: (k) => { delete store[k]; }
        }
    };
    inMemoryFallback.isUsingFallback = false;
    inMemoryFallback.data = null;

    const payload = getExportPayload();

    assert.ok(payload !== null && typeof payload === 'object', 'Payload must be an object');
    assert.strictEqual(payload.version, '1.0.0', 'Version should match semantic versioning 1.0.0');
    assert.strictEqual(payload.totalNotes, 0, 'Total notes should be 0 when storage empty');
    assert.ok(Array.isArray(payload.notes), 'Notes field must be an array');
    assert.strictEqual(payload.notes.length, 0, 'Notes array length should match totalNotes');
    assert.ok(!isNaN(Date.parse(payload.exportDate)), 'exportDate must be a valid ISO date string');
});

runTest('getExportPayload preserves data integrity, structure, and sanitized content across multiple items', () => {
    const store = {};
    global.window = {
        localStorage: {
            setItem: (k, v) => { store[k] = v; },
            getItem: (k) => store[k] || null,
            removeItem: (k) => { delete store[k]; }
        }
    };
    inMemoryFallback.isUsingFallback = false;
    inMemoryFallback.data = null;

    // Seed notes
    createNote({
        title: 'Fitur Export <JSON>',
        content: 'Implementasi unit test dan validasi skema export',
        category: 'development'
    });
    createNote({
        title: 'Daily Standup & Sync',
        content: 'Membahas progress Worker 1, Worker 2, dan Worker 3',
        category: 'meeting'
    });

    const payload = getExportPayload();

    assert.strictEqual(payload.version, '1.0.0');
    assert.strictEqual(payload.totalNotes, 2);
    assert.strictEqual(payload.notes.length, 2);

    // Verify properties integrity of each note
    payload.notes.forEach(note => {
        assert.ok(typeof note.id === 'string' && note.id.length > 0, 'Note must have an ID');
        assert.ok(typeof note.title === 'string' && note.title.length > 0, 'Note must have a title');
        assert.ok(typeof note.content === 'string' && note.content.length > 0, 'Note must have content');
        assert.ok(typeof note.category === 'string', 'Note must have category');
        assert.ok(typeof note.date === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(note.date), 'Date must follow YYYY-MM-DD');
        assert.ok(!isNaN(Date.parse(note.createdAt)), 'createdAt must be valid ISO timestamp');
    });

    // Verify anti-XSS preservation in export payload
    assert.ok(payload.notes.some(n => n.title.includes('&lt;JSON&gt;')));
    assert.ok(!payload.notes.some(n => n.title.includes('<JSON>')));
});

runTest('exportNotesToJSON returns valid formatted JSON string matching payload structure', () => {
    const jsonString = exportNotesToJSON();
    assert.strictEqual(typeof jsonString, 'string', 'exportNotesToJSON must return a string');

    let parsed;
    assert.doesNotThrow(() => {
        parsed = JSON.parse(jsonString);
    }, 'Output must be parseable JSON');

    assert.strictEqual(parsed.version, '1.0.0');
    assert.strictEqual(parsed.totalNotes, 2);
    assert.strictEqual(parsed.notes.length, 2);
    assert.ok(!isNaN(Date.parse(parsed.exportDate)));
});

runTest('exportNotesToJSON handles triggerDownload safely in Node and browser-like environments', () => {
    // 1. In environment without DOM (Node.js default)
    assert.doesNotThrow(() => {
        const res = exportNotesToJSON(true);
        assert.strictEqual(typeof res, 'string');
    });

    // 2. In browser-like mock environment
    let anchorClicked = false;
    let createdAnchor = null;
    let objectUrlRevoked = false;

    global.document = {
        createElement: (tag) => {
            if (tag === 'a') {
                createdAnchor = {
                    href: '',
                    download: '',
                    click: () => { anchorClicked = true; }
                };
                return createdAnchor;
            }
            return {};
        },
        body: {
            appendChild: () => {},
            removeChild: () => {}
        }
    };

    global.Blob = class FakeBlob {
        constructor(parts, options) {
            this.parts = parts;
            this.options = options;
        }
    };

    global.URL = {
        createObjectURL: () => 'blob:http://localhost/test-uuid',
        revokeObjectURL: () => { objectUrlRevoked = true; }
    };

    const result = exportNotesToJSON(true);
    assert.strictEqual(typeof result, 'string');
    assert.strictEqual(anchorClicked, true, 'Trigger download should click anchor tag');
    assert.ok(createdAnchor.download.startsWith('catatan-magang-export-'), 'Download filename prefix check');
    assert.ok(createdAnchor.download.endsWith('.json'), 'Download filename extension check');
    assert.strictEqual(objectUrlRevoked, true, 'Object URL should be revoked after download trigger');

    // Clean up globals
    delete global.document;
    delete global.Blob;
    delete global.URL;
});

runTest('export data integrity remains consistent when localStorage is disabled (fallback mode)', () => {
    // Setup disabled storage
    global.window = {
        localStorage: {
            getItem: () => { throw new Error('Blocked'); },
            setItem: () => { throw new Error('Blocked'); },
            removeItem: () => { throw new Error('Blocked'); }
        }
    };
    inMemoryFallback.isUsingFallback = true;
    inMemoryFallback.data = [
        {
            id: 'fb-1',
            title: 'Fallback Note',
            content: 'Catatan dalam memori',
            date: '2026-10-20',
            category: 'testing',
            createdAt: new Date().toISOString()
        }
    ];

    const payload = getExportPayload();
    assert.strictEqual(payload.totalNotes, 1);
    assert.strictEqual(payload.notes[0].id, 'fb-1');
    assert.strictEqual(payload.notes[0].title, 'Fallback Note');

    const json = exportNotesToJSON();
    const parsed = JSON.parse(json);
    assert.strictEqual(parsed.notes[0].id, 'fb-1');
});

console.log(`\nResults: ${testsPassed}/${testsTotal} passed.\n`);

if (testsPassed !== testsTotal) {
    process.exit(1);
} else {
    console.log('🎉 All QA & Reliability tests passed successfully!');
    process.exit(0);
}
