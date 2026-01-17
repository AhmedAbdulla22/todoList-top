export function Storage() {
    function saveToLocalStorage(key,value) {
        const str = JSON.stringify(value);
        localStorage.setItem(key,str);
    }

    function loadFromStorage(key) {
        return JSON.parse(localStorage.getItem(key));
    }

    return {
        saveToLocalStorage,
        loadFromStorage
    }
}