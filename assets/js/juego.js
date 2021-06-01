/*
2C = Two of Clubs
2D = Two of Diamonds
2H = Two of Hearts
2S = Two od Sapdes
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];

const crearDeck = () => {
    for ( let i = 2; i <= 10; i++ ) {
        for( let tipo in tipos ) {
            deck.push( i + tipos[tipo] );
            
        }
    }

    console.log(deck);
}


crearDeck();
