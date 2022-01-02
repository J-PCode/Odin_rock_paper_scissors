const shapes =['rock', 'paper', 'scissors'];
let computer = 0;
let player = 0;
let round = 1;
let playerSelection;
let tulos;
let computerSelection = computerPlay();

// tässä annetaan tietokoneen arvo
function computerPlay(){
    const random = Math.floor(Math.random() * shapes.length);
    console.log(random);
    return (shapes[random]);
    }

//tässä otetaan erä, lisätään piste voittajalle ja kerrotaan tulos, voisihan tämän tulosten kertomisen jotenkin lyhyemmin varmaan tehdä... 
//esim. console.log(´${playerSelection} vs ${computerSelection}, ${result})
function playRound(){
computerSelection = computerPlay();
if(playerSelection=='rock' && computerSelection == 'paper'){
    round++;
    computer++
    return "You lose! Paper beats Rock";
}
if(playerSelection=='scissors' && computerSelection == 'paper'){
    round++;
    player++;
return "You win! Scissors cuts paper";
}
if(playerSelection=='paper' && computerSelection == 'paper'){
    round++;
    return "Both choose paper, it's a tie!";
}
if(playerSelection=='rock' && computerSelection == 'scissors'){
    round++;
    player++;
    return "You win! Rock beats the scissors";
}
if(playerSelection=='scissors' && computerSelection == 'scissors'){
    round++;
    return "Both chose scissors, it's a tie!";
}
if(playerSelection=='paper' && computerSelection == 'scissors'){
    round++;
    computer++;
    return "You lose, Scissors beats the paper!";
}
if(playerSelection=='rock' && computerSelection == 'rock'){
    round++;
    return "It's a tie, rock vs rock";
}
if(playerSelection=='scissors' && computerSelection == 'rock'){
    round++;
    computer++;
    return "You lose! Rock beats the scissors";
}
if(playerSelection=='paper' && computerSelection == 'rock'){
    round++;
    player++;
    return "You win, paper beats the rock!";
}
}

function results(){
    
    document.querySelector(".header").textContent = `Round ${round}`;
    document.querySelector("#tulos").textContent = playRound();
    tulos = `Player ${playerSelection} vs ${computerSelection} Computer`;
   
    document.querySelector("#valitsi").textContent = `${tulos}`;
    document.querySelector("#pisteet").textContent = `${player} - ${computer}`
    document.querySelector("#begin").textContent = "Next Round";
        document.querySelector("#game").classList.add("hide");
    document.querySelector("#results").classList.remove("hide");
    console.log("tulos", tulos)
    if(playerSelection != "begin" && (player == 5 || computer == 5)){
        endGame();    
    }
    }
function nextRound(){
    document.querySelector(".round").textContent = ``;
    document.querySelector(".header").textContent = `Round ${round}`; 
    document.querySelector(".info").textContent = "Player VS Computer";
    document.querySelector("#game").classList.remove("hide");
    document.querySelector("#results").classList.add("hide");
    }

function reset(){
    
    player = 0;
    computer = 0;
    round = 1;
    
}    
function endGame(){   
    if(player >= 5){
        document.querySelector(".round").textContent = `Congratulations you won the game!!!`;
        document.querySelector("#valitsi").textContent = `${tulos}`;
        document.querySelector("#begin").textContent = "New Game"; 
        reset();
    }
    else if(computer >= 5){
        document.querySelector(".round").textContent = `Unfortunately you lose!!!`;
        document.querySelector("#valitsi").textContent = `${tulos}`;
        document.querySelector("#begin").textContent = "New Game";
        reset();
    }

}
function game(){
if(playerSelection == "begin" && (player < 5 || computer < 5)){
    nextRound();
}

else{
    results();
}
}


//käyttäjän valinta funktio 3 näppäintä
const buttons = document.querySelectorAll("button");
buttons.forEach((button) =>{
    button.addEventListener("click", () => {
            playerSelection = button.id;
            game();
    })
}); 