class Ball{
    constructor(x,y,width,height,fill){
        this.body=Bodies.polygon(x,y,6,20);
        World.add(world,this.body);
        this.width=width;
        this.height=height;
        this.fill=fill;
        this.img=loadImage("ball.png");
    }
    display(){
        var pos = this.body.position;
        push();
        strokeWeight(2);
        translate(this.body.position.x,this.body.position.y);
        fill(this.fill);
        angleMode(RADIANS);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.img,0,0,70,70);
        pop();
    }
}