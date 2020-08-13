export const user = {
    getFullName(firstName, lastName) {
        console.log(`${firstName}, ${lastName}`);
    }
}

const fullName = user.getFullName;
fullName.call(user, 'John', 'Doe');