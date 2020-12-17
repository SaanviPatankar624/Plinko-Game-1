const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ground;
var particles = [];
var plinkos = [];
var divisions = [];

var divisionsHeight = 300;


function setup() {
  createCanvas(700,700);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground(400, 700, 800, 15);

  for(var k = 0; k <= width; k = k + 80){
      divisions.push(new Division(k, height-divisionsHeight/2, 10, divisionsHeight))
  };

  for(var j = 40; j <= width; j = j + 50)
  {
     plinkos.push(new Plinko(j, 75));
  }

  for(var j = 15; j <= width-10; j = j + 50)
  {
     plinkos.push(new Plinko(j, 175));
  }

  for(var j = 40; j <= width; j = j + 50)
  {
     plinkos.push(new Plinko(j, 275));
  }

  for(var j = 15; j <= width-10; j = j + 50)
  {
     plinkos.push(new Plinko(j, 375));
  }
  
}

function draw() {
  background("black"); 

  Engine.update(engine);

  ground.display();

  for(var i = 0; i < plinkos.length; i++){
      plinkos[i].display();
  }

  if(frameCount%60 === 0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));
  }

  for(var j = 0; j < particles.length; j++){
      particles[j].display();
  }

  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
}


}