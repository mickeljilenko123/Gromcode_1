'use strict;'

export const event = {
    guests: [
        { name: 'Tom', email: 'exampe@server.com', age: 17 },
        { name: 'John', email: 'exampe@server.com', age: 18 }
    ],
    message: 'Welcome to the party!',
    getInvintations() {
        return this.guests
            .filter(({ age }) => age >= 18)
            .map(({ name, email }) => ({
                email,
                text: `Dear ${name}! ${this.message}`,
            }));
    }
}
console.log(event.getInvintations());