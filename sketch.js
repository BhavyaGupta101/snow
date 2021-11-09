var snow_man;
var snow_manImg;
var backgroundImg;
var boy;
var boyImg;
var boy_jump;
var woman;
var womanImg;
var woman2;
var woman_right;
var woman_left;
var snow;
var snowImg;
var snow2;
var snow2Img;

function preload(){
  backgroundImg = loadImage("snow1.jpg");
  snow_manImg = loadImage("snowman2.png");
  boyImg = loadImage("jump.png");
  boy_jump = loadImage("jumping.gif");
  womanImg = loadImage("walk.png");
  woman2 = loadImage("right.png")
  woman_left = loadImage("walk.gif");
  woman_right = loadImage("walkright.gif");
  snowImg = loadImage("snow4.webp");
  snow2Img = loadImage("snow5.webp");
}

function setup() {

  createCanvas(1200,700);

  snow_man = createSprite(180,500,50,50);
  snow_man.addImage("snowman2",snow_manImg);
  snow_man.scale= 1.2;

  boy = createSprite(350,500,50,50);
  boy.addImage("boy",boyImg);
  boy.addImage("jump",boy_jump);
  boy.scale = 1.2;

  woman = createSprite(500,500,50,50);
  woman.addImage("women",womanImg);
  woman.addImage("woman",woman2);
  woman.addImage("walking",woman_right);
  woman.addImage("walk",woman_left);

  
}

function draw() {
  background(backgroundImg);  
  drawSprites();

  if (keyDown("space")){
    boy.changeImage("jump",boy_jump);
  }

  if (keyDown("LEFT_ARROW")){
    woman.changeImage("walk",woman_left);
    woman.velocityX = -3;
    woman.scale = 1.3;
  }

  if (keyDown("RIGHT_ARROW")){
    woman.changeImage("walking",woman_right);
    woman.velocityX = 3;
    woman.scale = 1.3;
  }

  if (woman.x<450){
    woman.x=450;
    woman.changeImage("women",womanImg);
    woman.scale = 1;
  }
  if (woman.x>1100){
    woman.x=1100;
    woman.changeImage("woman",woman2);
    woman.scale = 1;
  }

  fall();
  fall2();

  textSize(30);
  fill("black");
  text("Press SPACE key to make the boy jump",550,40);
  text("Press LEFT ARROW key to make the boy jump",550,70);
  text("Press RIGHT ARROW key to make the boy jump",550,100);
}

function fall() {
  if (frameCount % 5 === 0) {
    snow = createSprite(100,100,10,10);
    snow.addImage("snowfall", snowImg);
    snow.scale = 0.1;
    snow.x = Math.round(random(10,1190));
    snow.velocityY = 5;
  }
}

function fall2() {
  if (frameCount % 5 === 0) {
    snow2 = createSprite(100,100,10,10);
    snow2.addImage("snowing", snow2Img);
    snow2.scale = 0.1;
    snow2.x = Math.round(random(10,1190));
    snow2.velocityY = 5;
  }
}