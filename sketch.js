var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, earth, piston, arrow, sun,jupiter;

var track, earth1_img, piston1_img, arrow1_img, sun1_img , jupiter1_img;

function preload(){
  // track = loadImage("../images/track.jpg");
  earth1_img = loadImage("../images/earth.jpg");
  piston1_img = loadImage("../images/piston star.jpg");
  arrow1_img = loadImage("../images/arrow of time.jpg");
   sun1_img = loadImage("../images/sun.jfif");
   jupiter1_img=loadImage("../images/planet.jfif")
  // ground = loadImage("../images/ground.png");
}

function setup(){
  canvas = createCanvas(3000, 800);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background("black")
  if(playerCount === 1){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  //  if(gameState === 2){
    
  // }
}
