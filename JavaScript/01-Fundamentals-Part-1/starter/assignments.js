/*
let country = "Brazil";
let population = "210m";
let continent = "South America";
let isIsland = false;
let language;

console.log(typeof country);
console.log(typeof population);
console.log(typeof continent);
console.log(typeof isIsland);
console.log(typeof language)

let age = 30;
age = 31;
console.log(age);

const birthYear = 1994
console.log(birthYear)
*/
//Body Mass Index - Challenge

const markMass = 78;
const markHeight = 1.69;
const jonhMass = 92;
const jonhHeight = 1.95;

const markBMI = markMass / ( markHeight ** 2);
const jonhBMI = jonhMass / (jonhHeight * jonhHeight);

const markHigherBMI = markBMI > jonhBMI;

console.log(markBMI);
console.log(jonhBMI);
console.log(markHigherBMI);