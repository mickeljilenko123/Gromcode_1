 export const clearList = () => {
     const clearL = document.querySelector('.categories');
     clearL.innerHTML = '';
     console.log(clearL);
     return clearL;
 }

 clearList();