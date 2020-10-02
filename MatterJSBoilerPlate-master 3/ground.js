class Ground {

    constructor(x,y,width,height){
    
    var options={
    
    isStatic:true,
    
    }
    this.x=x
    this.y=y
    this.width=1500
    this.height=20
    this.body= Bodies.rectangle(this.x,this.y,this.width,this.height,options)
    World.add(world,this.body)
    }
    
    display(){
    
     
        var groundPos=this.body.position  
        push()
        translate(groundPos.x,groundPos.y)
    rectMode(CENTER)
    fill('red')
    rect(0,0,this.width,this.height)
    
    
        pop()
    
    
    }
    
    }