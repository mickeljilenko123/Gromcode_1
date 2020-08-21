
const onceClick = document.querySelector('.single-use-btn');

function myClickHandler() {
    console.log('clicked')
    onceClick.removeEventListener('click', myClickHandler, false);
};

onceClick.addEventListener('click', myClickHandler);

// onceClick.addEventListener('click', myClickHandler, {once: true});

