const colors = ['red', 'blue', 'green', 'yellow', 'orange']

const rev_color = [];

for(const i of colors){
  
  rev_color.unshift(i)
  
}
// console.log(rev_color);

for(let i = 0; i <colors.length; i++){
  const num = colors[i]
  rev_color.unshift(num)
}

// console.log(rev_color);


const numbers = [12, 98, 4, 42, 23, 5, 645, 654, 88]

const evenNum = [];
const oddNum = [];

for(const num of numbers){
  if(num % 2 === 0){
    evenNum.push(num)
  }
  else{
    oddNum.push(num)
  }

}
// console.log(oddNum);

const numb = ['Tom', 'Tim', 'Tin', 'Tik',];

const togetherNum = [''];
for(const num of numb){
  
  togetherNum.push(num)
}

const result = togetherNum.join('')

// console.log(result);

const sentence = 'I am a hard working person'

const reverseSentence = sentence.split(' ').reverse().join(' ')
console.log(reverseSentence);
// const rev_sent = sentence.reverse();
// console.log(rev_sent);

// for(const i of sent){

// }
// const sentJoin = sentence.join('')
// console.log(sentJoin);

// const rev_sent = [];
// for(const i of sentence){
// rev_sent.push(i)
// }

// console.log(rev_sent);


