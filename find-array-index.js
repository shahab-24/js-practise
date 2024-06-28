const fruits = ['apple', 'mango', 'jackfruits', 'Banana']
// const target = 'Banana';
let foundIndex = 0;

const exist = 'Banana'

for ( let i = 0; i < fruits.length; i++) {
  const currentItem = fruits[i];
  
  
  if(currentItem === exist) {
   
    foundIndex = i;
    console.log('banana index no found', foundIndex);
  }
  

}
if(foundIndex > 0){
  console.log('founded');
}
else{
  console.log('not found');
}