class Slingshot{
    constructor(body1,point2){
        var options={
            bodyA:body1,
            pointB:point2,
            length:50,
            stiffness:0.8
        } 
       this.sling=Constraint.create(options);
        World.add(world,this.sling);
    }
       display(){
           
        if(this.sling.bodyA){
            push ();
        strokeWeight(3);
        line (this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.pointB.x,this.sling.pointB.y);
        pop()
    }
}

fly(){
    this.sling.bodyA=null;
}  
attach(body){
   this.sling.bodyA=body;
}
} 
