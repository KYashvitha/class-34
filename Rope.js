class Rope{
      constructor(bodyA,pointB){
          var options={
              bodyA:bodyA,
              pointB:pointB,
              stiffness: 1.2,
              length: 250
          }
            this.pointB = pointB;
            this.rope = Constraint.create(options);
            world.add(world,this.rope);
          
      }
      display(){
          if(this.rope.bodyA){
              var pointA = this.rope.bodyA.position;
              var pointB = this.pointB;
              push();
          
              stroke(48,22,8);
              line(pointA.x ,pointA.y,pointB.x,pointB.y);
              pop();
          }
      }

}
