let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random() * 10)
}

console.log(generateTarget());

const compareGuesses = (human, computer, target) => {
  const humanDifference = Math.abs(target - human);
  const computerDifference = Math.abs(target - computer);

  return humanDifference <= computerDifference;
}

const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}

const advancedRound = () => {
  currentRoundNumber++;
}