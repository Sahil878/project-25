class BaseClass {
    constructor(x,y,width,height,radius,angle){
     var options = {
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
     }

        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width
        this.height=height

        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position
        var angle = this.body.angle

        push();
       translate(pos.x,pos.y)
       rotate(angle)
       pop();
    }

}