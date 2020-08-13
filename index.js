export const user = {
    getFullName(firstName, lastName) {
        console.log(`${firstName} ${lastName}`);
        return `${firstName} ${lastName}`;
    }
}

const fullName = user.getFullName;
fullName.call(user, 'John', 'Doe');