const shapes =['rock', 'paper', 'scissors'];
let computer = 0;
let player = 0;
// tässä annetaan tietokoneen arvo
function computerPlay(){
    const random = Math.floor(Math.random() * shapes.length);
    return (shapes[random]);
    }
    //käyttäjän valinta 3 näppäintä
function playerSelect(){
const buttons = document.querySelectorAll("button");
buttons.forEach((button) =>{
    button.addEventListener("click", () => {
         playRound(button.id);//tähän lisätään se mitä tapahtuu kun nappia on painettu

    })
});    
}

//tässä otetaan erä, lisätään piste voittajalle ja kerrotaan tulos, voisihan tämän tulosten kertomisen jotenkin lyhyemmin varmaan tehdä... esim. console.log(´${playerSelection} vs ${computerSelection}, ${result})
function playRound(playerSelection){
//let playerSelection = playerSelect();
let computerSelection = computerPlay();

// tähän taitaa tulla sitten se tekstin lisäys sivustolle
if(playerSelection=='rock' && computerSelection == 'paper'){
    computer++
    return "You lose! Paper beats Rock";
}
if(playerSelection=='scissors' && computerSelection == 'paper'){
player++;
return "You win! Scissors cuts paper";
}
if(playerSelection=='paper' && computerSelection == 'paper'){
return "Both choose paper, it's a tie!";
}
if(playerSelection=='rock' && computerSelection == 'scissors'){
    player++;
return "You win! Rock beats the scissors";
}
if(playerSelection=='scissors' && computerSelection == 'scissors'){
return "Both chose scissors, it's a tie!";
}
if(playerSelection=='paper' && computerSelection == 'scissors'){
    computer++
return "You lose, Scissors beats the paper!";
}
if(playerSelection=='rock' && computerSelection == 'rock'){
return "It's a tie, rock vs rock";
}
if(playerSelection=='scissors' && computerSelection == 'rock'){
    computer++
return "You lose! Rock beats the scissors";
}
if(playerSelection=='paper' && computerSelection == 'rock'){
    player++;
    return "You win, paper beats the rock!";
}
}
//game function tässä määritetään että pelataan 5 erää ja lopuksi ilmoitetaan voittaja. 
// function Game(){
//     for(i=1;i<=5;i++){
//         console.log(playRound());
//         }
// if(player>computer){
// console.log("congratulations you won the game");
// }
// else if(player == computer){
//     console.log("game over, it was a tie!");
// }
// else{
//     console.log("unfortunately you lose");
// }
// }

//add button event listeners using forEach method
