const colors = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
  "golden rod": '#daa520'
};

// const color = colors['golden rod']
// console.log(color);


let car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020
};

car['passenger capacity'] = 5

obj = {...car, 'passenger capacity': 5}
// console.log(obj)

const student = {
  name: "Hamim Sakep",
  id: 5421,
  physics: {
      subject: "HSC Physics",
      author: "Shahjahan Tapan",
      marks: 30
  }
};

// const physicsMarks = student['physics'].marks;
const physicsMarks = student.physics.marks;
// console.log(physicsMarks);


// counting the properties of an object that how many property have in this object

let students = {
  name: 'Ariana Grande',
  age: 21,
  city: 'Gaibandha',
  isStudent: true
};


// const props = Object.keys(students)
// console.log(props);
// // console.log(props.length);



let myObject = {

  name: 'John Doe',
  age: 25,
  city: 'Example City',
  isStudent: true
  };

  const keys = Object.keys(myObject)
  const key = Object.keys(myObject)

  for ( const key in myObject){
    
    console.log(key, ':',myObject[key], typeof(key));
  }


  // for ( const key of myObject){
  //   console.log(key, ':',myObject[key]);
  // }

