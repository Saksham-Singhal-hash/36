var form ,player,game,playerCount,gameState=0
var database

function setup(){
    createCanvas(500,500);
    database=firebase.database();
 game=new game()
 game.getstate();
 game.start();
}

function draw(){
  

}