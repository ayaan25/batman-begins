const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var th, thImage
var engine, world, umbrella;
var drops = []
var maxdrops = 200 ;

function preload() {
    thImage = loadImage("images/thunderbolt/1.png");
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
    th = createSprite(600,50,15,15);
    umbrella = new Umbrella (600,700,100,300);
    if(frameCount % 150 === 0){

    
    for(var i = 0; i <maxdrops; i++){
       drops.push(new Drops(random(0,1200),random(0,1200)));
    }
}
}
function draw(){
    background(0);
    Engine.update(engine);
    image(thImage,600,50,100,300);
     for(var i = 0; i <maxdrops; i++){
         drops[i].display();
         drops[i].update();
     }
     umbrella.display();

    drawSprites();
}   

