

//need a function that when player x has went change to player o and when o has went go back to x
// loop turn 1 turn++
// a turn value that is when (turn % 2 == 0) player = 2
// try making a svg for each square that has an id that when clicked on draws text for which ever turn its on

// class Board [0,1,2] board might need to be an array

//turn 1 = xplayer
class xPlayer {
    constructor(){
        this.xPlayerfill = "fill='#000000'";
        this.xPlayerFontSize = "font-size='200'";
        this.xPlayerFontFamily = "font-family='montserrat'";
        this.xPlayerX = "x='30'";
        this.xPlayerY = "y='145'";
    }
    render(){
        return `
        <svg><text ${this.xPlayerfill} ${this.xPlayerFontSize} ${this.xPlayerFontFamily} ${this.xPlayerX} ${this.xPlayerY}>x</text></svg>
        `
    }
}
//turn 2 = oplayer
class oPlayer {
    constructor(){
        this.oPlayerfill = "fill='#000000'";
        this.oPlayerFontSize = "font-size='200'";
        this.oPlayerFontFamily = "font-family='montserrat'";
        this.oPlayerX = "";
        this.oPlayerY = "";
    }
}
let boxOne = document.getElementById("boxOne");

let drawPlayerX = new xPlayer;

boxOne.onclick = function(){
    console.log("click")
    let drawPlayerX = new xPlayer;
    boxOne.innerHTML = drawPlayerX.render();
}
