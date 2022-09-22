class Ground 
{
  constructor(x, y, w, h,cor) 
  {
    let options = {
      isStatic:true
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    this.cor=cor;
    World.add(world, this.body);
  }
  
  show(){
   Matter.Body.rotate(this.body,angle);
   push();
   translate(this.body.position.x,this.body.position.y)
   fill(this.cor)
   rotate(angle);
   rect(0,0,this.w,this.h);
   pop();
   angle+=1
  
  }
   
}
