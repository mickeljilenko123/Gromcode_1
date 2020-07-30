const getMessageForPassedStudents = (allStudents, failedStudents) => {
    const passedStudents = allStudents
        .filter(name => !failedStudents.includes(name));
    const message = passedStudents
        .map(name => 'Good job, ' + name)
    return message;
};

const allStudents = ['Ann', 'Tom', 'Bob', 'Kate'];
const failedStudents = ['Tom', 'Bob'];
console.log(getMessageForPassedStudents(allStudents, failedStudents));