class Mango{
    constructor(x,y,width,length){
        var options={
            isStatic: true,
            restitution:0,
            friction:1,
        }
    this.body = Bodies.rectangle(x,y,width,height)
    this.width = width;
    this.length = length;
    image = loadImage("images/mango.png");
    World.add(world,this.body);
    }
display(){
    push();
    translate(this.body.position.x,this.position.y);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.width)
    pop();
}
}
