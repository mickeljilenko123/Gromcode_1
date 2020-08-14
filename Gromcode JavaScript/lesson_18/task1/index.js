// 'use strict';

const event = {
    guests: [
        { name: 'Tom', age: 17, email: 'example@Server.com', },
        { name: 'Bob', age: 18, email: 'example@Server.com', },
        { name: 'Sam', age: 22, email: 'example@Server.com', },
    ],
    message: "Welcome to the party!",
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

export { event };
