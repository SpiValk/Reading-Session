//NESTED DESTRUCTURING

const results = [
  //winners of marathon olympics 2016 by finishing order
  {
    first: 'Eluid',
    last: 'Kipchoge',
    country: 'Kenya',
  },
  {
    first: 'Feyisa',
    last: 'Lilesa',
    country: 'Ethiopia',
  },
  {
    first: 'Galen',
    last: 'Ruup',
    country: 'United States',
  },
];

//getting silver medalist's country with destructuring:
[, { country }] = results;
console.log(country); //Ethiopia

//A cleaner way of achieving this:
const [, silverWinner] = results;
const { country: silverCountry } = silverWinner;
console.log(silverCountry);
