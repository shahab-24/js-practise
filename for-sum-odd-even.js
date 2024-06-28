let sum = 0;
for(let i = 91; i <=129; i+=2){
  sum = sum + i;
  // console.log(i,sum);
}

console.log(sum);

// sum even numbers

let total = 0;
for(let i = 51; i <=85; i+=1){
  if(i % 2 === 0){
    total = total + i;
    console.log(total, i);
  }
 
}
