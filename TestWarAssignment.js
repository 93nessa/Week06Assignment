const expect = chai.expect
const assert = chai.assert
const{Deck, Player, Card} = require('../Week06Assignment/WarAssignment');




let deck = new Deck();
deck.buildDeck();
deck.shuffledDeck();

describe(`Creating  a new player`, function(){
   describe('Player', function(){
    it('Add a new player ', function(){
        let player1 = new Player('Vanessa')
        expect(player1).to.equal('Vanessa')
    }); 
   }); 
});
