// Game needs 2 players 

class Player {
    constructor(name){
       this.name = name
       this.score = 0
    }
    addNewDeck(deck) {
        this.playerDeck = deck;
      }
}
let player1 = new Player('Aiden')
// console.log(player1)

class Card {
    constructor(value, rank, suit){
        this.rank = rank
        this.value = value
        this.suit = suit
    }
}

class Deck {
    constructor(){
        this.deck = []
    }

    buildDeck(){
        let value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        let suit = ['♣', '♦', '♥', '♠' ];
        let rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10','J', 'Q', 'K', 'A'];
    
        // create an unshuffled deck
        for(let s = 0; s < suit.length; s++){
        for( let i = 0; i < rank.length; i++){
          this.deck.push(new Card(value[i], rank[i], suit[s]));
        }
        }  return this.deck;
    }
        // shuffle the populated deck 
    shuffledDeck(){
        for(let i = this.deck.length-1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [this.deck[i],this.deck[j]] = [this.deck[j],this.deck[i]];
        }
        return this.deck;
    }
}
/*        let deck = new Deck();
deck.buildDeck();
deck.shuffledDeck();
console.log(deck);
 */

    function  Deal(player1, player2 ) {
    let deck = new Deck();
    deck.buildDeck();
    deck.shuffledDeck();
    player1.addNewDeck(deck.deck.slice(0,26))
    player2.addNewDeck(deck.deck.slice(26,52))
    console.log(player1.playerDeck)
    console.log(player2.playerDeck)
    }
    let player2 = new Player('Charlie')
    Deal(player1, player2);

    let rounds = (player1, player2, roundNumber) => console.log(`ROUND ${roundNumber} - ${player1.name}'s card: ${player1.playerDeck[roundNumber].rank} ${player1.playerDeck[roundNumber].suit} 
    ${player2.name}'s card: ${player2.playerDeck[roundNumber].rank} ${player2.playerDeck[roundNumber].suit}`);

    // console.log(rounds(player1,player2,2));

     function gamePlay(player1,player2){
        for(i = 0; i < player1.playerDeck.length; i ++){
            rounds(player1, player2, i);
            if(player1.playerDeck[i].value > player2.playerDeck[i].value){
                player1.score += 1;
                console.log(`${player1.name} has won this round.`);
            } else if(player1.playerDeck[i].value < player2.playerDeck[i].value){
                player2.score += 1;
                console.log(`${player2.name} has won this round.`);
            } else
                console.log(`This round is a tie.`);
        }
        if(player1.score > player2.score){
            console.log(`${player1.name}'s Total score: ${player1.score}`);
            console.log(`${player2.name}'s Total score: ${player2.score}`);
            console.log(`${player1.name} is the WINNER!!`)
        } else if(player1.score < player2.score){
            console.log(`${player1.name}'s Total score: ${player1.score}`);
            console.log(`${player2.name}'s Total score: ${player2.score}`);
            console.log(`${player2.name} is the WINNER!!`)
        }
    }
    console.log(gamePlay(player1, player2));

    module.exports = {Deck, Player, Card}