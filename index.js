const rooms = {
    room1: [
        { name: 'room1 name1' }, { name: 'room1 name2' }, { name: 'room1 name3' }, { name: 'room1 name4' }
    ],
    room2: [
        { name: 'room2 name1' }, { name: 'room2 name2' }, { name: 'room2 name3' }, { name: 'room2 name4' }
    ],
    room3: [
        { name: 'room3 name1' }, { name: 'room3 name2' }, { name: 'room3 name3' }, { name: 'room3 name4' }
    ],
};

const getPeople = roomsObj => {
    const roomArray = Object.values(roomsObj);
    console.log(roomArray);
    const filterArray = roomArray.flat();
    // const flatArray = filterArray.flat(room => room);
    const mapArray = filterArray.map(room => (room = room.name));
    return mapArray;

}
console.log(getPeople(rooms));