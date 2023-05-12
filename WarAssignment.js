// Game needs 2 players 

class Player {
    constructor(){
        this.player1 = player1
        this.player2 = player2 
    }
}

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
        value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        suit = ['♣', '♦', '♥', '♠' ];
        rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10','J', 'Q', 'K', 'A'];
    
        // create an unshuffled deck
        for( let i = 0; i < rank.length; i++){
        for(let s = 0; s < suit.length; s++){
          this.deck.push(new Card(rank[i], suit[s],value[i]));
        }
        return this.deck;
        }
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

class Deal {
    constructor(){
       this.player1Hand = [];
        this.player2Hand = [];
    }
        // this will push half of the shuffled array into each players hand
    gamePlay(){
        this.player1Hand.push(this.deck.slice(0,27));
        this.player2Hand.push(this.deck.slice(-26));
        }
        if()
        }
/*     }
} */