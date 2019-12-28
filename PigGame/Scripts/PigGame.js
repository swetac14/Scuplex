var score, roundScore, activePlayer;
//alert()
document.getElementById("btnRoll").addEventListener("click", rollDice);

function rollDice() {
    var numText = ["one", "two", "three", "four", "five", "six"];
    var ranDigit = Math.floor(Math.random() * 6);
   // alert(ranDigit);
    document.getElementById('awsDice').style.display = "block";
    document.getElementById('awsDice').className = `fas fa-dice-${numText[ranDigit]}`;

}