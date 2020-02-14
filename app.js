let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');

//randomly generates the computers choice
function getComputerChoice() {
  const choices = ['rock' , 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = userChoice + ' beats ' + computerChoice + ' (comp) ' + '. You Win!';
  userChoice_div.classList.add('green-glow');
  setTimeout(function() {userChoice_div.classList.remove('green-glow') }, 300);
}

function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = computerChoice + ' (comp) ' + ' beats ' + userChoice + '. You Lost!';
  userChoice_div.classList.add('red-glow');
  setTimeout(function() {userChoice_div.classList.remove('red-glow') }, 300);
}


function draw(userChoice, computerChoice) {
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = 'You both picked ' + userChoice + '. Its a Draw!';
  userChoice_div.classList.add('grey-glow');
  setTimeout(function() {userChoice_div.classList.remove('grey-glow') }, 300);
}


function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch(userChoice + computerChoice) {
    case 'rockscissors':
    case 'paperrock':
    case 'scissorspaper':
      win(userChoice, computerChoice);
      break;
    case 'rockpaper':
    case 'paperscissors':
    case 'scissorsrock':
      lose(userChoice, computerChoice);
      break;
    case 'rockrock':
    case 'paperpaper':
    case 'scissorsscissors':
      draw(userChoice, computerChoice);

  }
}


function main(){
  rock_div.addEventListener('click', function() {
    game('rock');
  })

  paper_div.addEventListener('click', function() {
    game('paper');
  })

  scissors_div.addEventListener('click', function() {
    game('scissors');
  })
}

main();
