var ball;
var dataBase;
var position;
var form,game,player;
var gameState=0;
var playerCount;
var allPlayers;

function setup(){
    createCanvas(500,500);
    dataBase=firebase.database()
   game=new Game()
   game.getState();
   game.start();
}

function draw(){
  if(playerCount===4) {
      game.update(1)
  }
  if(gameState===1){
      clear()
      game.play()
  }
}

