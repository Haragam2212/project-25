class Paper extends BaseClass{
 constructor(x,y,radius){
    super(x,y,radius,options);
    this.body=Bodies.circle(x,y,radius,options);

    World.add(world,this.body)
 }   
display(){
super.display();



}






}