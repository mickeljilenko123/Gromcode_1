export const user = {
    getFullName(firstName, lastName) {
        return `${firstName}, ${lastName}`;
    }
}

const fullName = user.getFullName;
fullName.call(user, 'John', 'Doe');