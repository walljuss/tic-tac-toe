
  

const check_class = (cell) => {
  if (cell.classList.contains('x-sign') === true || cell.classList.contains('o-sign') === true ) {
    return true;
  } else {
    return false;
  }
 }



 const checkWinCondition = player => {
  let lala = 0;
  let arrWin = [ ['a1', 'a2', 'a3',], ['b1', 'b2', 'b3',], ['c1', 'c2', 'c3',], 
  ['a1', 'b1', 'c1',], ['a2', 'b2', 'c2',], ['a3', 'b3', 'c3',],
  ['a1', 'b2', 'c3',], ['a3', 'b2', 'c1',] ];
  for (let arr of arrWin) {
  if (arr.every(elem => player.marked.includes(elem))) {
      return true;
    }
  }

} 


const Player = function(name) {
  this.name = name;
  this.marked = [];
  this.turn = false;
}

const player1 = new Player('player1');
player1.turn = true;
const player2 = new Player('player2');




const marked = (play1, play2) => {
  const cells = document.querySelectorAll('.cell');
  const endGame = document.querySelector('.endgame');
  const endGameText = document.querySelector('.endGameText');
  const playerOne = document.querySelector('.playerone');
  const playerTwo = document.querySelector('.playertwo');
  playerOne.style.backgroundColor = 'lightblue';
  cells.forEach (cell => {
    cell.addEventListener('click', () => 
    { if (play1.turn === true  && check_class(cell.children[0]) === false) {
      cell.children[0].classList.add('x-sign');
      player1.marked.push(cell.classList[1]);
      playerOne.style.backgroundColor = 'transparent';
      playerTwo.style.backgroundColor = 'lightsalmon';
      if (checkWinCondition(player1) === true) {
        endGame.style.display = 'flex';
        endGame.style.backgroundColor = `rgba(173, 216, 230, 0.9)`;
        endGameText.innerHTML = 'Player 1 Won!';
      }
      if (player1.marked.length === 5) {
        endGame.style.display = 'flex';
        endGame.style.backgroundColor = `rgba(0, 160, 122, 0.9)`;
        endGameText.innerHTML = 'Draw!';
      }
      play1.turn = false;
      play2.turn = true;
    } else if (play2.turn === true && check_class(cell.children[0]) === false) {
      cell.children[0].classList.add('o-sign');
      player2.marked.push(cell.classList[1]);
      playerOne.style.backgroundColor = 'lightblue';
      playerTwo.style.backgroundColor = 'transparent';
      if (checkWinCondition(player2) === true) {
        endGame.style.display = 'flex';
        endGame.style.backgroundColor = `rgba(255, 160, 122, 0.9)`;
        endGameText.innerHTML = 'Player 2 Won!';    
      }
      if (player2.marked.length === 5) {
        endGame.style.display = 'flex';
        endGame.style.backgroundColor = `rgba(0, 160, 122, 0.9)`;
        endGameText.innerHTML = 'Draw!';
      }
      play2.turn = false;
      play1.turn = true;
    }
  })
})}

const resetGame = () => {
  const endGame = document.querySelector('.endgame');
  const restartGame = document.querySelector('.restartGame');
 
  player1.marked = [];
  player2.marked = [];

  const cellitos = document.querySelectorAll('.cellito');
  cellitos.forEach ((cell) => {
    cell.classList.remove('o-sign');
    cell.classList.remove('x-sign');
  })

  endGame.style.display = 'none';
}

resetGame(player1, player2);
marked(player1, player2);

