
var monkey , monkey_running,bananaGroup;
var banana ,bananaImage, obstacle, obstacleImage
var stone,stoneimage,stonegroup;
var score,ground;
var gamestate="play";
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  stoneimage = loadImage("obstacle.png");
 
}



function setup() {
  
monkey=createSprite(70,330,20,20)
monkey.addAnimation("monkey",monkey_running);  
 monkey.scale=0.1; 
  ground=createSprite(200,370,800,20)
  bananagroup=new Group();
  stonegroup=new Group();
}


function draw() {
background("white")
  console.log(monkey.y)
  if(gamestate="play"){

      ground.velocityX=-5;
      if(ground.x<0){
        ground.x=ground.width/2;
      }
      if(keyDown("space")&&monkey.y>329){
        monkey.velocityY=-10;
      }
    monkey.velocityY=monkey.velocityY+0.5;
    bananas();
    stones();
    if(stonegroup.isTouching(monkey)){
      bananagroup.setVelocityXEach(0);
            stonegroup.setVelocityXEach(0);
            bananagroup.setLifetimeEach(-1);
            stonegroup.setLifetimeEach(-1);
      
    }
  }
  monkey.collide(ground);
  drawSprites();
}

function bananas(){
  if(frameCount%80===0){
    
  
  banana=createSprite(420,Math.round(random(150,200)),20,20)
    banana.velocityX=-5;
    banana.addImage("banaba",bananaImage);
    banana.scale=0.1;
    banana.lifetime=200;
    bananagroup.add(banana);
}
}


function stones(){
  if(frameCount%300===0){
    
  
  stone=createSprite(420,340,20,20)
    stone.velocityX=-5;
    stone.addImage("stone",stoneimage);
    stone.scale=0.1;
    stone.lifetime=200;
    stonegroup.add(stone);
}
}



