const vehicle = {
    move() {
        console.log(`${this.name} is moving`);
    },
    stop() {
        console.log(`${this.name} stopped`);
    },
}

const ship = {
    name: 'Argo',
    hasWheels: false,
    startMachine() {
        console.log(`${this.name} lifting anchor up`);
        ship.move();
    },
    stopMachine() {
        ship.stop();
        console.log(`${this.name} lifting anchor down`);
    },
    __proto__: vehicle,
};

function getOwnProps(value) {
    // console.log(Object.keys(value))
    // return Object.keys(value);
    for (let prop in value) {
        if (value.hasOwnProperty(prop)) {
            // console.log(prop);
            return [prop];
        };
    };
};


console.log(getOwnProps(ship));

export {
    getOwnProps
};