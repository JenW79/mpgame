let player1Score = 0;
let player2Score = 0;
let totalClicksNeeded = 100;
let currentPlayer;

const startButton = document.getElementById('startButton');
startButton.addEventListener('click', function() {
  const player1Name = document.getElementById('player1Name').value;
  const player2Name = document.getElementById('player2Name').value;
  initializeGame(player1Name, player2Name);
  setCurrentPlayer(player1Name);
});

function initializeGame(player1Name, player2Name) {
  player1Score = 0;
  player2Score = 0;
  totalClicksNeeded = 100;
  currentPlayer = player1Name;
  document.getElementById('player1NameDisplay').textContent = player1Name;
  document.getElementById('player2NameDisplay').textContent = player2Name;
}

function setCurrentPlayer(playerName) {
  currentPlayer = playerName;
  document.getElementById('currentPlayer').textContent = playerName;
}

const clickButton = document.getElementById('clickButton');
clickButton.addEventListener('click', function() {
  if (player1Score < totalClicksNeeded && player2Score < totalClicksNeeded) {
    if (currentPlayer === player1Name) {
      player1Score++;
      document.getElementById('player1Score').textContent = player1Score;
      setCurrentPlayer(player2Name);
    } else {
      player2Score++;
      document.getElementById('player2Score').textContent = player2Score;
      setCurrentPlayer(player1Name);
    }
    if (player1Score === totalClicksNeeded) {
      alert(`${player1Name} Wins!`);
    } else if (player2Score === totalClicksNeeded) {
      alert(`${player2Name} Wins!`);
    }
  }
});

const player1Name = prompt("Player 1, please enter your name:");
if (player1Name) {
  document.getElementById('player1Name').value = player1Name;
}
const player2Name = prompt("Player 2, please enter your name:");
if (player2Name) {
  document.getElementById('
