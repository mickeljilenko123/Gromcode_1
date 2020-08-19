 export const clearList = () => {
     const clearListDelete = document.querySelector('.categories');
     clearListDelete.innerHTML = '';
     return clearListDelete;
 }

 clearList();