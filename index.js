'use strict;'

export const event = {
    guests: [
        { name: 'Tom', age: 17, email: 'exampe@server.com' },
        { name: 'John', age: 18, email: 'exampe@server.com' },
    ],
    message: 'Welcome to the party!',
    getInvitations() {
        return this.guests
            .filter(({ age }) => age >= 18)
            .map(({ name, email }) => ({
                email: `${email} `,
                message: `Dear ${name}! ${this.message}`,
                email
            }));
    }
}

console.log(event.getInvitations());