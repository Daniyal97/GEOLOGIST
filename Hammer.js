class Hammer {
    constructor(){
     var options = {
      restitution =0.5 ,
      dencity = 2,
      friction = 1.0,
     }
     this.body = bodies.rectangle(140,200,100,50,options);
     this.width = 100;
     this.height = 50;
     World.add(world,this.body)
    }
    display(){
        var pos = this.body.positition;
        rectMode(CENTER);
        rect
    }
}