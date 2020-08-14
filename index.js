'use strict;'

export const event = {
    guests: [
        { name: 'Tom', email: 'exampe@server.com', age: 17 },
        { name: 'John', email: 'exampe@server.com', age: 18 }
    ],
    message: 'Welcome to the party!',
    getInvitations() {
        return this.guests
            .filter(({ age }) => age >= 18)
            .map(({ email, name }) => ({
                email,
                text: `Dear ${name}! ${this.message}`,
            }));
    }
}
console.log(event.getInvitations());