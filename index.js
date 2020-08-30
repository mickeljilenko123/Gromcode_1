const favorites = ['id-6', 'id-17'];

const tree = {
    id: 'id-1',
    name: 'Products',
    nodes: [{
            id: 'id-2',
            name: 'Food',
            nodes: [{
                id: 'id-6',
                name: 'Drinks',
                nodes: []
            }]
        },
        {
            id: 'id-17',
            name: 'Vehicles',
            nodes: []
        }
    ],
};

const markFovorites = (tree, favorites) => {
    const isFavorite = favorites.includes(tree.id) // Проверить входит ли этот id в массив favorite



    //Нужно вернуть новый массив с фложком favorites
    return {
        ...tree, //Используем спред оператор что бы разобрать обьект 
        isFavorite,
        nodes: tree.nodes.map(childNodes => markFovorites(childNodes, favorites)), //Создаем новое под дерево
    }

};
const res = markFovorites(tree, favorites);
console.log(res);