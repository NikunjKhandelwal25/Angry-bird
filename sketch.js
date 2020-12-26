

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,420);
    box2 = new Box(920,420);
    box3=new Box(700,340);
    box4=new Box(920,340);
    box5=new Box(810,260);
    ground1 = new ground(600,height,1200,20)
    
    log1=new log(810,360,300,PI)
    log2=new log(810,280,300,PI)
    log3=new log(760,220,150,-20)
    log4=new log(870,220,150,20)
    
    Bird=new Bird(400,300);

}

function draw(){
    background(0);
    Engine.update(engine);
    Bird.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground1.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
}