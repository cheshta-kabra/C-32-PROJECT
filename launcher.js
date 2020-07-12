class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.03,
            length: 10
        }
        this.pointB=pointB
        this.launcher = Constraint.create(options);
        this.image=loadImage("images/sling3.png")
        World.add(world, this.launcher);
    }


    attach(body){
        this.launcher.bodyA = body;
    }
    
    fly(){
        this.launcher.bodyA=null;
    }

    display(){
        if(this.launcher.bodyA){
            var pointA = this.launcher.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(48,22,8);
            
           
            if(pointA.x < 220) {
                strokeWeight(7);
                line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.image,pointA.x -30, pointA.y -10,15,30);
            }
            else{
                strokeWeight(3);
                line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.image,pointA.x + 25, pointA.y -10,15,30);
            }
           
            
            pop();
        }
    }

    
    
}