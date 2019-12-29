// var score, turnTotal, currentPlayer, gameOn;
var score, turnTotal, currentPlayer, gameOn, numText, countOfPlayers, players;

//Initialize the variables
init();

function rollDice() {
    if (gameOn) {

        var ranDigit = Math.floor(Math.random() * 6) + 1;

        document.getElementById('awsDice').style.display = "block";
        document.getElementById('awsDice').className = `fas fa-dice-${numText[ranDigit - 1]}`;

        if (ranDigit !== 1) {
            //Add dice number to turntotal
            turnTotal += ranDigit;
            document.getElementById(`turnTotal${currentPlayer}`).textContent = turnTotal;
        } else {
            nextPlayer();
        }
    }
}

function passTurn() {
    if (gameOn) {
        players[currentPlayer - 1].score += turnTotal;
        var latestScore = players[currentPlayer - 1].score;
        document.getElementById(`Score${currentPlayer}`).textContent = latestScore;
        if (latestScore > 100) {
            document.getElementById(`P${currentPlayer}trophy`).style.display = "block";
            document.getElementById('awsDice').style.display = "none";
            gameOn = false;
        }
        else
            nextPlayer();
    }
}


function reset() {
    //alert("in reset");
    init();
}

function nextPlayer() {
    turnTotal = 0;
    document.getElementById("turnTotal1").textContent = 0;
    document.getElementById("turnTotal1").textContent = 0;
    document.getElementById('awsDice').style.display = "none";
    document.getElementById(`P${currentPlayer}active`).style.display = "none";
    currentPlayer = currentPlayer < countOfPlayers ? ++currentPlayer : 1;
    document.getElementById(`P${currentPlayer}active`).style.display = "block";
}

function init() {
    currentPlayer = 1;
    countOfPlayers = 2;
    players = new Array(countOfPlayers);
    gameOn = true;
    score = 0;
    turnTotal = 0;
    numText = ["one", "two", "three", "four", "five", "six"];
    for (var count = 0; count < countOfPlayers; count++) {
        var playerData = new Player(`Player${count + 1}`, score, turnTotal);
        players[count] = playerData;
    }
    document.getElementById('P1active').style.display = "block";
    document.getElementById('P2active').style.display = "none";
    document.getElementById('P1trophy').style.display = "none";
    document.getElementById('P2trophy').style.display = "none";
    document.getElementById("btnRoll").addEventListener("click", rollDice);
    document.getElementById("btnPass").addEventListener("click", passTurn);
    document.getElementById("btnReset").addEventListener("click", reset);

}