const role = 'host';
const person = 'Jools Holland';
const role2 = 'Director';
const person2 = 'James Cameron';

const team = {
  role: person, //in this scenario, person is computed(calculated) as variable but role is just the key name
  //output: {role: 'Jools Holland'}
};

//the proper way to have a computed key-value pair is below:
const team = {};
team[role] = person;
//output: {host: 'Jools Holland'}

//now the NEW Computed Properties way!
const team = {
  [role]: person,
  [role2]: person2,
  [1 + 2 + 3]: 'six', //even this
};
//output: {host: 'Jools Holland' , Director: 'James Cameron', 6: 'six' }

//function example
const addProp = (obj, key, value) => ({ ...obj, [key]: value });
const result = addProp(team, 'fan', 'spyros');
