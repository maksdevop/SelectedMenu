// eventListeners.js
import { fetchData, newFetch } from './fetchFunctions.js';
import { updateDropdown } from './uiFunctions.js';

const input = document.querySelector('.form__input');

const debounce = (fn, debounceTime) => {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, debounceTime);
    };
};

const debouncedUpdateDropdown = debounce((query) => updateDropdown(query, fetchData, newFetch), 1000);

input.addEventListener('input', (e) => {
    debouncedUpdateDropdown(e.target.value);
});

document.addEventListener('click', (e) => {
    const dropdown = document.getElementById('dropdown');
    if (!input.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.style.display = 'none';
    }
});
