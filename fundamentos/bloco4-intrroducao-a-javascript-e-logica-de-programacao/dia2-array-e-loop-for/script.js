// array dos exercicios 1 a 7

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// exercicios 1
// console.log(numbers)

//exercicio 2
// let sum = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//     sum = sum + numbers[index]
// }

// console.log(sum)

//exercicio 3
// let sum = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//     sum = sum + numbers[index]
// }

// let artimeticMean = sum / numbers.length


// console.log(artimeticMean)

// exercicio 4

// let sum = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//     sum = sum + numbers[index]
// }

// let artimeticMean = sum / numbers.length


// if (artimeticMean > 20) {
//     console.log("valor maior que 20")
// } else {
//     console.log("valor menos ou igual a 20")
// }


//exercicio 5
// for (let index = 0; index < numbers.length; index += 1) {
//     let check = 0;
//     for (let index2 = 0; index2 < numbers.length; index2 += 1) {
//         if (numbers[index] >= numbers[index2]){
//             check += 1
//         }
//     }
//     if (check == numbers.length){
//         console.log('O número ' + numbers[index] + ' é o maior da array.')
//     }
// }


// exercicio 6
// let pares = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//         if (numbers[index] % 2 == 0){
//         pares += 1;
//     }
    
// }
// let impares = numbers.length - pares;
// if (impares != 0) {
//     console.log(impares);
// } else {
//     console.log('nenhum valor ímpar encontrado');
// }


// exercicio 7

// for (let index = 0; index < numbers.length; index += 1) {
//     let check = 0;
//     for (let index2 = 0; index2 < numbers.length; index2 += 1) {
//         if (numbers[index] <= numbers[index2]){
//             check += 1
//         }
//     }
//     if (check == numbers.length){
//         console.log('O número ' + numbers[index] + ' é o menor da array.')
//     }
// }


//exercicio 8
// let numeros = [];
// for (index = 1; index <= 25; index += 1) {
//     numeros.push(index);
// }
// console.log(numeros)

// exercicio 9
// let numeros = [];
// for (index = 1; index <= 25; index += 1) {
//     numeros.push(index);
// }

// let dividido = [];
// for (index = 0; index < numeros.length; index +=1) {
//     dividido.push(numeros[index] / 2);
// }

// console.log(dividido)

// refatorando:
// let dividido = [];
// for (index = 1; index <= 25; index += 1) {
//     dividido.push(index / 2);
// }
// console.log(dividido)

// bônus

//em ordem crescente
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 1; index < numbers.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (numbers[index] < numbers[secondIndex]) {
//         let position = numbers[index];
//         numbers[index] = numbers[secondIndex];
//         numbers[secondIndex] = position;
//       }
//     }
//   }
//   console.log(numbers)

// em ordem decrescente
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 1; index < numbers.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (numbers[index] > numbers[secondIndex]) {
//         let position = numbers[index];
//         numbers[index] = numbers[secondIndex];
//         numbers[secondIndex] = position;
//       }
//     }
//   }
//   console.log(numbers)


// agr multiplicando pelo numero seguinte
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let numbersX = [];

// for (let index = 0; index < numbers.length; index += 1){
//     if (index == numbers.length - 1){
//         numbersX.push(numbers[index] * 2)
//     } else {
//         numbersX.push(numbers[index] * numbers[index + 1])
//     }
    
// }
// console.log(numbersX)