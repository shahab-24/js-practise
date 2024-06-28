const numbers = [25, 36, 3, 4, 58, 566, 478, 895]

let maxNum = numbers[0];
let minNum = numbers[0];

for(let i = 0; i < numbers.length; i++){
  const currentNum = numbers[i];

  if(maxNum < currentNum){
    maxNum  = currentNum;
  }
  
  if(minNum > currentNum) {
    minNum = currentNum
  }

}
console.log(maxNum, minNum);