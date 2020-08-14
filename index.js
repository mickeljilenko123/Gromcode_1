// const footballClub = {
//     name: 'Liverpool',
//     country: 'England',
//     color: 'red',
//     stadium: 'Enfield',
// };

function saveCalls(allCalls) {

    // let calls = [];
    function withMemory() {
        withMemory.calls.push([...arguments]);
        return allCalls.call(this, arguments);
    }
    withMemory.calls = [];
    return withMemory;

};


export {
    saveCalls
};

// =============================================================