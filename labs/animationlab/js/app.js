
TweenMax.from('.title', 1, {x: -200});


let gridItems = document.getElementsByClassName("gridItem");
for(let i = 0; i < gridItems.length; i++){
    TweenLite.from(gridItems[i], 
        {
            // duration: (i+1) * .4, x:-100, alpha:0}
            duration: .6, x:-100, alpha:0, delay: i *.2
        }
        );
    
}
// remove functions
function remove0(){
    TweenLite.to("#gridItem0", 0.4, {alpha:0})
}
function remove1(){
    TweenLite.to("#gridItem1", 0.4, {x: -1500})
}
function remove2(){
    TweenLite.to("#gridItem2", 0.5, {y: -1500})
}
function remove3(){
    TweenLite.to("#gridItem3", 0.4, {x: -1500, y:-1500})
}
function remove4(){
    TweenLite.to("#gridItem4", 0.4, {x: 1500, y:-1500})
}
function remove5(){
    TweenLite.to("#gridItem5", 5, {x: -1600, rotation: -560})
}
// hover over functions
function hover0(){
    TweenMax.to('#gridItem0', .2, {scale: 1.2});
}
function hover1(){
    TweenMax.to('#gridItem1', .2, {scale: 1.2});
}
function hover2(){
    TweenMax.to('#gridItem2', .2, {scale: 1.2});
}
function hover3(){
    TweenMax.to('#gridItem3', .2, {scale: 1.2});
}
function hover4(){
    TweenMax.to('#gridItem4', .2, {scale: 1.2});
}
function hover5(){
    TweenMax.to('#gridItem5', .2, {scale: 1.2});
}
// hover out functions
function hoverOut0(){
    TweenMax.to('#gridItem0', .2, {scale: 1.0});
}
function hoverOut1(){
    TweenMax.to('#gridItem1', .2, {scale: 1.0});
}
function hoverOut2(){
    TweenMax.to('#gridItem2', .2, {scale: 1.0});
}
function hoverOut3(){
    TweenMax.to('#gridItem3', .2, {scale: 1.0});
}
function hoverOut4(){
    TweenMax.to('#gridItem4', .2, {scale: 1.0});
}
function hoverOut5(){
    TweenMax.to('#gridItem5', .2, {scale: 1.0});
}
