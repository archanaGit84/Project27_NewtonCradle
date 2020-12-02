class Bob
{
	constructor(x,y,r)
	{
		var options={
			restitution:1,
			density:0.8
		}
		
		
		this.body= Bodies.circle(x, y, r, options);
        World.add(world, this.body);
        console.log(this.body);

	}
	display()
	{
			
			var pos=this.body.position;
            push();
            fill(0,255,255);
			translate(pos.x, pos.y);
			ellipseMode(RADIUS)
			circle(0,0,this.body.circleRadius);
			pop()
			
	}

}