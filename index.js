let cards = []
let sum = 0 
let isAlive = false
let hasBlackjack = false
let gamestarted = false
let message = ""

let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let playerEl = document.getElementById("player-el")
let startBtn = document.getElementById("start-btn")
let restartBtn = document.getElementById("restart-btn")

function randomCard(){
    let randomcard = Math.floor( Math.random() * 13 + 1)
    if(randomcard > 10){
        return (10)
    }else if(randomcard === 1){
        return (11)
    }else{
        return randomcard
    }
}

function startGame(){
    if(!gamestarted){
    isAlive = true
    gamestarted = true

    let firstCard = randomCard()
    let secondCard = randomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
    startBtn.disabled = true
}
}

function renderGame(){
    cardsEl.textContent = "cards: "
    for (let i=0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "sum: " + sum 

    if (sum < 20 ){
        message = "Do you want to add a new card"
    }else if(sum === 21){
        message = "You got Blackjack"
        hasBlackjack = true
    }else{
        message = "You Loose"
        isAlive = false
    }

    messageEl.textContent = message
}

function newCard(){
    if ( isAlive === true && hasBlackjack === false ){
        let card = randomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}

function restart(){
    if (hasBlackjack || !isAlive){
    isAlive = false
    hasBlackjack = false
    gamestarted = false
    
    sum = 0
    cards = []
    message = ""

    cardsEl.textContent = ""
    sumEl.textContent = ""
    messageEl.textContent = "Want to play a round?"    


    startBtn.disabled = false
}   
}



