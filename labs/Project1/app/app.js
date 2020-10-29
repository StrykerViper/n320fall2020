//click listenrs for the turn count
document.getElementById("boxOne").addEventListener("click", clickTurn);
document.getElementById("topMiddle").addEventListener("click", clickTurn);
document.getElementById("topRight").addEventListener("click", clickTurn);
document.getElementById("middleLeft").addEventListener("click", clickTurn);
document.getElementById("middleMiddle").addEventListener("click", clickTurn);
document.getElementById("middleRight").addEventListener("click", clickTurn);
document.getElementById("bottomLeft").addEventListener("click", clickTurn);
document.getElementById("bottomMiddle").addEventListener("click", clickTurn);
document.getElementById("bottomRight").addEventListener("click", clickTurn);

//turn 1 = xplayer
class xPlayer {
    constructor() {
        this.xPlayerfill = "fill='#000000'";
        this.xPlayerFontSize = "font-size='200'";
        this.xPlayerFontFamily = "font-family='montserrat'";
        this.xPlayerX = "x='30'";
        this.xPlayerY = "y='145'";
    }
    render() {
        return `
        <svg><text ${this.xPlayerfill} ${this.xPlayerFontSize} ${this.xPlayerFontFamily} ${this.xPlayerX} ${this.xPlayerY}>x</text></svg>
        `
    }
}
//turn 2 = oplayer
class oPlayer {
    constructor() {
        this.oPlayerfill = "fill='#000000'";
        this.oPlayerFontSize = "font-size='200'";
        this.oPlayerFontFamily = "font-family='montserrat'";
        this.oPlayerX = "x='30'";
        this.oPlayerY = "y='145'";
    }
    render() {
        return `
        <svg><text ${this.oPlayerfill} ${this.oPlayerFontSize} ${this.oPlayerFontFamily} ${this.oPlayerX} ${this.oPlayerY}>o</text></svg>
        `
    }
}
//vairbles for each spot on board
let boxOne = document.getElementById("boxOne");
let topMiddle = document.getElementById("topMiddle");
let topLeft = document.getElementById("topLeft");
let middleLeft = document.getElementById("middleLeft");
let middleMiddle = document.getElementById("middleMiddle");
let middleRight = document.getElementById("middleRight");
let bottomLeft = document.getElementById("bottomLeft");
let bottomMiddle = document.getElementById("bottomMiddle");
let bottomRight = document.getElementById("bottomRight");
//turn count
let turnCount = 0;
//variable creates new player
let drawPlayerX = new xPlayer;
let drawPlayerO = new oPlayer;
// Needed to stop from clicking on each box twice
let clicked1 = false;
let clicked2 = false;
let clicked3 = false;
let clicked4 = false;
let clicked5 = false;
let clicked6 = false;
let clicked7 = false;
let clicked8 = false;
let clicked9 = false;

// turn counter
function clickTurn() {
    turnCount++
    // if click turns to 10 reset game
    if (turnCount === 10) {
        window.location.reload();
        alert("9 turns met");
    }
}
//onclick functions
boxOne.onclick = function () {
    //if clicked is false then draw once drawn change clicked to true
    if (!clicked1) {
        clicked1 = true;
        console.log(turnCount)
        // draw x player or y player based on turn count
        if (turnCount % 2 == 0) {
            let drawPlayerX = new xPlayer;
            boxOne.innerHTML = drawPlayerX.render();
        } else {
            let drawPlayerO = new oPlayer;
            boxOne.innerHTML = drawPlayerO.render();
        }
    }
    console.log(clicked1 + " boxOne Clicked");
}
topMiddle.onclick = function () {
    // console.log("click")

    if (!clicked2) {
        console.log(turnCount)
        clicked2 = true;
        if (turnCount % 2 == 0) {
            let drawPlayerX = new xPlayer;
            topMiddle.innerHTML = drawPlayerX.render();
        } else {
            let drawPlayerO = new oPlayer;
            topMiddle.innerHTML = drawPlayerO.render();
        }
    }
    console.log(clicked2 + " topMiddle Clicked");
}
topRight.onclick = function () {
    // console.log("click")
    if (!clicked3) {
        console.log(turnCount)
        clicked3 = true;
        if (turnCount % 2 == 0) {
            let drawPlayerX = new xPlayer;
            topRight.innerHTML = drawPlayerX.render();
        } else {
            let drawPlayerO = new oPlayer;
            topRight.innerHTML = drawPlayerO.render();
        }
    }
    console.log(clicked3 + " topright Clicked");
}
middleLeft.onclick = function () {
    // console.log("click")
    if (!clicked4) {
        console.log(turnCount)
        clicked4 = true;
        if (turnCount % 2 == 0) {
            let drawPlayerX = new xPlayer;
            middleLeft.innerHTML = drawPlayerX.render();
        } else {
            let drawPlayerO = new oPlayer;
            middleLeft.innerHTML = drawPlayerO.render();
        }
    }
    console.log(clicked4 + " middleLeft Clicked");
}
middleMiddle.onclick = function () {
    // console.log("click")
    if (!clicked5) {
        clicked5 = true;
        console.log(turnCount)
        if (turnCount % 2 == 0) {
            let drawPlayerX = new xPlayer;
            middleMiddle.innerHTML = drawPlayerX.render();
        } else {
            let drawPlayerO = new oPlayer;
            middleMiddle.innerHTML = drawPlayerO.render();
        }
    }
    console.log(clicked5 + " middleMiddle Clicked");
}
middleRight.onclick = function () {
    // console.log("click")
    if (!clicked6) {
        clicked6 = true;
        console.log(turnCount)
        if (turnCount % 2 == 0) {
            let drawPlayerX = new xPlayer;
            middleRight.innerHTML = drawPlayerX.render();
        } else {
            let drawPlayerO = new oPlayer;
            middleRight.innerHTML = drawPlayerO.render();
        }
    }
    console.log(clicked6 + " middleRight Clicked");
}
bottomLeft.onclick = function () {
    // console.log("click")
    if (!clicked7) {
        clicked7 = true;
        console.log(turnCount)
        if (turnCount % 2 == 0) {
            let drawPlayerX = new xPlayer;
            bottomLeft.innerHTML = drawPlayerX.render();
        } else {
            let drawPlayerO = new oPlayer;
            bottomLeft.innerHTML = drawPlayerO.render();
        }
    }
    console.log(clicked7 + " bottomLeft Clicked");
}
bottomMiddle.onclick = function () {
    // console.log("click")
    if (!clicked8) {
        clicked8 = true;
        console.log(turnCount)
        if (turnCount % 2 == 0) {
            let drawPlayerX = new xPlayer;
            bottomMiddle.innerHTML = drawPlayerX.render();
        } else {
            let drawPlayerO = new oPlayer;
            bottomMiddle.innerHTML = drawPlayerO.render();
        }
    }
    console.log(clicked8 + " bottomMiddle Clicked");
}
bottomRight.onclick = function () {
    // console.log("click")
    if (!clicked9) {
        clicked9 = true;
        console.log(turnCount)
        if (turnCount % 2 == 0) {
            let drawPlayerX = new xPlayer;
            bottomRight.innerHTML = drawPlayerX.render();
        } else {
            let drawPlayerO = new oPlayer;
            bottomRight.innerHTML = drawPlayerO.render();
        }
    }
    console.log(clicked9 + " bottomRight Clicked");
}


