
// write function for button click

function play() {

      let dice1 = Math.floor(Math.random() * 6) + 1
      let dice2 = Math.floor(Math.random() * 6) + 1

      let image1 = "images/dice" + dice1 + ".png";
      let image2 = "images/dice" + dice2 + ".png";

      let img1 = document.querySelectorAll("img")[0];
      img1.setAttribute("src", image1);

      let img2 = document.querySelectorAll("img")[1];
      img2.setAttribute("src", image2);

      if (dice1 == dice2) {
            document.querySelector('h1').innerHTML = "Match drow"

            document.getElementById("p1").innerHTML = "Drow";
            document.getElementById("p2").innerHTML = "draw";
      }
      else if (dice1 > dice2) {
            document.querySelector('h1').innerHTML = "Player one has win"
            document.getElementById("p1").innerHTML = "Win";
            document.getElementById("p1").style.color = "green";
            document.getElementById("p2").innerHTML = "Loss";
            document.getElementById("p2").style.color = "black";
      } else {
            document.querySelector('h1').innerHTML = "Player Two Win"
            document.getElementById("p1").innerHTML = "loss";
            document.getElementById("p2").innerHTML = "win";
            document.getElementById("p2").style.color = "green";
            document.getElementById("p1").style.color = "black";

      }
}
