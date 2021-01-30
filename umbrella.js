class Umbrella {
    constructor(x, y) {
      var options = {
        isStatic: true ,
      }
      this.body = Bodies.rectangle(x, y, width, height,options);
      this.width = 200;
      this.height = 300;
      World.add(world, this.body);
      this.image = loadImage("images/Walking Frame/walking_1.png");
    }
    display(){
      var pos =this.body.position;
      push ()
      imageMode(CENTER);
      fill("light blue");
      image(this.image , pos.x,pos.y, this.width , this.height );
      pop();
    }
  };