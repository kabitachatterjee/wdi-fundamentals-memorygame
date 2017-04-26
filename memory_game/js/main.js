//console.log("Up and Running!");


//var cards = ["queen","queen","king","king"];
var cards = [
			 { rank:"queen",
 			  suit: "hearts",
 			  image: "images/queen-of-hearts.png"
			 },
			 { rank:"queen",
 			  suit: "diamonds",
 			  image: "images/queen-of-diamonds.png"
			 },
			 { rank:"king",
 			  suit: "hearts",
 			  image: "images/king-of-hearts.png"
			 },
			 { rank:"king",
 			  suit: "hearts",
 			  image: "images/king-of-diamonds.png"
			 }
            ];

var cardsInPlay = [];
function checkForMatch(){
	if( cardsInPlay.length === 2 ){
	if( cardsInPlay[0] === cardsInPlay[1] ){
		alert("You found a match!");
	}
	else {
		alert("Sorry, try again");
	}
}
}

function flipCard(){
	var cardId = this.getAttribute('data-id');	
	cardsInPlay.push(cards[cardId].rank);
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].image);
	this.setAttribute('src',cards[cardId].image);
	checkForMatch();

}

function createBoard(){
	for( var i = 0; i < cards.length; i++ ){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id',i);
		cardElement.addEventListener('click',flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

createBoard();



