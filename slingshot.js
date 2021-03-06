class Slingshot {
    constructor(bodyA,pointB){
        var Options ={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }
        this.pointB=pointB
        this.sling=Constraint.create(Options)

     World.add(world,this.sling)
    }
  
    fly(){
        this.sling.bodyA=null
    }

    attach(body){
        this.sling.bodyA=body
    }

    display() {
        if(this.sling.bodyA){
     var pointA=this.sling.bodyA.position;
     var pointB=this.pointB;
     strokeWeight(3)
     stroke(255,245,0)
     line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
  }
  