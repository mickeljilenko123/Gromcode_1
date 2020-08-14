const user = {
    firstName: "Roland",
    lastName: "Diskein",
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
        // console.log(`${this.firstName} ${this.lastName}`);
    },
    setFullName(getFullName) {
        // console.log(user.firstName);
        let a = getFullName.split(" ");
        console.log(a[0]);
        // let a = this.getFullName().split(" ");
        // console.log(a[0]);

        this.firstName = a[0];
        this.lastName = a[1];

        // console.log((this.firstName = a[0]));
        // console.log((this.lastName = a[1]));
    },
};

// user.getFullName();

// user.setFullName();

export { user };