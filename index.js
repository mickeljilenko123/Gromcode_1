export const finishList = () => {
    const addElem = document.createElement('ul');
    addElem.classList.add('.list');

    const addList = document.createElement('li');
    const addList2 = document.createElement('li');
    const addList3 = document.createElement('li');
    addList3.classList.add('special');
    const addList4 = document.createElement('li');
    addElem.append(addList, addList2, addList3, addList4);
    addList.textContent = '3';
    addList2.textContent = '2';
    addList3.textContent = '5';
    addList4.textContent = '7';
    console.log(addElem);

}
finishList();