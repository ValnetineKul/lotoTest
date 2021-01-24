export const customArrayCreator = (generateNum: number, inRange: number) => {
  const arr = [];
  for(; arr.length < generateNum; ){
    const randomNum = Math.floor(Math.random() * inRange);
    if(arr.indexOf(randomNum) === -1) arr.push(randomNum);
  }
  return arr;
};