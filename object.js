const mobile = {
  brand : 'huwaei',
  price : 15000,
  camera: '32mp',
  screen: 720
}

for ( const key in mobile) {
  console.log(key);
}

const props = Object.keys(mobile)

for(const prop of props){
  // console.log(mobile[prop]);
}