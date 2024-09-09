function convertTemp(celsius){
  const farenheight = celsius * 9/5 + 32

return farenheight;
}

const result = convertTemp(30)
// console.log(result);





// task-2
function repeatedNum(arr){
  let repeat = [];
  for(const num of arr){
    if(repeat.includes(num) === false){
      repeat.push(num);
    }

  }
  const length = repeat.length;
  return length;

}

const numbers = [ 3, 5, 5]
const result2 =repeatedNum(numbers)
// console.log(result2);





// task-3
function countVowel(count){
  const vowels = "aeiouAEIOU";
  let sum = 0;
  

  for(const item of count){
    if(vowels.indexOf(item) !== -1){
    sum++;
  }
  // const vowel = ['a', 'e', 'i', 'o', 'u'
}
return sum;
}

const str = 'helloooo world'

const result3 = countVowel(str)
// console.log(result3);






// task---4......
function findWord(sentence){

  let arr = ''
  for(const item of sentence){
    if(item.length > arr.length){
      arr = item;
  }
}
return arr;
}
const givenStr = 'i am learning programming to become a programmer'
const splitWords = givenStr.split(' ')

const result4 = findWord(splitWords);
// const result6 = findWord(givenStr);
console.log(result4);
// console.log(result6);







// task= -5...........
function randomNum(num) {
  const rand = Math.random(num)
  if(rand > 10 && rand < 20){
    return rand;
  }

}

// const result5 = randomNum(15)
// console.log(result5);