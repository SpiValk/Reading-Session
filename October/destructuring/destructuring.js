//ARRAY DESTRUCTURING

const raceResults = ['tasos', 'psilos', 'skilos', 'tsio', 'spiros'];

const [first, second, , , fifth] = raceResults; //
const [gold, silver, bronze, ...unqualified] = raceResults;
//So...
const [winner, , , ...results] = raceResults;

console.log(gold);

console.log(unqualified);

console.log(fifth);

//OBJECT DESTRUCTURING
const runner = {
  firstName: 'Eluid',
  lastName: 'Kipchoge',
  country: 'Kenya',
  title: 'Elder of the Order of the Golden Heart of Kenya',
};

// const { firstName, lastName } = runner;
// console.log(firstName);

//if you want to change the name of the destructured value:
const { country: nation, title: honorific } = runner;
console.log(nation);
console.log(honorific);

//Use of Rest syntax:
const { firstName, lastName, ...other } = runner;
console.log(other);

// FUNCTION PARAMS DESTRUCTURING

//instead of getting the whole object as an argument we can use destructuring to take only the key-values we want:
function print({ firstName, lastName, title }) {
  console.log(`${firstName} ${lastName}, ${title}`);
}
print(runner);

//Array destructuring example:
const response = ['HTTP/1.1', '200 OK', 'application/json'];

function parseResponse([protocol, statusCode, ContentType]) {
  console.log(`Status: ${statusCode}`);
}
parseResponse(response);
