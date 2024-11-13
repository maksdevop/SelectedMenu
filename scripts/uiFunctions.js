// uiFunctions.js
export const createInfo = (obj) => {
    const formWrap = document.querySelector('.form__wrap');
    for (let key in obj) {
        const infoDiv = document.createElement('div');
        infoDiv.classList.add('info');

        const infoLeftDiv = document.createElement('div');
        infoLeftDiv.classList.add('info__left');

        const infoNameDiv = document.createElement('div');
        infoNameDiv.classList.add('info__name');
        infoLeftDiv.appendChild(infoNameDiv);
        infoNameDiv.insertAdjacentHTML('beforeBegin', `Name: ${obj[key].name}`);

        const infoOwnerDiv = document.createElement('div');
        infoOwnerDiv.classList.add('info__owner');
        infoLeftDiv.appendChild(infoOwnerDiv);
        infoOwnerDiv.insertAdjacentHTML('beforeBegin', `Owner: ${obj[key].owner}`);

        const infoStarsDiv = document.createElement('div');
        infoStarsDiv.classList.add('info__stars');
        infoLeftDiv.appendChild(infoStarsDiv);
        infoStarsDiv.insertAdjacentHTML('beforeBegin', `Stars: ${obj[key].stars}`);

        infoDiv.appendChild(infoLeftDiv);

        const infoRightDiv = document.createElement('div');
        infoRightDiv.classList.add('info__right');

        const infoCloseDiv = document.createElement('img');
        infoCloseDiv.classList.add('info__close');
        infoCloseDiv.setAttribute('src', './images/close.png');
        infoRightDiv.appendChild(infoCloseDiv);

        infoDiv.appendChild(infoRightDiv);

        formWrap.appendChild(infoDiv);
        infoDiv.addEventListener('click', deleteInfo);
    }
};

export const deleteInfo = (e) => {
    if (e.target.classList.contains('info__close')) {
        e.currentTarget.style.display = 'none';
    }
};

export const updateDropdown = (query, fetchData, newFetch) => {
    const obj = {};
    const dropdown = document.getElementById('dropdown');
    dropdown.innerHTML = '';
    if (query) {
        fetchData(query).then((items) => {
            if (query.trim().length === 0) {
                return;
            }
            items.forEach((item) => {
                const div = document.createElement('div');
                div.textContent = item;
                div.classList.add('dropdown-item');

                div.addEventListener('click', (e) => {
                    newFetch(item, item, obj);
                    document.querySelector('.form__input').value = '';
                    dropdown.innerHTML = '';
                    dropdown.style.display = 'none';
                });

                dropdown.appendChild(div);
            });
            dropdown.style.display = 'block';
        });
    } else {
        dropdown.style.display = 'none';
    }
};
