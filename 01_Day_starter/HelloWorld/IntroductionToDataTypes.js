// let firstName;
// console.log(firstName); // undefined, because it is not assigned to a value yet
let emptyValue = null;
console.log(emptyValue);
// Checking Data Types
// To check the data type of a certain variable, we use the typeof operator. See the following example
console.log(typeof "Asabeneh"); // string
console.log(typeof 5); // number
console.log(typeof true); // boolean
console.log(typeof null); // object type
console.log(typeof undefined); // undefined
/*A valid JavaScript variable name must follow the following rules:
A JavaScript variable name should not begin with a number.
A JavaScript variable name does not allow special characters except dollar sign and underscore.
A JavaScript variable name follows a camelCase convention.
A JavaScript variable name should not have space between words.
firstName
lastName
country
city
capitalCity
age
isMarried
first_name
last_name
is_married
capital_city
num1
num_1
_num_1
$num1
year2020
year_2020 */
// Declaring different variables of different data types
let firstName = "Thoai"; // first name of a person
let lastName = "Tran"; // last name of a person
let country = "VietNam"; // country
let city = "HCM"; // capital city
let age = 100; // age in years
let isMarried = true;

console.log(firstName, lastName, country, city, age, isMarried);
// Declaring variables with number values
const gravity = 9.81; // earth gravity  in m/s2
const boilingPoint = 100; // water boiling point, temperature in °C
const PI = 3.14; // geometrical constant
console.log(gravity, boilingPoint, PI);
// Variables can also be declaring in one line separated by comma, however recommend to use a seperate line to make code more readble
let name = "Thoai",
  job = "Duoc si",
  live = "Viet Nam";
console.log(name, job, live);
