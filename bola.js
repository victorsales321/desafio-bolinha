class BOLA{
 constructor(x,y,r,cor){
 var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  };
    this.x=x;
    this.y=y;
    this.r=r;
    this.cor=cor;
    this.body=Bodies.circle(x,y,r,ball_options);
    World.add(world,this.body);
}
show(){
  ellipse(this.body.position.x,this.body.position.y,this.r);
  
}
}
function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}