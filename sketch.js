var canvas;
var backgroundImage, bgImg, car1_img, car2_img, track;
var bgImg;
var database;
var fuelImage, powerCoinImage;
var form, player;
var playerCount;
var gameState;
var fuels, powerCoins
var car1, car2, allPlayers;
var cars = [];
var obstacle1Image, obstacle2Image, obstacles;
var lifeImg;
var blastImg;

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1_img = loadImage("assets/car1.png")
  car2_img = loadImage("assets/car2.png")
  track = loadImage("assets/track.jpg")
  fuelImage = loadImage("assets/fuel.png")
  powerCoinImage = loadImage("assets/goldCoin.png")
  obstacle1Image = loadImage("assets/obstacle1.png")
  obstacle2Image = loadImage("assets/obstacle2.png")
  lifeImg = loadImage("assets/life.png");
  blastImg = loadImage("assets/blast.png");
  
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}

function draw() {
  background(backgroundImage);
  if(playerCount == 2){
    game.update(1)
  }
  if(gameState == 1){
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
