class ShootBall{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
       this.pointB = pointB
        this.sling = Constraint.create(options)
        World.add(world,this.sling)
    }

    attach(shooter){
    flag = "red"
    this.sling.bodyA = shooter
    }

    shoot(){
    this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.pointB.position
            this.pointB.x = launcher1;
            this.pointB.y = launcher2;
 ;
          }
    }

}
