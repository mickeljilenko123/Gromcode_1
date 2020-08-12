export function createLogger() {
    let memory = [];

    function warn(elem) {
        memory.push({
            message: elem,
            dateTime: new Date(),
            type: 'warn',
        });
    }

    function error(elem) {
        memory.push({
            message: elem,
            dateTime: new Date(),
            type: 'error',
        });
    }

    function log(elem) {
        memory.push({
            message: elem,
            dateTime: new Date(),
            type: 'log',
        });
    }

    function getRecords(type) {
        console.log(memory);
        if (type !== undefined)
            memory.map((elem) => elem.type === type)
            .sort((a, b) => b.dateTime - a.dateTime);
        else
            memory.sort((a, b) => b.dateTime - a.dateTime);

    }

    return {
        warn,
        error,
        log,
        getRecords,
    };
}
// const logger = createLogger();
// logger.log('User logger in');
// logger.warn('User try to restricted page');
// logger.log('User logger out');
// logger.error('Unexpected error on the site');
// logger.getRecords();
// console.log(logger);