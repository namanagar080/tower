const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var engine, world;
var ground,polygon, stand,slingshot,polygonImg;
var score=0;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,bx19,box19,box20,box21,box22,box23,box24,box25,box26,box27,box28,box28

function preload(){
polygonImg=loadImage("polygon.png");
}


function setup(){
   
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    stand = new Ground(600,600,200,20);
    box1 =new Box(520,590,20,20);
    box2 = new Box(540,580,20,20);
    box3 = new Box(560,580,20,20);
    box4=new Box(580,580,20,20);
    box5=new Box(600,580,20,20);
    box6=new Box(620,580,20,20);
    box7=new Box(640,580,20,20);
    box8=new Box(660,580,20,20);
    box9=new Box(680,580,20,20);
    box10=new Box(540,560,20,20);
    box11=new Box(560,560,20,20);
    box12=new Box(580,560,20,20);
    box13=new Box(600,560,20,20);
    box14=new Box(620,560,20,20);
    box15=new Box(640,560,20,20);
    box16=new Box(660,560,20,20);
    box17=new Box(560,540,20,20);
    box18=new Box(580,540,20,20);
    box19=new Box(600,540,20,20);
    box20=new Box(620,540,20,20);
    box21=new Box(640,540,20,20);
    box22=new Box(560,520,20,20);
    box23=new Box(580,520,20,20);
    box24=new Box(600,520,20,20);
    box25=new Box(620,520,20,20);
    box26=new Box(580,500,20,20);
    box27=new Box(600,500,20,20);
    box28=new Box(590,480,20,20);
   polygon=new Polygon (50,200,20);   

    
    slingshot=new Slingshot(polygon.body,{x:150,y:600});

}
function draw(){
    background("white");
    Engine.update(engine);
    ground.display();
    stand.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    polygon.display();
    slingshot.display();
    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box23.score();
    box24.score();
    box25.score();
    box26.score();
    box27.score();
    box28.score();
    text ("score = "+score,1000,500);
   
    getTime();
}


function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode===32){
        slingshot.attach(polygon.body);
    }
}

async function getTime(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    console.log(responseJSON);
    var dateTime= responseJSON.datetime;
    var hour = dateTime.slice(11,13);
    console.log(dateTime);
    console.log(hour);
    if(hour >= 18 || hour<=6){
        background("black");
        console.log("nighttime");
    }
    else{
        background("white");
        console.log("daytime");
    }
}