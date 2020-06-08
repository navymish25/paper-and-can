class Paper {
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.paper=Matter.Bodies.circle(200,370,70,options);
        this.radius = 30;

        World.add(world,this.paper);
        
    }
    display(){
        var pos = this.paper.position;
        ellipseMode(CENTER);
        fill("teal");
        circle(200,370,this.radius);
         }
    
}