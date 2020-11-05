class BaseClass{
    constructor(x, y, width, height, angle,options) {
        var options = {
            isStatic:false,
            'restitution':0.2,
            'friction':0.5,
            'density':1.2
        }
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}