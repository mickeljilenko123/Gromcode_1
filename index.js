const tasks = [
    { text: 'Buy milk', done: false },
    { text: 'Pick up Tom from airport', done: false },
    { text: 'Visit party', done: false },
    { text: 'Visit doctor', done: true },
    { text: 'Buy meat', done: true },
];

const renderListItems = listItems => { //Получаем ел списка
    const listElem = document.querySelector('.list'); //Мы получаем ел

    const listItemsElems = listItems.map(listItem => {
        const listItemElem = document.createElement('li'); //Создаем лист айтем

        listItemElem.classList.add('list__item'); // к ел добавили класс
        if (listItem.done === true) {
            listItemElem.classList.add('list__item_done');
        }
        const checkboxElem = document.createElement('input');
        checkboxElem.setAttribute('type', 'checkbox');
        checkboxElem.classList.add('list__item-checkbox');
        listItemElem.append(checkboxElem, listItem.text);

        return listItemElem;
    });
    listElem.append(...listItemsElems);

};
renderListItems(tasks);