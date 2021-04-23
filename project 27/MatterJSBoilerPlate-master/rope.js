class rope{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.2,
            length:150
           
        }
        this.rope = Constraint.create(options)
        World.add(world,this.rope);

        
        
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.pointB;
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}

        
       