class Square{

    varoptions={
        restitution:1,
        friction:5,
        density:1
    }
    
    
    // assign options to the rubber ball
            this.x=x;
            this.y=y;
            this.r=r
            this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
            World.add(world, this.body);
    
    }	
        display()
        {
                var rubberpos=this.body.position;		
                push()
                translate(rubberpos.x, rubberpos.y);
                rectMode(CENTER)
                strokeWeight(4);
                stroke("black");
                fill("darkblue");
}