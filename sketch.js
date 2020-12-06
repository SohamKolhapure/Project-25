
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1;
var l1,l2,l3;
function preload()
{


}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper1 = new Paper(300,450,20,20);
	l1 = new Line(900,693,250,12);
	l2 = new Line(780,636,12,130);
	l3 = new Line(1030,636,12,130);
}


function draw() {
  background(0);
 Engine.update(engine);
  
  
  paper1.display();
  l1.display();
  l2.display();
  l3.display();
}



