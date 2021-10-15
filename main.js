

let PlayerOne = "";
let PlayerTwo = "";
let PlayerOneScore = 0;
let PlayerTwoScore = 0;
let totalScore = 0;

const formData = document.getElementsByTagName("input");


/****** from fucntion */

function onSubmit(event) {
      event.preventDefault();
      let PlayerOne = formData[0].value;
      let PlayerTwo = formData[1].value;
      let totalScore = formData[2].value;
      document.getElementById("player-from").style.display = "none";
      document.getElementById("container-player").style.display = "flex";
      document.getElementsByClassName("playerName")[0].innerHTML = PlayerOne;
      document.getElementsByClassName("playerName")[1].innerHTML = PlayerTwo;
      document.getElementsByClassName("playerScore")[0].innerHTML = PlayerOneScore;
      document.getElementsByClassName("playerScore")[1].innerHTML = PlayerTwoScore;

}


/***====Random numer function */

function ranDomNum() {
      return Math.floor(Math.random() * 6) + 1;
}



/***=== Game logic  */


function diceRoll() {
      let num = ranDomNum();
      PlayerOneScore += num;
      document.getElementsByClassName("playerScore")[0].innerHTML = PlayerOneScore;
      document.getElementsByClassName("playerScore")[0].disabled = true;



}


function diceRoll2() {
      let num = ranDomNum();
      PlayerOneScore += num;
      document.getElementsByClassName("playerScore")[1].innerHTML = PlayerOneScore;





}



/***** player data  */

