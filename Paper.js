class Paper {
  constructor(x,y){
    
  var Paper_options = {
          'restitution': 0.4,
          'friction': 1,
          'denstity' : 1.2
         }

      this.body = Bodies.circle(x,y,2,Paper_options);
      this.width = 10;
      this.height= 10;
      World.add(world,this.body);
      
  }
display(){
    
    var pos = this.body.position;
    pos.x = this.body.x;
    pos.y = this.body.y;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    fill('green');
    pop();
}

}
