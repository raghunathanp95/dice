var randomNumber1 = 1+(Math.floor(6*(Math.random()))); // generating random number ranging 1-5 and adding 1 for getting till 6 with floor for rounding

var randomDiceImage1 = "dice" + randomNumber1 + ".png"; // concatinating dice images with randomNumber to display randomly dice1- dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceImage1);


var randomNumber2 = 1+(Math.floor(6*(Math.random()))); // for image 2nd

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDiceImage2);

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins!!"
}
else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 Wins!!"
}
else{
  document.querySelector("h1").innerHTML = "Draw"
}
