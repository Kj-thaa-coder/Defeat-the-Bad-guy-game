class Robber
{
    constructor(x,y,width,height)
    {
        

        
        
        
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.3,
            frictionAir:0.000000000001,
            density:1
    
    }



this.x=x;
this.y=y;
this.width = width;
this.height=height;
this.body=Bodies.rectangle(this.x, this.y,this.width=100,this.height=100, options)

World.add(world, this.body);


this.image = loadImage("sprites/robber_dude.png");


}
display()
{
    
    var robpos=this.body.position;

    push()
    translate(robpos.x, robpos.y);
    rotate(this.body.angle)
    imageMode(CENTER)
    image(this.image, 0,0, this.x=120, this.y=140, this.width=1, this.height=1)
    strokeWeight(3);
    pop()
    
    }


}
