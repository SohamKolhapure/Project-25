class Line {
    constructor(x,y,width,height){
      
        var Line_options = {
            'restitution': 0.4,
            'friction': 1,
            'denstity' : 1.2
  
        }
  
        this.body = Bodies.rectangle(x,y,width,height,Line_options);
        this.width = width;
        this.height= height;
        World.add(world,this.body);
        
    }
  display(){
      
      var pos = this.body.position;
     pos.x = this.body.position.x;
      pos.y = this.body.position.y;
      fill('white');
  }
  
  }
  