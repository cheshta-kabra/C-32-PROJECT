// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector} = Matter;

var bg="yellow";
var engine, world;
var circle1;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;
var block11,block12,block13,block14,block15,block16,block17,block18,block19,block20;
var block21,block22,block23,block24,block25,block26,block27,block28,block29,block30;
var launcher;
var groung,ground1,ground2;
var score=0;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    block1=new Rectangle(330,240,30,40)
    block2=new Rectangle(370,240,30,40)
    block3=new Rectangle(410,240,30,40)
    block4=new Rectangle(450,240,30,40)
    block5=new Rectangle(490,240,30,40)

    block6=new Rectangle(350,195,30,40)
    block7=new Rectangle(390,195,30,40)
    block8=new Rectangle(430,195,30,40)
    block9=new Rectangle(470,195,30,40)

    block10=new Rectangle(370,150,30,40)
    block11=new Rectangle(410,150,30,40)
    block12=new Rectangle(450,150,30,40)

    block13=new Rectangle(390,105,30,40)
    block14=new Rectangle(430,105,30,40)

    block15=new Rectangle(410,60,30,40)


    block16=new Rectangle(800,400,30,40)
    block17=new Rectangle(835,400,30,40)
    block18=new Rectangle(870,400,30,40)
    block19=new Rectangle(905,400,30,40)
    block20=new Rectangle(940,400,30,40)

    block21=new Rectangle(820,354,30,40)
    block22=new Rectangle(855,354,30,40)
    block23=new Rectangle(890,354,30,40)
    block24=new Rectangle(925,354,30,40)

    block25=new Rectangle(835,307,30,40)
    block26=new Rectangle(870,307,30,40)
    block27=new Rectangle(905,307,30,40)

    block28=new Rectangle(850,260,30,40)
    block29=new Rectangle(885,260,30,40)

    block30=new Rectangle(865,215,30,40)

    ground= new Ground(600,600,1600,20);
    ground1= new Ground(405,270,230,15);
    ground2= new Ground(872,432,260,15);

    circle1 = new Ball(50,250,70);

   launcher = new Launcher(circle1.body,{x:45,y:300});

}

function draw(){
    background(bg);
    Engine.update(engine);

    
    ground.display();
    
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();
    block29.display();
    block30.display();

    ground1.display();
    ground2.display();

    circle1.display();
    
    launcher.display();

    //launcher.display();

    /*block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();
    block19.score();
    block20.score();
    block21.score();
    block22.score();
    block23.score();
    block24.score();
    block25.score();
    block26.score();
    block27.score();
    block28.score();
    block29.score();
    block30.score();*/
    
    text("SCORE : "+score,750,40)

}
function mouseDragged(){
    Matter.Body.setPosition(circle1.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    launcher.fly();
}
function keyPressed(){
    if(keyCode === 32){
        launcher.attach(circle1.body);
    }
}
