const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,ball,square;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
   iron=new Iron(300,350);
   rubber=new Rubber(900,450,70);
  
ground=Bodies.rectangle(0,580,1200,20,{isStatic:true})
World.add(world,ground)
 
}


function draw(){
    background("lightBlue");
    Engine.update(engine);
    fill("gray")
rect(0,580,1200,20)

    plane.display();
    hammer.display();
    iron.display();
    rubber.display();
 
}