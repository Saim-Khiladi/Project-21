
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, paper, ground1, dustbin1, dustbin2, dustbin3; 

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	  var options = {
            isStatic: false,
            'restitution': 0.3,
            'friction':0.5,
            'density':1.2
        }

	//Create the Bodies Here.
	 paper =  Bodies.circle(100,550,5, options);
   	 ground1 = new ground(400,680,800,20);
    	 dustbin1 = new ground(610,660, 100, 20);
    	 dustbin2 = new ground(550,620,20,100);
   	 dustbin3 = new ground(670,620,20,100)

	Engine.run(engine);
	World.add(world, paper)

}

function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background(0);

 fill("yellow");
 circle(paper.position.x, paper.position.y, paper.radius);
  
  paper.display();
  ground1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body, paper.body.position, {x: 1,y: -1})
  }


  drawSprites();
 
}