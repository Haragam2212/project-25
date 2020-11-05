class Dustbin extends BaseClass{
    constructor(x,y,bottom,side1,side2){
        bottom = Bodies.rectangle(200,20,200,20);
	
        World.add(world, bottom);
    
        side1 = Bodies.rectangle(20,100,150,20);
        
        World.add(world, side1);
    
        side2 = Bodies.rectangle(20,100,250,20);
        
        World.add(world, side2);
    
      
    }   
   display(){
   super.display();
   
   
   
   }
   
   
   
   
   
   
}