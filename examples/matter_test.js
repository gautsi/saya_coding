// module aliases
var Engine = Matter.Engine,
    // Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine;
var world;
var boxes = [];

var ground;


function setup() {
  createCanvas(400, 400);

  // create an engine
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  var options = {
    isStatic: true
  };
  ground = Bodies.rectangle(200, height - 50, width, 100, options);
  World.add(world, ground);

  console.log(width);
}

function mousePressed() {
  boxes.push(new Box(mouseX, mouseY, random(10, 40), random(10, 40)));
}

function draw() {
  background(51);

  for(var x = 0; x < boxes.length; x = x + 1){
    boxes[x].show();
  }

  noStroke(255);
  fill(170);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width, 100);
}
