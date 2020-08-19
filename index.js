export const manageClasses = () => {
        // const ul = document.querySelector('ul');
        // console.log(ul);

        const liCreate = document.querySelector('.one');
        liCreate.classList.add('selected')
        console.log(liCreate);

        const liTwo = document.querySelector('.two');
        liTwo.classList.remove('selected')
        console.log(liTwo);

        const liThree = document.querySelector('.three');
        liThree.classList.remove('three_done')
        console.log(liThree);

        const liFour = document.querySelector('.four');
        liFour.classList.add('another-class')
        console.log(liFour);
    }
    // manageClasses();