/*
 * Create a list that holds all of your cards
 */
const allCards = ["fa-cubes", "fa-bomb", "fa-diamond", "fa-paper-plane-o", "fa-cube", "fa-bicycle",
"fa-leaf", "fa-bolt", "fa-cubes", "fa-bomb", "fa-leaf", "fa-bolt", "fa-bicycle", "fa-cube", "fa-diamond", "fa-paper-plane-o"];


let clickedCards = [];
let usedCards = [];

const deck = document.querySelector(".deck")


//create the cards

function startGame(){
for (let i=0;i<16;i++) {
    let makeCard = document.createElement("li");
    makeCard.className="card";
    makeCard.innerHTML = `<i class = "fa ${allCards[i]}"></i>`
    deck.appendChild(makeCard);
    makeCard.addEventListener('click', clickingCards);
}
shuffle(allCards);
}
startGame();

function clickingCards(){
const makeCard = this
pickAcard(makeCard)
setTimeout(checkingMatch,3000)

}

function pickAcard(makeCard){
if (makeCard.classList.contains("show") && clickedCards.length ===0){
    alert("This card has already been matched");
    }
    else if (clickedCards.length ===0){
        makeCard.classList.add("open", "show");
        clickedCards.push(makeCard);
    }
    else if (clickedCards.length ===1){
      makeCard.classList.add("open", "show");
      clickedCards.push(makeCard);
    }

/*checkingMatch(makeCard)*/
}

function resetCard(makeCard){
  let resetFirstcard = clickedCards[0]
  let resetSecondcard = clickedCards[1]
if (clickedCards.length ===2 && resetFirstcard.innerHTML !== resetSecondcard.innerHTML){
  resetFirstcard.classList.remove("open", "show");
  resetSecondcard.classList.remove("open", "show");
  }
}

function arrayLength(makeCard){
clickedCards = [];
}

function checkingMatch(makeCard){
  let checkFirstcard = clickedCards[0];
  let checkSecondcard = clickedCards[1];
if (clickedCards.length ===2 && checkFirstcard.innerHTML === checkSecondcard.innerHTML){
    checkFirstcard.classList.add("match");
    checkSecondcard.classList.add("match");
    usedCards.push(checkFirstcard,checkSecondcard);
    winnerWinner()
    arrayLength(makeCard)
    movesCounter()
    }
else if (checkFirstcard !== checkSecondcard && clickedCards.length ===2){
    /*setTimeout(messageNomatch,500);*/
    resetCard(makeCard)
    arrayLength(makeCard)
    movesCounter()
    }
}

function messageNomatch(makeCard){
    alert("No match");
}
function winnerWinner(){
if (usedCards.length ===16){
    setTimeout(messageWinner,300);
    }
}

function messageWinner(){
  alert("Well done, you are a winner")
  restartGame()
}

function restartGame(){
  const restartGame = document.querySelector(".restart")
  restartGame.addEventListener("click",function(){
  deck.innerHTML = "";
  moves =0;
  countMoves.innerHTML=moves;
  startGame();
  })
}

const countMoves=document.querySelector(".moves");
let moves = 0;
countMoves.innerHTML=0;
function movesCounter(){
  moves++;
  countMoves.innerHTML=moves;
  starRating();
}

const rating=document.querySelector(".stars");
function starRating(){
  if (moves <10) {
  rating.innerHTML=
  `<li><i class="fa fa-star"></i></li>
  <li><i class="fa fa-star"></i></li>
  <li><i class="fa fa-star"></i></li>`
  }
  if (moves >10) {
  rating.innerHTML=
  `<li><i class="fa fa-star"></i></li>
  <li><i class="fa fa-star"></i></li>`
  }
  if (moves >15) {
  rating.innerHTML=
  `<li><i class="fa fa-star"></i></li>`
  }
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
