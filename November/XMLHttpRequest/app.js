// !! XMLHttpRequest(XHR) DOES NOT support promises !!

//a single XHR:
const sampleRequest = new XMLHttpRequest();
sampleRequest.addEventListener('load', function () {
  console.log('IT WORKED!!');
  const data = JSON.parse(this.responseText);
  for (let planet of data.results) {
    console.log(planet.name);
  }
});
sampleRequest.addEventListener('error', () => {
  console.log('ERRORRRRR!!!');
});
sampleRequest.open('GET', 'https://swapi.dev/api/planets');
sampleRequest.send();

//nested XHRs (because there is no other way)
const firstRequest = new XMLHttpRequest();
firstRequest.addEventListener('load', function () {
  console.log('FRIST REQ WORKED!!');
  const data = JSON.parse(this.responseText);
  const filmURL = data.results[0].films[0];
  //we now have a url(filmURL) ready for the second request
  filmRequest = new XMLHttpRequest();
  filmRequest.addEventListener('load', function () {
    console.log('SECOND REQ WORKED!');
    const filmData = JSON.parse(this.responseText);
    console.log(filmData);
  });
  filmRequest.addEventListener('error', function () {
    console.log('SECOND REQ FAILED :(');
  });
  filmRequest.open('GET', filmURL);
  filmRequest.send();
});
firstRequest.addEventListener('error', () => {
  console.log('FIRST REQ ERRORRRRR!!!');
});
firstRequest.open('GET', 'https://swapi.dev/api/planets');
firstRequest.send();
