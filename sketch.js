const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint

var superhero
var bgImg
var sling
var platform
var robber

var block
var block2
var block3
var block4
var block5
var block6
var block7
var block8
var block9
var block10

function preload() {
//preload the images here
bgImg = loadImage("sprites/GamingBackground.png")
}

function setup() {
  createCanvas(1440, 800);

  engine = Engine.create();
	world = engine.world;

  // create sprites here
  superhero = new Superhero(500,350,50,50)
  sling = new Sling(superhero.body,{x:500,y:300})
  platform = new Platform(500,500,1000,20)
  block = new Block(700,370,50,50)
  block2 = new Block(700,310,50,50)
  block3 = new Block(700,270,50,50)
  block4 = new Block(700,200,50,50)
  block5 = new Block(700,160,50,50)
  block6 = new Block(760,370,50,50)
  block7 = new Block(755,310,50,50)
  block8 = new Block(755,270,50,50)
  block9 = new Block(755,200,50,50)
  block10 = new Block(755,160,50,50)
  robber = new Robber(900,350,50,50)

 
}

function draw() {
  background(bgImg);
  superhero.display();
  platform.display();
  robber.display();
  // sling.display();
  block.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
 

  Engine.update(engine)
  

}

function mouseDragged(){
  Matter.Body.setPosition(superhero.body,{x:mouseX,y:mouseY})
}