class Box extends BaseClass {
  constructor(x, y, width, height){
    
    super(x,y,width,height);
    this.visibility=255;
  }
  display(){
  if(this.body.speed<3){
    super.display();
  }
  else{
    push ();
    World.remove(world,this.body);
    tint (255,this.visibility);
this.visibility-=5;
pop ();
  }
}

score(){
  if(this.visibility<0 && this.visibility>-1000){
    score++;
    console.log(score);
  }
  }
}
