// const checkStatusAndParse = (response) => {
//   if (!response.ok) {
//     throw new Error(`Status Code Error: ${response.status}`); //fetch DOES NOT catch error codes. We have to 'throw new Error()'
//   }
//   //.json(): takes a Response stream and reads it to completion
//   return response.json();
// };

// //in order to create a standAlone utility function, we have to return a promise
// const printPlanets = (data) => {
//   console.log('Loaded 10 more planets');
//   for (let planet of data.results) {
//     console.log(planet.name);
//   }
//   return Promise.resolve(data); //we resolve with incoming data so we can chain .thens
// };

// const fetchNextPlanets = (url = 'https://swapi.dev/api/planets') => {
//   return fetch(url);
// };

// const errorHandler = (err) => {
//   console.log('something went wrong with fetch');
//   console.log(err);
// };

// fetchNextPlanets()
//   .then(checkStatusAndParse)
//   .then(printPlanets)
//   .then(fetchNextPlanets)
//   .then(checkStatusAndParse)
//   .then(printPlanets)
//   .then(fetchNextPlanets)
//   .then(checkStatusAndParse)
//   .then(printPlanets)
//   .catch(errorHandler);

// Axios library helps with the HTTP requests.

//Same example as in fetch file
const fetchNextPlanets = (url = 'https://swapi.dev/api/planets') => {
  return axios.get(url);
};

const printPlanets = ({ data }) => {
  for (let planet of data.results) {
    console.log(planet.name);
  }
  return Promise.resolve(data.next);
};

fetchNextPlanets()
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(printPlanets)
  .catch((err) => {
    console.log(err);
  });

// axios
//   .get('https://swapi.dev/api/planets') //axios.get(): fetches the data parsed
//   .then(({ data }) => {
//     console.log(data);
//     for (let planet of data.results) {
//       console.log(planet.name);
//     }
//     return axios.get(data.next);
//   })
//   .then(({ data }) => {
//     for (planet of data.results) {
//       console.log(planet.name);
//     }
//   })
//   .catch((err) => {
//     //axios takes care of throwing a new error with the status code for the .catch method to catch
//     console.log(`inside catch callback`);
//     console.log(err);
//   });
