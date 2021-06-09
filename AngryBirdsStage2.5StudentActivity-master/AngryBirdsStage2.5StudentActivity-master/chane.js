class Chane  {
    constructor(bodyA,bodyB){
var options={bodyA:bodyA,bodyB:bodyB,stiffness:0.05,lenght:120}
this.chane=Constraint.create(options)
World .add(world,this.chane)

    }
    display(){Line (this.chane.bodyA.position.x,this.chane.bodyA.position.y,this.chane.bodyB.position.x,this.chane.bodyB.position.y)}
    
    }
  