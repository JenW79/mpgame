let player1Score = 0;
let player2Score = 0;
const totalClicksNeeded = 1000;

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

  let isPlayer1Turn = Math.random() < 0.5;
  if (!isPlayer1Turn) {
    document.body.classList.add('player2Turn');
  }
});