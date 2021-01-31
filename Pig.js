class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    //255 means full visibility
    this.visibility=255; 
  }

  display(){
    console.log(this.body.speed);
    if(this.body.speed<3){
      super.display();
    }
    else{
      //the opposite of world.add comand
    World.remove(world,this.body);
    //need push and pop so that the other classes dont also reduce visibility
    push();
    //reducing the visibility by 5 each
    this.visibility=this.visibility-5;
    tint(255,this.visibility);
    image(this.image,this.body.position.x, this.body.position.y, 50, 50);
    pop();
    }


  }

};