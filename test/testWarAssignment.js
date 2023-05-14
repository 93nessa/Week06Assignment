const expect = chai.expect
const assert = chai.assert
const{Deck, Player, Card} = require('./WarAssignment/WarAssignment.js');





describe(`Creating  a new player`, function(){
   describe('Player', function(){
    it('Add a new player ', function(){
        let player1 = new Player('Vanessa')
        expect(player1).to.equal('Vanessa')
    }); 
   }); 
});
