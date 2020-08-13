const user = {
    getFullName(firstName, lastName) {
        console.log(`${firstName}, ${lastName}`);
    }
}

export const fullName = user.getFullName;
fullName.call(user, 'John', 'Doe');