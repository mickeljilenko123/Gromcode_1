export const getTitle = () => {
    const elementsList = document.querySelector('.title').textContent;
    console.dir(elementsList);
    return elementsList;
}
getTitle();

export const getDescription = () => {
    const elementsList = document.querySelector('.about').innerText;
    console.dir(elementsList);
    return elementsList;
}
getDescription();

export const getPlans = () => {
    const elementsList = document.querySelector('.plans').innerHTML;
    console.dir(elementsList);
    return elementsList;
}
getPlans();

export const getGoal = () => {
    const elementsList = document.querySelector('.goal').outerHTML;
    console.dir(elementsList);
    return elementsList;
}
getGoal();