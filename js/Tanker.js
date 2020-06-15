class Tanker {
  constructor(x, y, width, height) {
      var options = {
      isStatic: true
     }
     this.body = Bodies.rectangle(x,y,width,height,options)
     World.add(world,this.body)
     //Matter.body.setAngle(this.body,angle)
     this.W = width
     this.H = height
    };
    display(){
      var pos = this.body.position
      var angle = this.body.angle

      if(keyIsDown(LEFT_ARROW) && angle > -1.5){
        angle = angle - 0.04
        Matter.Body.setAngle( tank.body, angle);
      }
      if(keyIsDown(RIGHT_ARROW) && angle < 0){
        angle = angle + 0.04
        Matter.Body.setAngle( tanker.body, angle);
      }

      launcher1 = pos.x + ((this.height+100) * cos(angle))
      launcher2 = pos.y - ((this.height-100) * sin(angle))


      if(keyIsDown(DOWN_ARROW)){
          Matter.Body.setPosition(canonBall.body, {x: launcher1 -100 , y: launcher2 +100})
      }

      if(keyIsDown(DOWN_ARROW) && angle >= -0.04){
        Matter.Body.setPosition(canonBall.body,{x:launcherX -100 ,y:launcherY})
      }

      if(keyIsDown(DOWN_ARROW) && angle <= -1.40){
        Matter.Body.setPosition(canonBall.body,{x:launcherX  ,y:launcherY + 100})
      }
      push();
      translate(pos.x, pos.y)
      rotate(angle)
      rect(this.body.position.x, this.body.position.y, this.W, this.H)
      arc(70, height-65, 90, 100, PI , TWO_PI);
      rect(20,height-65,100,20);
      rect(20,height-45,100,20);
    };
}
