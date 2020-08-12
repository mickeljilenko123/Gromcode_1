const name = 'Test';

function run() {
    console.log('run');
}

function createMessenger() {
    let message = 'Just learn it';
    let sender = 'Gromcode';

    function sendMessage(name) {
        console.log(`${name}, ${message}! Your ${sender}`);
    }

    function setSender(newSender) {
        sender = newSender;
    }

    function setMessage(text) {
        message = text;
    }
    return {
        sendMessage,
        setMessage,
        setSender,
    };
}
console.log(name);

const messanger1 = createMessenger();
messanger1.setSender('Set sender');
messanger1.sendMessage('Hello')

const messanger2 = createMessenger();

// Global lex env
// {
//     enviromentRecord: {
//         name: 'Test',
//         run: func,
//         createMessenger: func
//     },
//     outer: null
// }


//createMessager lex env
// {
// 
//
//
//
//
//
//