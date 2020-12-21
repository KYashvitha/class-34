const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;
var world;
var ground;
function setup (){
createCanvas(3000,800);
 engine = Engine.create();
 world = engine.world;

 ground = new Ground(1500,750,3000,10);
}

function draw (){
    
 background("white");
 Engine.update(engine);
 ground.display();
}
