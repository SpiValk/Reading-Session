//this KEYWORD

function sayHi() {
  console.log('HI');
  console.log(this); //'this' refers to the window (global scope object in the browser)
}

const person = {
  first: 'Spiros',
  last: 'Valkaniotis',
  nickName: 'Chilis',
  fullName() {
    //shorthand for methods, avoiding key-value pair syntax
    console.log(`${this.first} ${this.last} AKA ${this.nickName}`); //if we don use 'this', first last and nickName are undefined
  },
};

person.fullName();

//Another approach with destructuring this
const person2 = {
  first: 'Xristos',
  last: 'Tsiouris',
  nickName: 'Nokos',
  fullName() {
    const { first, last, nickName } = this;
    return `${first} ${last} AKA ${nickName}`;
  },
  printBio() {
    const fullName = this.fullName();
    console.log(`${fullName} is very tall`);
  },
  laugh: () => {
    //arrow functions with 'this' in them don behave the same way. 'this' keyword now references to the WINDOW object!
    console.log(this);
    console.log(`${this.nickName} says hahah`);
  },
};

person2.fullName();
person2.printBio();

const printBio = person2.printBio; //making a reference to printBio method
//output: this.fullName is not a function!!!    <-- this now is referencing the window object because its called from outside the object

//A general rule for 'this': it is referencing the thing LEFT TO THE DOT when the method is invoked (e.g. person2.printBio(): refers to person2 ) (arrow functions excluded)
