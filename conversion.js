function inchToFeet(inch){
  const feetNum = inch / 12;
  const feetInt = parseInt(feetNum);
  const inchRemaining = inch % 12;
  const total = feetInt + ' ft ' + inchRemaining + ' inch';
  return total

}

const result = inchToFeet(88)
// console.log(result);


// odd average......

function oddAvg(oddNum){
  let oddArr = [];
  let sum = 0;

  for( const i of oddNum){
    // if(i % 2 !== 0){
    //   oddArr.push(i); 
    // }
    i % 2 !== 0 ? oddArr.push(i) : 'false';
  }
  for(const i of oddArr){
    sum = sum + i;
  }
//   console.log(oddArr);
//  console.log(sum);
const avgNum = sum / oddArr.length;
 return avgNum;

}

const numbers = [23, 24, 96, 55, 43, 81]

const result2 = oddAvg(numbers)
console.log(result2);