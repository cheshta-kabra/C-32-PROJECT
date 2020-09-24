class Rectangle {
    constructor(x,y,height,width) {
      var options ={
        restitution:0.5
      }
      this.body=Bodies.rectangle(x,y,width,height,options);
      this.height=height;
      this.width=width;
      this.x=x;
      this.y=y;
      World.add(world,this.body);
    }

    /*score(){
      
      if(this.visibility<0 && this.visibility>-105){
        score++
        
      }
    }*/
  
    display(){
      //console.log(this.body.speed);
      if(this.body.speed <6){
      var angle = this.body.angle;
      var pos= this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.width, this.height);
      pop();
    }else{
      World.remove(world, this.body);
      push();
      this.visibility = this.visibility -5;
      score++
      pop();
      
    }
  }
  
  }

