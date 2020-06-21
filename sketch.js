var car1,car3,car3,car4;
var wall,speed1,weight1;
var speed2,weight2;
var speed3,weight3;
var speed4,weight4;
var object1,object2;
var deformation1,deformation2,deformation3,deformation4;
var deformation,speed,weight;

function setup() {
  createCanvas(1400,600);
 
  wall=createSprite(1300,300,15,600);
  wall.shapeColor=rgb(80,80,80);
 car1=createSprite(200, 50,15,15);
  car2=createSprite(200, 200,15, 15);
  car3=createSprite(200,350,15, 15);
  car4=createSprite(200, 500,15, 15);
  car1.shapeColor="blue";
  car2.shapeColor="blue";
  car3.shapeColor="blue";
  car4.shapeColor="blue";

  speed1=random(50,90);
  weight1=random(500,1500);
  car1.velocityX=speed1;

  speed2=random(50,90);
  weight2=random(500,1500);
  car2.velocityX=speed2;

  speed3=random(50,90);
  weight3=random(500,1500);
  car3.velocityX=speed3;

  speed4=random(50,90);
  weight4=random(500,1500);
  car4.velocityX=speed4;
  
}


function draw() {
  background(150);  

 

//collide(car1,wall)
collide(wall,car1)
collide(wall,car2)
collide(wall,car3)
collide(wall,car4)
  drawSprites();
}


/*function collide(){
  if(wall.x-car1.x<wall.width/2+car1.width/2 && car1.x-wall.x<wall.width/2+car1.width/2){
    car1.velocityX=0
  }
}*/