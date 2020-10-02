
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin,paper,ground
function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;
	
	dustbin = new Dustbin (1000,650)
paper= new Paper (200,670,50)

ground= new Ground (750, 680, 1500, 20)
fill('blue')
//var render =Render.create({
//element:document.body,
//engine:engine,
//options:{
//	width:1000,
//	height:700,
//	wireframes:false
//}
//});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display()
  ground.display()
  dustbin.display()
  drawSprites();
 
}

function keyPressed(){

if(keyCode===UP_ARROW){

Matter.Body.applyForce(paper.body,paper.body.position,{x:450,y:-450})

}


}

