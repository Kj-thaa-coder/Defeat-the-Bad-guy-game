class Superhero
{
    constructor(x,y,width,height)
    {
        

        
        
        
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.3,
            density:1.2
    
    }



this.x=x;
this.y=y;
this.width = width
this.height=height
this.body=Bodies.rectangle(this.x, this.y, this.width, this.height, options)

World.add(world, this.body);


this.image = loadImage("sprites/Superhero-01.png");


}
display()
{
    
    var superpos=this.body.position;

    push()
    translate(superpos.x, superpos.y);
    rotate(this.body.angle)
    imageMode(CENTER)
    image(this.image, 0,0, this.x=330, this.y=140, this.width=0.00000000001, this.height=0.0000000000001)
    pop()
    
    }


}
