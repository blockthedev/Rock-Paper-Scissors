let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'Scissors') {
      if (computerMove === 'Rock') {
      result = 'Lose.';
    } else if (computerMove === 'Paper') {
      result = 'Win.';
    } else if (computerMove === 'Scissors') {
      result = 'Tie.';
    }


  } else if (playerMove === 'Paper') {
      if (computerMove === 'Rock') {
      result = 'Win.';
    } else if (computerMove === 'Paper') {
      result = 'Tie.';
    } else if (computerMove === 'Scissors') {
      result = 'Lose.';
    }


  } else if (playerMove === 'Rock') {
      if (computerMove === 'Rock') {
      result = 'Tie.';
    } else if (computerMove === 'Paper') {
      result = 'Lose.';
    } else if (computerMove === 'Scissors') {
      result = 'Win.';
    }
  }

  if (result === 'Win.') {
    score.wins += 1;
  } else if (result === 'Lose.') {
    score.losses += 1;
  } else if (result === 'Tie.') {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result')
    .innerHTML = result;

    document.querySelector('.js-moves')
      .innerHTML = `You 
    <img src="images/${playerMove}-emoji.png" class="move-icon">
    <img src="images/${computerMove}-emoji.png" class="move-icon">
    Computer`;
}

function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Loses: ${score.losses}, Ties: ${score.ties}.`
}

function pickComputerMove() {
  const randomNumder = Math.random();
  let computerMove = '';
  if (randomNumder >= 0 && randomNumder < 1 / 3) {
    computerMove = 'Rock';
  } else if (randomNumder >= 1 / 3 && randomNumder < 2 / 3) {
    computerMove = 'Paper';
  } else if (randomNumder >= 2 / 3 && randomNumder < 1) {
    computerMove = 'Scissors';
  }

  return computerMove;
}