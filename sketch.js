const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperball;
var dustbin;

var ground;

var side1;
var side2;
var side3;

function setup() {
	
	createCanvas(1200, 400);
	engine = Engine.create();
	world = engine.world;
	
	paperball = new PaperBall(75,300);
	
	ground = new Ground(600,380,1200,20);
	
	side1 = new Dustbin(900,310,20,100);
	side2 = new Dustbin(1100,310,20,100);
  	side3 = new Dustbin(1000,355,200,25);

	Engine.run(engine);  
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  paperball.display();
 
  side1.display();
  side2.display();
  side3.display();
 
  ground.display();
  
  drawSprites();
}

function keyPressed(){ 
 if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paperball.body,paperball.body.position,{x:85,y:-85}); 
		} 
	}




