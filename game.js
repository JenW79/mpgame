let player1Score = 0;
let player2Score = 0;
const totalClicksNeeded = 1000;

let isPlayer1Turn = true;

const clickButton = document.getElementById('clickButton');
clickButton.addEventListener('click', function() {
  if (player1Score < totalClicksNeeded && player2Score < totalClicksNeeded) {
    if (isPlayer1Turn) {
      player1Score++;
      document.getElementById('player1Score').textContent = player1Score;
    } else {
      player2Score++;
      document.getElementById('player2Score').textContent = player2Score;
    }
    isPlayer1Turn = !isPlayer1Turn;
    if (player1Score === totalClicksNeeded) {
      alert('Player 1 Wins!');
    } else if (player2Score === totalClicksNeeded) {
      alert('Player 2 Wins!');
    }
  }
});

const player1Name = prompt("Player 1, please enter your name:");
if (player1Name) {
  document.getElementById('player1Name').textContent = player1Name;
}
const player2Name = prompt("Player 2, please enter your name:");
if (player2Name) {
  document.getElementById('player2Name').textContent = player2Name;
}
