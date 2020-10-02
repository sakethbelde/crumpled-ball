class Dustbin{

constructor(x,y){
var options={

isStatic:true

}
this.x=x
this.y=y
this.height=100
this.width=20
this.thickness=20
this.angle=0
this.bottom= Bodies.rectangle(this.x,this.y,this.width,this.height,this.thickness,{isStatic:true})
this.left= Bodies.rectangle(this.x,this.y,this.width,this.height,this.thickness,{isStatic:true})
this.right= Bodies.rectangle(this.x,this.y,this.width,this.height,this.thickness,{isStatic:true})
Matter.Body.setAngle(this.left,this.angle)
Matter.Body.setAngle(this.right,this.angle)
World.add(world,this.left)
World.add(world,this.right)
World.add(world,this.bottom)
}
display(){

var bottompos=this.bottom.position
var leftpos=this.left.position
var rightpos=this.right.position
push()
    
bottompos.x=975
bottompos.y=660
translate(bottompos.x,bottompos.y)
rectMode(CENTER)
angleMode(RADIANS)
fill('blue')
rotate(this.angle)
rect(0,0,150,20)
    pop()
    
    
    push()
    
    leftpos.x= 900
    leftpos.y=610
    translate(leftpos.x,leftpos.y)
rectMode(CENTER)
angleMode(RADIANS)
fill('blue')
rotate(-1*this.angle)
rect(0,0,this.thickness,this.height)
    pop()
    
    
    push()
    
    rightpos.x=1050
    rightpos.y=610
    translate(rightpos.x,rightpos.y)
rectMode(CENTER)
angleMode(RADIANS)
fill('blue')
rotate(this.angle)
rect(0,0,this.thickness,this.height)
    pop()

}
}



