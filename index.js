const user = {
    firtsName: 'John',
    lastName: 'Doe',
    getFullName() {
        console.log(`Hi, I am ${this.firtsName} ${this.lastName}`);
    }
}

user.getFullName();