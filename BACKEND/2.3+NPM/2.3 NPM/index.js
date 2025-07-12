import generateName  from 'sillyname'
import superheroes from 'superheroes';
let sillyName = generateName();

console.log(`My name is ${sillyName}`);


import randomSuperheroes  from 'superheroes'
let superIndex = Math.round(Math.random() * superheroes.length)  ;
console.log(superIndex);
let superName = randomSuperheroes[superIndex];

console.log(`There's a new superhero in town - ${superName}`);