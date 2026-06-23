function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);

  switch (choice) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
}

function getHumanChoice() {
  const choice = prompt("Make your choice (rock, paper or scissors):");
  return choice;
}

function playRound(humanChoice, computerChoice) {
  console.log("Computer chose: ", computerChoice);
  if (humanChoice.toLowerCase() === computerChoice) {
    console.log("No one wins");
    return;
  }

  switch (humanChoice.toLowerCase()) {
    case "rock":
      if (computerChoice === "scissors") {
        humanScore += 1;
        console.log("Rock beats Scissors, you win");
      } else {
        computerScore += 1;
        console.log("Paper beats Rock, you lose");
      }
      break;
    case "paper":
      if (computerChoice === "scissors") {
        computerScore += 1;
        console.log("Scissors beats paper, you lose");
      } else {
        humanScore += 1;
        console.log("Paper beats rock, you win");
      }
      break;
    case "scissors":
      if (computerChoice === "rock") {
        computerScore += 1;
        console.log("Rock beats scissors, you lose");
      } else {
        humanScore += 1;
        console.log("Scissors beats paper, you win");
      }
      break;
  }
  console.log(`Computer: ${computerScore}. Human: ${humanScore}`);
}



