

// set variables
var scores, roundScore, activePlayer, gamePlaying;

init();

function nextPlayer() {
  //next player
      activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
      roundScore = 0;

      document.getElementById('current-0').textContent = '0';
      document.getElementById('current-1').textContent = '0';

      // toggle active highlight per current player
      document.querySelector('.player-0-panel').classList.toggle('active');
      document.querySelector('.player-1-panel').classList.toggle('active');

      // reset dice picture for new players turn
      document.querySelector('.dice').style.display = 'none';
    };

//text different lines of code
//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '';
//var x = document.querySelector('#score-0').textContent;



// event handler for dice roll
document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
        // random number for dice
        let dice = Math.floor(Math.random() * 6) + 1;

        // display results
        let diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        //update round score if(rolled number !one)
        if(dice !== 1) {
          //add score
          roundScore += dice;
          document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
          nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
      if(gamePlaying) {
          // add current score for user to global score
          scores[activePlayer] += roundScore;

          // update UI 
          document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        
          var gameValue = document.querySelector('.input-value').value;
          var endScore;

          if(gameValue) {
            endScore = gameValue;
          } else {
            endScore = 100;
          }

          //check if player won game

          if(scores[activePlayer] >= endScore) {
            //print you won
            document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
            document.querySelector('.dice').style.display = 'none';
            // alter appearance for winner
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
          } else {
            // next player
            nextPlayer();
          }
    }  
});

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    // clear dice
    document.querySelector('.dice').style.display = 'none';

    //reset score
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    //reset names
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    //remove winner class
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    //add active class to first player
    document.querySelector('.player-0-panel').classList.add('active');
}































