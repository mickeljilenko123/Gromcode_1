const getTitle = () => {
    const elementsList = document.querySelector('.title').textContent;
    console.dir(elementsList);
    return elementsList;
}
getTitle();

// const getDescription = () => {
//     const elementsList = document.querySelector('.about').innerText;
//     console.dir(elementsList);
//     return elementsList;
// }
// getDescription();

// const getPlans = () => {
//     const elementsList = document.querySelector('.plans').innerHTML;
//     console.dir(elementsList);
//     return elementsList;
// }
// getPlans();

// const getGoal = () => {
//     const elementsList = document.querySelector('.goal').outerHTML;
//     console.dir(elementsList);
//     return elementsList;
// }
// getGoal();