
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var btn2;
var vento1,vento2,vento3,vento4
 var bola1,bola2,bola3,bola4
 

var angle=60;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
   btn2 = createImg('up.png');
  btn2.position(350,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);

  ground1 = Bodies.rectangle(100,300,100,20,ground_options);
  World.add(world,ground1);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
 
  ground = Bodies.rectangle(100,400,650,20,ground_options);
  World.add(world,ground); 
  vento1= new Ground(50,370,50,30,"yellow");
  vento2= new Ground(150,370,50,30,"blue");
  vento3= new Ground(250,370,50,30,"red");
  vento4= new Ground(350,370,50,30,"green");

  bola1= new BOLA(51,10,20,20,"yellow");
  bola2= new BOLA(151,10,20,20,"blue");
  bola3= new BOLA(251,10,20,20,"red");
  bola4= new BOLA(351,10,20,20,"green");

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  
  Matter.Body.rotate(ground1,angle)
 push();
  translate(ground1.position.x,ground1.position.y);
  rotate(angle);
  rect(0,0,100,20);
  pop();
  
  angle +=0.1;

  vento1.show();
  vento2.show();
  vento3.show();
  vento4.show();

  bola1.show();
  bola2.show();
  bola3.show();
  bola4.show();

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,650,20);
 
//console.log(ground.position.y);

  
  
}

function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
  