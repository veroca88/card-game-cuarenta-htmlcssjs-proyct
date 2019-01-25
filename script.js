
// Cuarenta (playcards)
// by Veronica Donoso

let kindOfCards = ['Hearts', 'Clubs', 'Diamonds', 'Spades']
let valuesOfCards = ['Ace', 'King', 'Queen', 'Jack', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two']
let pointsOfPlays = ['Ten', 'Nine', 'Eight']

let deckOfCards = []
let dogsOfCards = []

for (let kindIdx = 0; kindIdx < kindOfCards.length; kindIdx++) {
  for (let valuesIdx = 0; valuesIdx < valuesOfCards.length; valuesIdx++) {
    deckOfCards.push(valuesOfCards[valuesIdx] + ' of ' + kindOfCards[kindIdx])
  }
  for (let dogsIdx = 0; dogsIdx < pointsOfPlays.length; dogsIdx++) {
    dogsOfCards.push(pointsOfPlays[dogsIdx] + ' of ' + kindOfCards[kindIdx])
  }
}
console.log('These are the Play Cards')
console.log(deckOfCards)
console.log("These are the points called 'Dogs'")
console.log(dogsOfCards)
