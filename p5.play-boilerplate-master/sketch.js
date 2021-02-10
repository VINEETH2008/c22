const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var myEngine,world,ground,ball;

function setup() {
  createCanvas(400,400);
  myEngine=Engine.create();
  world=myEngine.world;


  var gOption={
    isStatic:true,
  }

  var bOption={
    restitution:1.0,
  }
  ground=Bodies.rectangle(200,390,200,20,gOption);
  World.add(world,ground);

  ball=Bodies.circle(200,100,20,bOption);
  World.add(world,ball);
}


function draw() {
  background(0);  

  Engine.update(myEngine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,20,20);
  drawSprites();
}
