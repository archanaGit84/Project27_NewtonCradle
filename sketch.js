const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var engine, world;
var bob1,bob2,bob3, bob4,bob5;
var roof;
var rope1,rope2,rope3, rope4,rope5;

function setup() {
	createCanvas(800, 600);
	
	engine = Engine.create();
	world = engine.world;

	roof=new Roof(400,100,600,20);

	//console.log(roof)

	var bobDiam = 20;
	//Central Bob = bob1
	bob1=new Bob(roof.body.position.x,roof.body.position.y + 250, 20);
	var bobX = bob1.body.position.x;
	var bobY = bob1.body.position.y;
	//Bobs to the left of central bob
	bob2=new Bob(bobX-bobDiam,bobY,bobDiam);
	bob3 = new Bob(bobX - bobDiam*2, bobY, bobDiam);
	//Bobs to the right of central bob
	bob4=new Bob(bobX+bobDiam,bobY,bobDiam);
	bob5 = new Bob(bobX + bobDiam*2, bobY, bobDiam);

	rope1=new Rope(bob1.body,roof.body,0, 0);
	rope2=new Rope(bob2.body,roof.body,-bobDiam, 0);
	rope3=new Rope(bob3.body,roof.body,-bobDiam*2, 0);
	rope4=new Rope(bob4.body,roof.body,bobDiam, 0);
	rope5=new Rope(bob5.body,roof.body,bobDiam*2, 0);

	  
}


function draw() {
  Engine.update(engine)	
  
  background(0);
  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
   
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(bob3.body,bob3.body.position,{x:-50,y:-45});

  	}
}

