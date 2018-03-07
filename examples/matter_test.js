// module aliases
var Engine = Matter.Engine,
    // Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine;
var world;
var box1;


function setup() {
  createCanvas(600, 400);

  // create an engine
  engine = Engine.create();

  world = engine.world;

  Engine.run(engine);

  // create two boxes and a ground
  box1 = new Box(200, 100, 50, 50);

}

function draw() {
  background(51);

  box1.show();
}
