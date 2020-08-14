'use strict;'

export const event = {
    guests: [
        { name: 'Tom', age: 17, email: 'exampe@server.com' },
        { name: 'John', age: 18, email: 'exampe@server.com' }
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