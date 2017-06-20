//Let's build some functions in P5.Js

// Functions are like actions they make stuff happen

//defined a setup function
function setup(){
    //call the createCanvas and background functions
    //Numbers Data type that is a number
    createCanvas(800,600);
    
} 
//Variables in JS are created using the var keyword
var position = 100
var speed = 3

//goal is to animate the tron bike
function draw(){
    clear()
    background(150);
    //String data type that is a series of characters
    fill(255);
    rect (position,100,150,60,20);
    fill ("dodgerblue");
    ellipse (position,150,75,75);
    ellipse (position + 150,150,75,75);
    
    position = position + speed
    console.log(position)
    
    //conditionals  allows program to make decisions 
    if (position > 800) {
        speed = speed * -1
        
    }
    if (position < 0) {
        speed = speed *-1
    }
    fill(0)
    textSize(40)
    text("position: " + position, 30 , 30 )
    textSize(40)
    text("speed: " + speed, 30, 80)
}



