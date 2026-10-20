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

console.log(`\nResults: ${testsPassed}/${testsTotal} passed.\n`);

if (testsPassed !== testsTotal) {
    process.exit(1);
} else {
    console.log('🎉 All QA & Reliability tests passed successfully!');
    process.exit(0);
}
