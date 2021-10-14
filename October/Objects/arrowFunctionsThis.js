// Annoyomatic Demo

const annoyer = {
  phrases: ['literally', 'cray cray', "I can't even", 'totes!', 'YOLO', "Can't stop, won't stop"],
  pickPhrase() {
    const { phrases } = this;
    const index = Math.floor(Math.random() * phrases.length);
    return phrases[index];
  },
  //   start() {
  //     console.log(this.pickPhrase());
  //     setInterval(function () {
  //       console.log(this);       //inside setInterval 'this' refers to the window object (probably because its a window method) so we'll have TypeError: this.pickPhrase is not a function )
  //       console.log(this.pickPhrase());
  //     }, 1000);
  //   },

  //the proper way to access 'this' is with arrow function
  start() {
    this.timerId = setInterval(() => {
      //with the arrow function, 'this' refers to the object the method start() was created!
      // console.log(this);
      console.log(this.pickPhrase());
    }, 1000);
  },

  stop() {
    clearInterval(this.timerId);
    console.log('STOOOOOOOP!!');
  },
};

console.log(annoyer.start());

setTimeout(() => annoyer.stop(), 5000);
