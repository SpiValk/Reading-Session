//Fetch gets ONE argument(the path you want to fetch) and returns a Promise that
//resolves to the Response Stream

const checkStatusAndParse = (response) => {
  if (!response.ok) {
    throw new Error(`Status Code Error: ${response.status}`); //fetch DOES NOT catch error codes. We have to 'throw new Error()'
  }
  //.json(): takes a Response stream and reads it to completion
  return response.json();
};

//in order to create a standAlone utility function, we have to return a promise
const printPlanets = (data) => {
  console.log('Loaded 10 more planets');
  for (let planet of data.results) {
    console.log(planet.name);
  }
  return Promise.resolve(data); //we resolve with incoming data so we can chain .thens
};

const fetchNextPlanets = (url = 'https://swapi.dev/api/planets') => {
  return fetch(url);
};

const errorHandler = (err) => {
  console.log('something went wrong with fetch');
  console.log(err);
};

fetchNextPlanets()
  .then(checkStatusAndParse)
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(checkStatusAndParse)
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(checkStatusAndParse)
  .then(printPlanets)
  .catch(errorHandler);
