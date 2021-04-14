
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, groundObject, paperObj;	
var world, engine;


function setup() {
	createCanvas(1200, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,570,width,15);
	dustbinObj=new dustbin(1000,550);
	paperObj=new Paper(40,30,15);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  groundObject.display();
  dustbinObj.display();
  paperObj.display();

}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:60,y:-45});

	}
}
