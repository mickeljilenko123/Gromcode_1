const students = [
    { name: 'Sem', birthDate: '01/10/2000', },
    { name: 'Alex', birthDate: '05/12/2001', },
    { name: 'Robert', birthDate: '10/05/2003', },
    { name: 'Monica', birthDate: '01/05/2002', },
];

// const studentsBirthDays = (students) => {
//     const allMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//     // ===========================================================
//     students.forEach(elem => {})


const studentsBirthDays = allStudents => {

    const allMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const sortAllStudents = allStudents.sort((a, b) => new Date(a.birthDate).getDate() - new Date(b.birthDate).getDate());
    // console.log(new Date(allStudents.birthDate).getDate())
    console.log(sortAllStudents)

    const getDatesOfStudents = sortAllStudents.reduce((acc, { name, birthDate }) => {
        const monthsName = allMonth[new Date(birthDate).getMonth()];
        return { ...acc, [monthsName]: acc[monthsName] ? acc[monthsName].concat(name) : [name] };
    }, {});

    console.log(getDatesOfStudents)
    return getDatesOfStudents;
};

studentsBirthDays(students)

export { studentsBirthDays };