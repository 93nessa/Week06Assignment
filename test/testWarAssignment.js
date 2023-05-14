const chai =require ('chai')
const expect = chai.expect
const assert = chai.assert
const{Deck, Player, Card} = require('../WarAssignment.js');





describe(`Creating  a new player`, function(){
   describe('Player', function(){
    it('Add a new player ', function(){
        let player1 = new Player('Vanessa')
        expect(player1.name).be.a.string('Vanessa')
    }); 
   }); 
});

describe(`Adding a new card`, function(){
    describe(`Card`, function(){
        it(`Add a new card with rank, suit, and value`, function(){
            let card1 = new Card(2, 2, '♣')
            expect(card1.rank).to.equal(2)
        });
    });
});
  