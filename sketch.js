// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.
var tank, ground    

var angle = 0
var canonBall
var shot
var ball1, ball2, ball3
var launcher1, launcher2
var flag = "start"
function setup() {
var canvas = createCanvas(800,500)   // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
engine = Engine.create()
world = engine.world
shooter = Bodies.rectangle(0,0,20,10)
World.add(world,shooter)
ground = new Ground(400,490,1200,20)
angle = 20
tank = new Tanker(70,440,100,80)

ball1 = new Ball(400,50,15)
ball2 = new Ball(450,100,15)
ball3 = new Ball(500,150,15)

canonBall = new CanonBall (20,20)

shot = new ShootBall(canonBall.body, { x: 70, y: height - 220 })
}

function draw() {
background(255,255,255)
Engine.update(engine);
tank.display();
ground.display();
ball1.display();
ball2.display();
ball3.display();
canonBall.display();
shot.display();
if (keyIsDown(UP_ARROW)) {
    shot.attach(canonBall.body)
}
}


function keyReleased() {
    if (keyCode === DOWN_ARROW) {
        flag = "launch"

        shot.shoot()
    }
}