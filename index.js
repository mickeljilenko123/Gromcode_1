const user = {
    firstName: 'Bruce',
    lastName: 'Wayne',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
        // console.log(`${this.firstName} ${this.lastName}`);
    },
    set fullName(value) {
        const [firstName, lastName] = value.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    },
};
// user.fullName

// user.fullName = 'Tom Lee';

// user.fullName

export default user;