/*
2C = Two of Clubs
2D = Two of Diamonds
2H = Two of Hearts
2S = Two od Sapdes
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K']

const crearDeck = () => {
    for ( let i = 2; i <= 10; i++ ) {
        for( let tipo in tipos ) {
            deck.push( i + tipos[tipo] );
            
        }
    }
    for ( let tipo in tipos ) {
        for ( esp in especiales ){
            deck.push( especiales[esp] + tipos[tipo] );
        }
    }

    console.log(deck);
    deck = _.shuffle( deck );
    console.log(deck);
    return deck;
}


crearDeck();
