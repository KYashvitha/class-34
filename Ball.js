class Ball{
    constructor(x,y,radius,angle){
      var options ={
          frictionAir : 0.005,
          density : 1.0
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      
      World.add(world,this.body);
    }
    display(){
        var position = this.body.position;
        var angle = this.body.angle;
        push();
        translate (position.x,position.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill("red");
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}