var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[2];
cardsInPlay.push(cardOne, cardTwo);
console.log("User Flipped " + cardOne);
console.log("User Flipped " + cardTwo);
if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[2]) {
        alert("You found a match!");
    } else {
        alert("Sorry, try again.");
    }
}
