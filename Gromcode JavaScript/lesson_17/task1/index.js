const user = {
    firstName: 'Roland',
    lastName: 'Diskein',
    getFullName() {
        return (`${this.firstName} ${this.lastName}`);
    }
};

user.getFullName();

export { user };