randomNumber1=Math.random();
randomNumber1=Math.floor(Math.random()*6)+1;
if (randomNumber1===1){
    document.querySelector(".img1").setAttribute("src", "./dice1.png");
}
else if(randomNumber1===2){
    document.querySelector(".img1").setAttribute("src", "./dice2.png");
}
else if(randomNumber1===3){
    document.querySelector(".img1").setAttribute("src", "./dice3.png");
}
else if(randomNumber1===4){
    document.querySelector(".img1").setAttribute("src", "./dice4.png");
}
else if(randomNumber1===5){
    document.querySelector(".img1").setAttribute("src", "./dice5.png");
}
else {
    document.querySelector(".img1").setAttribute("src", "./dice6.png");
}
randomNumber2=Math.random();
randomNumber2=Math.floor(Math.random()*6)+1;
if (randomNumber2===1){
    document.querySelector(".img2").setAttribute("src", "./dice1.png");
}
else if(randomNumber2===2){
    document.querySelector(".img2").setAttribute("src", "./dice2.png");
}
else if(randomNumber2===3){
    document.querySelector(".img2").setAttribute("src", "./dice3.png");
}
else if(randomNumber2===4){
    document.querySelector(".img2").setAttribute("src", "./dice4.png");
}
else if(randomNumber2===5){
    document.querySelector(".img2").setAttribute("src", "./dice5.png");
}
else {
    document.querySelector(".img2").setAttribute("src", "./dice6.png");
}
if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🏳️Player 1 Wins!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="🏳️Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}
