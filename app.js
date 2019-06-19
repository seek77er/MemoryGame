/*
 * Create a list that holds all of your cards
 */
const allCards = ["fa fa-cat", "fa fa-cat", "fa fa-paper-plane-o", "fa fa-paper-plane-o", "fa fa-bomb", "fa fa-bomb",
"fa fa-bolt", "fa fa-bolt", "fa fa-cube", "fa fa-cube", "fa fa-leaf", "fa fa-leaf", "fa fa-bicycle", "fa fa-bicycle", "fa fa-diamond", "fa fa-diamond"];

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

let clickedCards = [];

const deck = document.querySelector(".deck")
//creat the cards function

  for (let i=0;i<16;i++) {
    let makeCard = document.createElement("li");
    makeCard.className="card";
    makeCard.className=`card ${allCards[i]}`;
    //makeCard.innerHtml =`<li class="${allCards}[i]"></li>`;
    //makeCard.classList.add(allCards[i]);
    deck.appendChild(makeCard);

    console.log(allCards);
}




// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
makeCard.addEventListener("click".function(){
    if (clickedCards.length <=1){
      makeCard.classList.add("open", "show");


    };
});
