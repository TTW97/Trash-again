class Paper {
    constructor(x, y, radius) {
      var options = {
  
          isStattic: false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      } 
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;

      this.image = loadImage("paper.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
  
      var angle = this.body.angle;
  
      push();
  
      rotate(angle);
  
      rectMode(CENTER);
  
      fill("purple");
  
      image(this.image, pos.x, pos.y, 70,70);

      pop();
  
    }
  }
  