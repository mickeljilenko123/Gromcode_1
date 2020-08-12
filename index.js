export function createLogger() {
    let memory = [];

    function warn(elem) {
        memory.push({
            message: elem,
            dateTime: new Date(),
            type: 'warn',
        });
    };

    function error(elem) {
        memory.push({
            message: elem,
            dateTime: new Date(),
            type: 'error',
        });
    };

    function log(elem) {
        memory.push({
            message: elem,
            dateTime: new Date(),
            type: 'log',
        });
    };

    function getRecords(type) {
        // console.log(type)
        // if (type !== undefined) {
        //     let result = memory.filter(el => el.type === type);
        //     return result;
        // }

        if (type !== undefined) {
            let result = memory.map(el => el.type === type)
                .sort((a, b) => b.dateTime - a.dateTime);
            console.log(result)
            return result;
        }
    };

    return {
        warn,
        error,
        log,
        getRecords,
    };
};
// const logger = createLogger();
// logger.log('User logger in');
// logger.warn('User try to restricted page');
// logger.log('User logger out');
// logger.error('Unexpected error on the site');
// logger.getRecords();
// console.log(logger);