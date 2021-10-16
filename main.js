
const formData = document.getElementsByTagName("input");

let PlayerOne = "";
let PlayerTwo = "";
let PlayerOneScore = 0;
let PlayerTwoScore = 0;
let totalScore = formData[2].value;

console.log(totalScore)



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
      let image1 = document.querySelectorAll("img")[0];
      randomImage = "image/" + "dice" + num + ".png"
      PlayerOneScore += num;
      document.getElementsByClassName("playerScore")[0].innerHTML = PlayerOneScore;
      image1.setAttribute("src", randomImage)
      document.getElementById("roll-firt").disabled = true;
      document.getElementById("roll-second").disabled = false;
      document.getElementById("roll-firt").style.cursor = "not-allowed";

      document.getElementById("roll-second").style.cursor = "pointer";
      document.getElementById("roll-firt").style.background = "#CFB5DA";
      document.getElementById("roll-second").style.background = "#9C060C";



}


function diceRoll2() {
      let num = ranDomNum();
      let image1 = document.querySelectorAll("img")[1];
      randomImage = "image/" + "dice" + num + ".png"
      PlayerTwoScore += num;
      document.getElementsByClassName("playerScore")[1].innerHTML = PlayerTwoScore;
      image1.setAttribute("src", randomImage)
      document.getElementById("roll-second").disabled = true
      document.getElementById("roll-firt").disabled = false;
      document.getElementById("roll-firt").style.cursor = "pointer";
      document.getElementById("roll-second").style.cursor = "not-allowed";

      document.getElementById("roll-second").style.background = "#CFB5DA";
      document.getElementById("roll-firt").style.background = "#9C060C";


}



/***** player data  */

