class Platform
{
    constructor(x,y,width,height)
    {
        

        
        
        
        var options={
            isStatic:true,
            restitution:0.3,
            friction:0.3,
            frictionAir:0.000000000001,
            density:1
    
    }



this.x=x;
this.y=y;
this.width = width
this.height=height
this.body=Bodies.rectangle(this.x, this.y, this.width, this.height, options)

World.add(world, this.body);





}
display()
{
    
    var superpos=this.body.position;

    push()
    translate(superpos.x, superpos.y);
    rotate(this.body.angle)
    rectMode(CENTER)
    strokeWeight(3);
    rect(0,0,this.width, this.height);
    pop()
    
    }


}
