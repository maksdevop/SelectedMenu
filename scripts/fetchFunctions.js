import { createInfo } from './uiFunctions.js';

export const fetchData = (query) => {
    const items = [];

    return fetch(`https://api.github.com/search/repositories?q=${query}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Error');
            }
            return response.json();
        })
        .then((data) => {
            items.length = 0;
            data.items.slice(0, 5).forEach((item) => items.push(item.name));
            return items;
        })
        .catch((error) => {
            console.error(error);
            return [];
        });
};
export const newFetch = (newQuery, targetName, obj) => {
    return fetch(`https://api.github.com/search/repositories?q=${newQuery}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Error');
            }
            return response.json();
        })
        .then((data) => {
            const item = data.items.find((item) => item.name === targetName);
            obj[item.name] = { id: item.id, name: item.name, owner: item.owner.login, stars: item.stargazers_count };
            createInfo(obj);
            delete obj[item.name];
        });
};
