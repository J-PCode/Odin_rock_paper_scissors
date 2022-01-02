# Odin_rock_paper_scissors
1st javascript project in odin project. Create rock paper scissors game where you will be playing 5 rounds against computer.

Version 2
Play until you or computer wins 5 rounds.

there is 2 div in index.html. one show results after rock/paper/scissors is selected. when confirmed div is changed and another round begins. this is done with css display:none. css class is removed or added for the divider depending what part of the game is going.

After player or Computer gets 5 points game ends. there is function for showing results and after that it resets points so player can play again if so decides.

variables:
computer
player
round
playerSelection
tulos
computerSelection

Functions:
computerPlay: (random computer choise)
playRound: (show results of the round (example rock beats paper))
results: show results in results divider and toggle visibility. Also calls endGame function when game ends.
nextRound: show buttons for rock,paper and scissors. also changes text for "game mode"
reset: Resets game value after endGame is called.
endGame: shows endGame results and calls reset function
game: calls either results function or nextRound. This is done by listening what button is pressed.


Some basic css also added.
