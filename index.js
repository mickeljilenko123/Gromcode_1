const users = {
    'Tom': 19,
    'Ann': 16,
    'Bob': 20,
}
const getAdults = usersObj => {
    //Преобразовали обьект в массив масивов
    const userArray = Object.entries(usersObj);
    //Отфильтровать массив user[1] означает с со второго елемента.
    const filteredUsersArray = userArray.filter(user => user[1] >= 18);
    //через мап нам нужно откинуть значения и вернуть первый елемент
    const userNames = filteredUsersArray.map(user => user[0]);
    return userNames;
}
console.log(getAdults(users));