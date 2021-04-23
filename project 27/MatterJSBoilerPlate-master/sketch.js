
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var platform;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

  engine = Engine.create();
	world = engine.world;


    
	


	

	//Create the Bodies Here.
  platform = new Roof(370,200,250,70);
  bob1 = new Bob(270,300,50,50);
  bob2 = new Bob(320,300,50,50);
  bob3 = new Bob(370 ,300,50,50);
  bob4 = new Bob(420 ,300,50,50);
  bob5 = new Bob(470,300,50,50);
  floor = new Ground(400,690,800,10);
	Engine.run(engine);

  rope1 = new rope(bob1.body,{x:270,y:200});
  rope2 = new rope(bob2.body,{x:320,y:200});
  rope3 = new rope(bob3.body,{x:370,y:200});
  rope4 = new rope(bob4.body,{x:420,y:200});
  rope5 = new rope(bob5.body,{x:470,y:200});


  
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  
  drawSprites();
  platform.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  floor.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


 
}
function mouseDragged(){
  Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY});
}






