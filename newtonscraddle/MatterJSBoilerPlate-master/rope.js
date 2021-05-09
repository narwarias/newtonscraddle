class Rope{
    constructor(body1,point1){
        
        var options={
            bodyA:body1,
           
            pointB:point1
        }
        this.point1=point1;
        

        this.rope =Matter.Constraint.create(options);
        World .add(world,this.rope);
    }
display(){
    var point1 =this.rope.bodyA.position;
    var point2 =this.point1;

    strokeWeight(2);

    var Anchor1X =point1.x;
    var Anchor1Y =point1.y;

  var  Anchor2X=point2.x;
  var  Anchor2Y =point2.y;

    line (Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
}
}