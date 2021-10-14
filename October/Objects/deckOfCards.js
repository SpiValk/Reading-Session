//An example to illustrate why methods inside an object are useful

// function makeDeck() {
//   const deck = [];
//   const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
//   const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';
//   for (let suit of suits) {
//     for (let value of values.split(',')) {
//       deck.push({ value, suit });
//     }
//   }
//   return deck;
// }

// console.log(makeDeck());

//Object approach
const myDeck = {
  deck: [],
  drawnCards: [],
  suits: ['hearts', 'diamonds', 'spades', 'clubs'],
  values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
  initializeDeck() {
    const { suits, values, deck } = this;
    for (let value of values.split(',')) {
      for (let suit of suits) {
        deck.push({ value, suit });
      }
    }
  },

  drawCard() {
    const card = this.deck.pop();
    this.drawnCards.push(card);
    return card;
  },

  drawCards(numCards) {
    const gardsDrawn = []; //to know witch cards have been drawn from this method
    for (let i = 0; i > numCards; i++) {
      cardsDrawn.push(this.drawCard());
    }
    return gardsDrawn;
  },

  shuffle() {
    const { deck } = this;
    for (let i = deck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  },
};

//The Fisher-Yates shuffle algorithm
function shuffle(arr) {
  //loop over the array backwards
  for (let i = arr.length; i > 0; i--) {
    //pick random index before current element
    let j = Math.floor(Math.random() * (i + 1));
    //swap
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

//You can wrap this whole object in a function to make a deck generator :)
