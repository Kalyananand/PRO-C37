var ball;
var database,position;
var gameState = 0,playerCount = 0;
var game,player,form;
var allPlayers;

function setup(){
    database = firebase.database();
    createCanvas(displayWidth-20,displayHeight-30);
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    if(playerCount===1){
        game.play();
    }
}
 function mousePressed(){
     if(mousePressed) {
         
     }
 }