/*
    war: players share a card from top of deck, highest card wins (allow for ties)

    card class
        - suit
        - rank/value

    Deck: [] of 52 card objects

    player class
        - name
        - hand : [26 card objects]
        - winStatus (boolean)
        - score
    
    class Game

*/

class Card {
    constructor(rank,suit) {
        this.suit = suit;
        this.rank = rank;
        this.faceUp = false;
    }
}

class Player {
    constructor(num) {
        this.name = `Player${num}`;
        this.score = 0;
        this.hand = []
    }
}

class Game {
    constructor() {
        this.deck = [];
        this.winner = null; //when a winner is selected, define it here
        this.players = []; //array of 2 players;
        this.makeDeck();
        this.dealCards();
        // this.playGame();
    }

    makeDeck() {
        //create a deck of 13 ranks, 4 suits and 52 cards    
        let ranks = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
        let suits = ['❤️','🗡️','🍀','💎']
    
        for (let suit of suits) {
            for (let x = 0; x < ranks.length; x++) {
                let card = new Card(ranks[x],suit);
                this.deck.push(card);
            }
        }
    
        for (let i = this.deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    
        // this.drawDeck();
    }

    drawDeck() { //loop over all cards inside of this.deck

        for (let x = 1; x <= 2; x++) {

            const playerSection = document.getElementById(`player${x}`);

            playerSection.innerHTML = "";
            for (let cardObj of this.players[x-1].hand) {
                let card = document.createElement('div');
                let face = document.createElement('h2');
    
                if (cardObj.faceUp) {
                    face.innerText = `${cardObj.rank} ${cardObj.suit}`;
                    card.setAttribute('class','card');
                } else {
                    card.setAttribute('class', 'card faceDown')
                }
                card.addEventListener('click', () => {
                    this.clickedCard(cardObj);
                })
        
                card.append(face);
                playerSection.append(card)
            }
        }
    }

    clickedCard(card) {
        card.faceUp = !card.faceUp;
        this.drawDeck();
    }

    dealCards() {
        //needs to give 26 cards to each player

        for (let x = 1; x <= 2; x++) {
            let player = new Player(x);
            player.hand = this.deck.splice(0,26);
            this.players.push(player);
        }
        //deal this.deck [] to each player
    }

    playGame() {
        for (let player of this.players) {
            console.log(`Welcome to the game ${player.name}`)
        }
    }
}

let war = new Game();

let button = document.getElementById('start')

button.addEventListener('click', () => {
    war.drawDeck();
})