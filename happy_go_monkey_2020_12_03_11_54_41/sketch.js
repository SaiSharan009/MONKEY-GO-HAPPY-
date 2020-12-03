var back, ground, score;
var bananaI, bananaGroup, obstacleI, obstacleG, backI, score, playerA, player;
var Monkey
var bananaG;
var invisibleGround
var obstacleGroup



function preload() {

  backI = loadImage("jungle.jpg");
  playerA = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");

  bananaI = loadImage("banana.png")
  obstacleI = loadImage("stone.png")
}


function setup() {
  createCanvas(600, 400);
  back = createSprite(width / 2, height / 2, 600, 400);
  back.addImage("back", backI);
  back.scale = 1.3

  back.velocityX = -4


  Monkey = createSprite(80, 315, 20, 20)
  Monkey.addAnimation("monkey", playerA)
  Monkey.scale = 0.1


  BananaGroup = new Group();
  obstacleGroup = new Group();

  invisibleGround = createSprite(300, 390, 600, 10);
  invisibleGround.visible = false;


  score = 0;
}

function draw() {
  background("black")


  if (back.x < 0) {
    back.x = back.width / 2;
  }

  if (keyWentDown("space")) {
    Monkey.velocityY = -12;


  }
  Monkey.velocityY = Monkey.velocityY + 0.8


  Monkey.collide(invisibleGround);
  spawnbanana();
  spawnObstacle();

  if (obstacleGroup.isTouching(Monkey)) {
    obstacleGroup.destroyEach()

  }

  if (BananaGroup.isTouching(Monkey)) {
    score++
    BananaGroup.destroyEach()
  }
  drawSprites();
  text("Score: " + score, 500, 50);
}

function spawnbanana() {
  if (frameCount % 60 === 0) {
    var banana = createSprite(400, 165, 10, 40);
    banana.velocityX = -7;
    banana.addImage(bananaI);
    banana.lifetime = 300;
    banana.scale = 0.05;

    BananaGroup.add(banana);
  }
}

function spawnObstacle() {
  if (frameCount % 80 === 0) {
    var stone = createSprite(400, 350, 10, 40);
    stone.velocityX = -7;
    stone.addImage(obstacleI);
    stone.lifetime = 300;
    stone.scale = 0.2;

    obstacleGroup.add(stone);

  }
}