const scores = [0, 0];

const winScore = Number(document.getElementById('winscore').value);
const spanPlayer1 = document.getElementById('player1');
const spanPlayer2 = document.getElementById('player2');
const spans = document.querySelectorAll('span');

console.log(winScore);
console.log(spanPlayer1.textContent);

const btnPlayer1 = document.getElementById('btnpl1');

// btnPlayer1.addEventListener('click', player1Click);

// function player1Click() {
//   scores[0] += 1;
//   spanPlayer1.textContent = scores[0];
// }

const btnPlayer2 = document.getElementById('btnpl2');

// btnPlayer2.addEventListener('click', player2Click);

// function player2Click() {
//   scores[1] += 1;
//   spanPlayer2.textContent = scores[1];
// }

btnPlayer1.addEventListener('click', increaseCounter);
btnPlayer2.addEventListener('click', increaseCounter);

function increaseCounter() {
  console.log(this.id.slice(-1));
  const pl = this.id.slice(-1) - 1;
  scores[pl]++;
  spans[pl].textContent = scores[pl];

  if (scores[pl] === winScore) {
    spans[pl].style.color = 'Green';
    spans[1 - pl].style.color = 'Red';
    // console.log(pl);
    // if (pl === 0) {
    //   spans[0].style.color = 'Green';
    //   spans[1].style.color = 'Red';
    // } else {
    //   spans[0].style.color = 'Red';
    //   spans[1].style.color = 'Green';
    // }
    
    // alert(`Player ${pl + 1} wins!!!`);
    btnPlayer1.disabled = true;
    btnPlayer2.disabled = true;
    //btnPlayer2.disabled = false;
    // btnPlayer2.removeAttribute('disabled');
  }
}



const r = document.getElementById("btnreset");
r.addEventListener('click', reset);

function reset(){
  
  spanPlayer1.textContent = 0;
  spanPlayer2.textContent = 0;
  
  
  scores[0] = 0;
  scores[1] = 0;
  
  spanPlayer1.style.color = 'black';
  spanPlayer2.style.color = 'black';
  
  btnPlayer1.disabled = false;
  btnPlayer2.disabled = false;
} 
