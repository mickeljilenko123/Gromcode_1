export const user = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName() {
        console.log(`${this.firsName} ${this.lastName}`);
    }
}

user.getFullName();