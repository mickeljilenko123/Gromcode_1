export const getTitle = () => {
    const elementsList = document.querySelector('.title').textContent;
    console.dir(elementsList);
    return elementsList;
}
getTitle();