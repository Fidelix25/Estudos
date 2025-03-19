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

//String interpolation - Template Literal

const firstName = "Washington";
const birthYear = 1994;
const year = 2025;
const job = "Power Apps Developer";
const title =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(title);

const titleNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;

console.log(titleNew);

//Multiple lines
console.log(`String with
multiple
lines`);

//Conditionals - control structure

const age = 15;
const isOldEnough = age >= 18;

if (age >= 18) {
  console.log(`Sarah can start driving license 🚗`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}

const birthYear = 2003;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);


const inputYear = "1994";
const age = 31;
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log("I'm " + 23 + " years old");
console.log(`I'm ${age} years old`);
console.log("23" - "10" - "3");
console.log("23" / "2");

let n = "1" + 1;
n = n - 1;
console.log(n);


// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Washington"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 10;
if (money) {
  console.log(`Don't spent it all`);
} else {
  console.log(`You should get a job!`);
}

let height = 123;
if (height) {
  console.log(`Height is definied!`);
} else {
  console.log(`Height is UNDEFINED`);
}
*/

const age = 18;
if (age === 18) console.log(`You just became an adult (strict)`);

// the triple equal sign does not allow type coercion

const ageNew = "18";
if (age == 18) console.log(`You just became an adult (loose)`);

const favourite = Number(prompt(`What's your favourite number?`));
console.log(favourite);
console.log(typeof favourite);

// more than one condition
if (favourite === 23) {
  console.log(`Awesome!`);
} else if (favourite === 7) {
  console.log(`7 is also cool!`);
} else if (favourite === 9) {
  console.log(`9 is also cool!`);
} else {
  console.log(`Number not 23, 7 or 9`);
}

// Negative condition
if (favourite !== 23) console.log(`Why not 23?`);
