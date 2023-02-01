// 1
// const rectangleArea = (width, height) => width * height;

// const rectangle1 = [1, 2];
// const rectangle2 = [3, 5];
// const rectangle3 = [6, 9];
// const rectangles = [rectangle1, rectangle2, rectangle3];

// rectangles.forEach((rectangle) => console.log(rectangleArea(...rectangle)));



// 2
// const sum = (...numbers) => numbers.reduce((a, b) => a + b)

// console.log(sum(1, 2, 3, 4, 5));



// 3
// const alex = {
//   name: 'Alex',
//   age: 26,
//   likes: ['fly', 'fishing'],
//   nationality: 'Australian',
// };

// const gunnar = {
//   name: 'Gunnar',
//   age: 30,
//   likes: ['hiking', 'scuba diving', 'taking pictures'],
//   nationality: 'Icelandic',
// };

// // complete a assinatura da função abaixo
// const personLikes = (obj) => {
//   const {name, age, likes} = obj;
//   return `${name} is ${age} years old and likes ${likes.join(', ')}.`;
// }

// console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'
// console.log(personLikes(gunnar)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'



// 4
// const people = [
//   {
//     name: 'Nicole',
//     bornIn: 1992,
//     nationality: 'Australian',
//   },
//   {
//     name: 'Harry',
//     bornIn: 2008,
//     nationality: 'Australian',
//   },
//   {
//     name: 'Toby',
//     bornIn: 1901,
//     nationality: 'Australian',
//   },
//   {
//     name: 'Frida',
//     bornIn: 1960,
//     nationality: 'Dannish',
//   },
//   {
//     name: 'Fernando',
//     bornIn: 2001,
//     nationality: 'Brazilian',
//   },
// ];

// // escreva filterPeople abaixo
// const filterPeople = (array) => {
//   return array.filter((obj) => {
//     const {name, bornIn, nationality} = obj;
//     if (nationality === 'Australian' && bornIn > 1900 && bornIn <= 2000) {
//       return name
//     }
//   })
// }

// console.log(filterPeople(people));



// 5
// const myList = [1, 2, 3];

// // escreva swap abaixo
// const swap = (a, b, c) => [c, b, a];

// console.log(swap(...myList));



// 6
// const palio = ['Palio', 'Fiat', 2019];
// const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
// const chiron = ['Chiron', 'Bugatti', 2016];

// // escreva toObject abaixo
// const toObject = (model, brand, releaseYear) => ({
//   model,
//   brand,
//   releaseYear,
// })

// console.log(toObject(...palio));
// console.log(toObject(...shelbyCobra));
// console.log(toObject(...chiron));



// 7
// const ships = [
//   {
//     name: 'Titanic',
//     length: 269.1,
//     measurementUnit: 'meters',
//   },
//   {
//     name: 'Queen Mary 2',
//     length: 1132,
//     measurementUnit: 'feet',
//   },
//   {
//     name: 'Yamato',
//     length: 256,
//     measurementUnit: 'meters',
//   },
// ];

// escreva shipLength abaixo
// const shipLength = (obj) => {
//   const {name, length, measurementUnit} = obj;
//   return `${name} is ${length} ${measurementUnit} long`
// }

// console.log(shipLength(ships[0])); // 'Titanic is 269.1 meters long'
// console.log(shipLength(ships[1])); // 'Queen Mary 2 is 1132 feet long'
// console.log(shipLength(ships[2])); // 'Yamato is 256 meters long'



// 8
// escreva greet abaixo
// const greet = (person, mesage = 'Hi') => `${mesage} ${person}`;

// console.log(greet('John')) // 'Hi John'
// console.log(greet('John', 'Good morning')) // 'Good morning John'
// console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'



// 9
// const yearSeasons = {
//   spring: ['March', 'April', 'May'],
//   summer: ['June', 'July', 'August'],
//   autumn: ['September', 'October', 'November'],
//   winter: ['December', 'January', 'February'],
// };

// const {spring, summer, autumn, winter} = yearSeasons;

// const monthsOfTheYear = [...spring, ...summer, ...autumn, ...winter];

// console.log(monthsOfTheYear);
