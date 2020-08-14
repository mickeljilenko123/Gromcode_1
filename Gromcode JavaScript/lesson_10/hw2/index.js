const getRandomNumbers = (len, start, end) => {
   if (Math.floor(start) >= Math.floor(end))
      return null;
   let randomNum = Array(len).fill().map(len => Math.floor(Math.random() * (start - end + 1) + end))
   // len.map(len => Math.floor(Math.random() * (start - end + 1) + end))
   return randomNum;
}

console.log(getRandomNumbers(10, 1, 7));