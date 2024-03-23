const DB_NAME = 'notes';
const DB_VERSION = 1;
const OBJECT_STORE_NAME = 'mynotes';

export async function openDatabase() {
    return new Promise((resolve, reject) => {
        const request = window.indexedDB.open(DB_NAME, DB_VERSION);

        request.onerror = (event) => {
            reject(`Error opening database: ${event.target.error}`);
        };

        request.onsuccess = (event) => {
            const db = event.target.result;
            resolve(db);
        };

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains(OBJECT_STORE_NAME)) {
                db.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
            }
        };
    });
}

export async function addNote(data) {
    const db = await openDatabase();
    const transaction = db.transaction([OBJECT_STORE_NAME], 'readwrite');
    const objectStore = transaction.objectStore(OBJECT_STORE_NAME);
    const request = objectStore.add(data);
    return new Promise((resolve, reject) => {
        request.onsuccess = (event) => {
            resolve(event.target.result);
        };
        request.onerror = (event) => {
            reject(`Error adding data: ${event.target.error}`);
        };
    });
}

export async function getAllNotes() {
    const db = await openDatabase();
    const transaction = db.transaction(OBJECT_STORE_NAME, 'readonly');
    const objectStore = transaction.objectStore(OBJECT_STORE_NAME);
    const request = objectStore.getAll();
    return new Promise((resolve, reject) => {
        request.onsuccess = (event) => {
            resolve(event.target.result);
        };
        request.onerror = (event) => {
            reject(`Error getting data: ${event.target.error}`);
        };
    });
}

export async function updateNote(id, newData) {
    const db = await openDatabase();
    const transaction = db.transaction(OBJECT_STORE_NAME, 'readwrite');
    const objectStore = transaction.objectStore(OBJECT_STORE_NAME);
    const request = objectStore.put({ ...newData, id });
    return new Promise((resolve, reject) => {
        request.onsuccess = (event) => {
            resolve(event.target.result);
        };
        request.onerror = (event) => {
            reject(`Error updating data: ${event.target.error}`);
        };
    });
}

export async function deleteNote(id) {
    const db = await openDatabase();
    const transaction = db.transaction(OBJECT_STORE_NAME, 'readwrite');
    const objectStore = transaction.objectStore(OBJECT_STORE_NAME);
    const request = objectStore.delete(id);
    return new Promise((resolve, reject) => {
        request.onsuccess = (event) => {
            resolve(event.target.result);
        };
        request.onerror = (event) => {
            reject(`Error deleting data: ${event.target.error}`);
        };
    });
}