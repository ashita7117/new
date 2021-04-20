
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world
var boy ,boyi
var tree,treei
function preload()
{
	 boyi = loadImage("images/boy.png")
   treei = loadImage("images/tree.png")
}

function setup() {
	createCanvas(1050, 510);

  tree = createSprite(850,200);
  tree.addImage(treei);
  tree.scale = 0.5

  boy = createSprite(270,400);
  boy.addImage(boyi);
  boy.scale = 0.15

  ball1 = new Ball(270,390,2,2);
  mango1 = new Mango(270,490,2,2);


	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
  ball1.display();
  mango1.display();

}



