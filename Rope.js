class Rope{
	constructor(body1,body2, offsetX, offsetY)
	{
        //Offset multiplied to convert radius to diameter.
		this.offsetX=offsetX*2;
		this.offsetY=offsetY*2;
		var options={
			bodyA:body1,
			bodyB:body2,
			pointB:{x:this.offsetX, y:this.offsetY}
		}
		//console.log(options);
		this.rope=Constraint.create(options);
		World.add(world,this.rope)
	}

	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;

        strokeWeight(4);
        stroke(220,60,60);

		line(pointA.x, pointA.y, pointB.x+ this.offsetX, pointB.y + this.offsetY);
	}

}