var paperObject;
var ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);

  keyPressed();

	engine = Engine.create();
	world = engine.world;

	
	//Create a Ground
	ground = createSprite(width/2, 390, width, 10 , {isStatic:true} );
	ground.shapeColor="brown";
 	World.add(world, ground);


	trashSideB=createSprite(1000,375,200,20);
	trashSideB.shapeColor = "gold";
	trashSideL=createSprite(900,335,20,100);
	trashSideL.shapeColor = "gold";
	trashSideR=createSprite(1100,335,20,100);
	trashSideR.shapeColor = "gold";
	
	paperObject = new Paper();

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paperObject.display();
  
  drawSprites();
 
}


 function keyPressed(){
	 if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	 }
 }




