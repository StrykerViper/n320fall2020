
//draw Drops
class drops{
    constructor(dx,dy,dw,dh,){
        this.x = dx + Math.random() * 700;
        this.y = dy;
        this.w = dw;
        this.h = dh;
        this.dspeed = 2 + Math.random() * 5;
    }
    //make drops fall
    fall(){
        this.y = this.y + this.dspeed;
        fill(250);
        
        rect(this.x , this.y , this.w, this.h);

    //counts hits and resets rain
        if(this.y >= 430){
            hit++;
            this.y = Math.random() * -20;
            console.log(hit);
            //changes color perecntage of puddle
            if(hit % 10 === 0){
                opacity = opacity + 20;
            }
            
        }
        
    }
    
}
var hit = 1;
var drop = []

drop[0] = new drops(0,0,5,20);
drop[1] = new drops(0,0,5,20);
drop[2] = new drops(0,0,5,20);
drop[3] = new drops(0,0,5,20);
drop[4] = new drops(0,0,5,20);
drop[5] = new drops(100,0,5,20);
drop[6] = new drops(100,0,5,20);
drop[7] = new drops(100,0,5,20);

// console.log(drop);

//starting opacity
var opacity = 20

//create canvas
function setup(){
    createCanvas(800, 500);
    
}

function drawPuddle(){
    let c = color(0, 100, 255, opacity);
    fill(c);    
    rect(0,450,800,500);
}
function draw(){
    
    background(0);
    drop[0].fall();
    drop[1].fall();
    drop[2].fall();
    drop[3].fall();
    drop[4].fall();
    drop[5].fall();
    drop[6].fall();
    drop[7].fall();
  
    drawPuddle();
}
