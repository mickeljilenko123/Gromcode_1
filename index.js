export const user = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName() {
        // console.log(`${this.firstName} ${this.lastName}`);
        return `${this.firstName} ${this.lastName}`;
    }
}

const fullName = user.getFullName;
fullName.call(user);