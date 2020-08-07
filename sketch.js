//This cretaes the constants for the Physics Engine
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//This creates the varirables
var ball;
var ground;
var box;

function preload()
{
	


}

function setup() {

	
	//This creates the Cnavas
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//This creates all the vrirables using the classes
	ball = new Paper(200,200,55);

	ground = new Ground(400, 650, 800, 30);

	box = new Box(600,435,200,200);

	

	Engine.run(engine);
  
}


function draw() {


  rectMode(CENTER);
  background("white");

  //This displays all the bodies

  ball.display();

  ground.display();

  box.display();

  


  
  
  drawSprites();

  keyPressed();
 
}

//This acceltrates the ball when the up arrow is pressed
function keyPressed() {

	if (keyDown(UP_ARROW)) {

		Matter.Body.applyForce(ball.body,ball.body.position,{x:60,y:-60});

	}



}



