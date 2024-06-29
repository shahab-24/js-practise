function multiply(a, b, c, d){
  const sum = a * b * c * d;
  return sum;
}

const result = multiply(5, 3, 2, 7)
// console.log(result);



// task-2

function oddEven(num){
  if(num % 2 === 1){
    const sum = num * 2;
    return sum;
  }
  else{
    const sum = num / 2;
    return sum;
  }
}

const result2 = oddEven(15)
// console.log(result2);

// task-3

function make_avg(arr){
  let sum = 0;

  for(const i of arr){
    sum = sum + i;
  }
  const avg = sum / arr.length;
  return avg;

 
 

}


const numbers = [5, 6, 8, 15, 24,37]
const result3 = make_avg(numbers)
// console.log(result3);


// task-4

function countZero(str){
  const strArr = str.split('')
  let zero = [];
  for(const i of strArr){
    if(i === '0'){
      zero.push(i);
    }
  }
  const zeroCount = zero.length;
  return zeroCount;

}

const num = '01010010010100'
const result4 = countZero(num);
// console.log(result4);


// task-5

function evenOdd(num){
  if(num % 2 === 0){
    return 'Even';
  }
  else
    return 'Odd';
  
 
}

const result5 = evenOdd(13)
console.log(result5);

