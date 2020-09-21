import { printProfile } from './profile'; 

const userData = {
    name: 'Victor',
    age: 30,
};

const profile = {
    ...userData,
    company: 'Gromcode',
};

printProfile(profile);