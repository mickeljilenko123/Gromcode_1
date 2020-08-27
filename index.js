//input: string css selector
//output: HtmlElement

const btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
    // const obj = {
    //     name: 'Some user',
    // }
    // btn.addEventListener('click', hendleClick.bind(obj));
    btn.addEventListener('click', hendleClick);
});

function hendleClick(event) {
    // console.log(this);
    // console.log(`Hello, ${this.name}`);
    console.log(event.target.innerText);
};