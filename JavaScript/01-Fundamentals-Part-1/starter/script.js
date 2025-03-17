/*let js = "amazing";
console.log( 40+8+23-10);

console.log("Washington");
console.log(23);

let fName = "Washington";
let lName = "Fidelix"
console.log(firstName, lastName);
console.log(firstName);
console.log(firstName, lastName);

let person = "Washington";
let PI = 3.1415;

let myFirstJob = "Programmer"
let myCurrentJob = "Teacher"
*/
//Basic Operators
//Math Operators
const now = 2037;
const ageWashington = now - 1994
const ageSarah = now - 2018
console.log(ageWashington, ageSarah)

console.log(ageWashington * 2, ageWashington / 10, 2 ** 3);
//2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Washington";
const lastName = "Fidelix";
console.log(firstName + ' ' + lastName);

//Assignment Operators
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100 
x ++; // x = x + 1
x --;
x --; //Oposite of ++
console.log(x);

//Comparison operators
console.log(ageWashington > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

let z, y;
z = y = 25 - 10 - 5; //x = y = 10, x = 10
console.log(z, y)

const averageAge = (ageWashington + ageSarah) / 2;

console.log( ageWashington, ageSarah, averageAge)
