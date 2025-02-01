alert("Welcome");
var firstName = prompt("What is your name?");
var secondName = prompt("What is your opponents name?");

document.querySelector(".first-name").innerHTML = firstName;
document.querySelector(".second-name").innerHTML = secondName;

function rollDice() {

    var randomNumber1 = Math.floor(Math.random() * 6)+1;
if (randomNumber1 === 1){
    document.querySelector(".first-cube").src="./assets/images/dice1.png";
}
else if (randomNumber1 === 2){
    document.querySelector(".first-cube").src="./assets/images/dice2.png";
}
else if (randomNumber1 === 3){
    document.querySelector(".first-cube").src="./assets/images/dice3.png";
}
else if (randomNumber1 === 4){
    document.querySelector(".first-cube").src="./assets/images/dice4.png";
}
else if (randomNumber1 === 5){
    document.querySelector(".first-cube").src="./assets/images/dice5.png";
}
else if (randomNumber1 === 6){
    document.querySelector(".first-cube").src="./assets/images/dice6.png";
}

var randomNumber2 = Math.floor(Math.random() * 6) + 1; 
document.querySelector(".second-cube").setAttribute("src", `./assets/images/dice${randomNumber2}.png`);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML ="🏆" + firstName + " Wins!";
}
else if (randomNumber1 === randomNumber2){
     document.querySelector("h1").innerHTML ="Draw!🤝";
}
else {
    document.querySelector("h1").innerHTML = "🏆" + secondName + " Wins!";
}

}

document.querySelector(".btn").addEventListener("click", rollDice);
