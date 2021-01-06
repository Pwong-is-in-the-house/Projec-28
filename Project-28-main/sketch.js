
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var boy,boyImage;
var ground, tree, treeImage;
var stones;
var mango1,mango2,mango3,mango4,mango5;
var launcherObject;
function preload()
{
	boyImage=loadImage("Plucking mangoes/boy.png");
	treeImage=loadImage("Plucking mangoes/tree.png")
}

function setup() {
	createCanvas(1000, 650);

	engine = Engine.create();
	world = engine.world;
	ground = new Ground();
	stones=new Stone(460,100);
	mango1=new Mango(600,290);
	mango2=new Mango(855,325);
	mango3=new Mango(670,260);
	mango4=new Mango(730,200);
	mango5=new Mango(710,320);
launcherObject=new Launcher(stones.body,{x:200,y:500});
boy=createSprite(160,550);
boy.addImage(boyImage);
boy.scale=0.125;
tree=createSprite(775,368);
tree.addImage(treeImage);
tree.scale=0.42;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("silver");
  detectCollision(stones,mango1);
  detectCollision(stones,mango2);
  detectCollision(stones,mango3);
  detectCollision(stones,mango4);
  detectCollision(stones,mango5);
  stones.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
launcherObject.display();
  drawSprites();
 
}
function mouseDragged(){
        Matter.Body.setPosition(stones.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcherObject.fly();
}
function detectCollision(Lstone,Lmango){
	mangoBodyPosition=Lmango.body.position
	stoneBodyPosition=Lstone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=Lmango.r+Lstone.r){
Matter.Body.setStatic(Lmango.body,false);
	}
}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stones.body,{x:235,y:420});
		launcherObject.attach(stones.body)
	}
}



