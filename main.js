
const formData = document.getElementsByTagName("input");

let PlayerOne = "";
let PlayerTwo = "";
let PlayerOneScore = 0;
let PlayerTwoScore = 0;
let totalScore = 0;

/****** from fucntion */

function onSubmit(event) {
      event.preventDefault();
      let PlayerOne = formData[0].value;
      let PlayerTwo = formData[1].value;
      totalScore = formData[2].value;
      document.getElementById("player-from").style.display = "none";
      document.getElementById("container-player").style.display = "flex";
      document.getElementsByClassName("playerName")[0].innerHTML = PlayerOne;
      document.getElementsByClassName("playerName")[1].innerHTML = PlayerTwo;
      document.getElementsByClassName("playerScore")[0].innerHTML = PlayerOneScore;
      document.getElementsByClassName("playerScore")[1].innerHTML = PlayerTwoScore;
      document.getElementsByClassName("totalScore")[2].value = totalScore;

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
      PlayerOneScore += num;  // updating player score 
      document.getElementsByClassName("playerScore")[0].innerHTML = PlayerOneScore;
      image1.setAttribute("src", randomImage)

      document.getElementById("roll-firt").disabled = true;
      document.getElementById("roll-second").disabled = false;


      document.getElementById("roll-firt").style.cursor = "not-allowed";
      document.getElementById("roll-second").style.cursor = "pointer";
      document.getElementById("roll-firt").style.background = "#CFB5DA";
      document.getElementById("roll-second").style.background = "#9C060C";
      if (totalScore <= PlayerOneScore) {
            document.getElementById("roll-second").disabled = true;
            document.getElementById("roll-second").disabled = true;
            document.getElementById("roll-firt").style.cssText = "background:#CFB5DA; cursor:not-allowed";
            document.getElementById("roll-second").style.cssText = "background:#CFB5DA; cursor:not-allowed";
            document.getElementsByClassName("diceimage")[0].src = "image/winner.gif";
            document.getElementsByClassName("diceimage")[0].classList.add("win-left");



      }



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
      if (totalScore <= PlayerTwoScore) {
            document.getElementById("roll-firt").disabled = true; //
            document.getElementById("roll-second").disabled = true;
            document.getElementById("roll-firt").style.cssText = "background:#CFB5DA; cursor:not-allowed";
            document.getElementById("roll-second").style.cssText = "background:#CFB5DA; cursor:not-allowed";
            document.getElementsByClassName("diceimage")[1].src = "image/winner.gif";
            document.getElementsByClassName("diceimage")[1].classList.add("win-right");



      };


}


console.log(PlayerOneScore)

/**=== Re-start with same player */

function playSamePlayer() {
      PlayerOneScore = 0;
      PlayerTwoScore = 0;
      document.getElementsByClassName("playerScore")[0].innerHTML = PlayerOneScore;
      document.getElementsByClassName("playerScore")[1].innerHTML = PlayerTwoScore;

      document.getElementsByClassName("diceimage")[0].src = "image/dice1.png";
      document.getElementsByClassName("diceimage")[1].src = "image/dice1.png";

      document.getElementsByClassName("diceimage")[0].classList.remove("win-left");
      document.getElementsByClassName("diceimage")[1].classList.remove("win-right");
      document.getElementById("roll-firt").style.background = "#9C060C";
      document.getElementById("roll-second").style.background = "#9C060C";
      document.getElementById("roll-firt").disabled = false; //
      document.getElementById("roll-second").disabled = false;
      document.getElementById("roll-firt").style.cursor = "pointer";
      document.getElementById("roll-second").style.cursor = "pointer";

}


/**=== Re-start with New player */

function playNewPlayer() {
      document.getElementById("player-from").style.display = "";
      document.getElementById("container-player").style.display = "none";
}