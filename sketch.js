const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var boy,boyimg;
var tree,treeimg;
var stone;
var m1,m2,m3,m4,m5,m6,m9;
var ground;
var attach;


function preload()
{
boyimg = loadImage("boy.png");
treeimg = loadImage("tree.png");
}

function setup() {
	createCanvas(1100, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	var attach = new Slingshot(stone.body,{x:25,y:25})

	boy = createSprite(200,550);
    boy.addImage(boyimg);
	boy.scale=0.125;

	tree = createSprite(850,350);
	tree.addImage(treeimg);
	tree.scale = 0.45;

	ground = new Ground(400,750,1100,20);

	stone=new Stone(125,465,40,50);
	

	
	m1=new Mango(700,290,3);
	m2=new Mango(1030,290,35);
	m3=new Mango(800,260,35);
	m4=new Mango(730,200,35);
	m5=new Mango(850,180,36);
	m6=new Mango(880,280,35);
	m9=new Mango(940,220,1);
	
	

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  fill("white");
  textSize(25);
  text("press space to get second chance",200,100)

  drawSprites();
  
  ground.display();
  stone.display();
  m9.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
   
}



