class Block  {
    constructor(x,y,width,height)  {
        var options={
            isStatic:false,
            restitution:0.4,
            friction:0.0
        }
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,options);
        

        World.add(world,this.body);

    }
    display()  {
        rectMode(CENTER);
        fill("cyan");
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}