let startGame = true

var rows = 2
var columns = 3;

var currTile;
var otherTile;

RenewingTraditionG = [
    {number: 1, image: "./img/Renewing TraditionG11.png"},
    {number: 2, image: "./img/Renewing TraditionG12.png"},
    {number: 3, image: "./img/Renewing TraditionG13.png"},
    {number: 4, image: "./img/Renewing TraditionG21.png"},
    {number: 5, image: "./img/Renewing TraditionG22.png"},
    {number: 6, image: "./img/Renewing TraditionG23.png"}
]

RenewingTraditionP = [
    {number: 1, image: "./img/Renewing TraditionP1.png"},
    {number: 2, image: "./img/Renewing TraditionP2.png"},
    {number: 3, image: "./img/Renewing TraditionP3.png"},
    {number: 4, image: "./img/Renewing TraditionP4.png"},
    {number: 5, image: "./img/Renewing TraditionP5.png"},
    {number: 6, image: "./img/Renewing TraditionP6.png"}
]

window.onload = function(){
    let i = -1
    //initialize the 3 x 2 board
    for(let r = 1; r < (rows + 1); r ++){
        for(let c = 1; c < (columns + 1); c++){
            let tile = document.createElement("img")
            i = i + 1
            tile.classList.add(RenewingTraditionG[i].number)
            tile.src = RenewingTraditionG[i].image

            //DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart)   //click on img to drag
            tile.addEventListener("dragover", dragOver)     //drag an img
            tile.addEventListener("dragenter", dragEnter)   // dragging an image into another one
            tile.addEventListener("dragleave", dragLeave)   //dragging an image away from another one
            tile.addEventListener("drop", dragDrop)         //drop an image onto another
            tile.addEventListener("dragend", dragEnd)       //after youcomplete dragDrop
            document.getElementById("pieces").append(tile)
            
            document.getElementById("board").append(tile);
        }
    }

    //pieces
    let pieces = [];
    for(let i = 1; i <= rows*columns; i++){
        pieces = [...RenewingTraditionP]
    }

    pieces.reverse();
    for (let i=0; i < pieces.length; i++){
        let j = Math.floor(Math.random() * pieces.length)

        //swap
        let tmp = pieces[i]
        pieces[i] = pieces[j]
        pieces[j] = tmp
    }

    for (let i = 0; i < pieces.length; i ++){
        let tile = document.createElement("img")
        tile.src = pieces[i].image
        tile.classList.add(pieces[i].number)

        //DRAG FUNCTIONALITY
        tile.addEventListener("dragstart", dragStart)   //click on img to drag
        tile.addEventListener("dragover", dragOver)     //drag an img
        tile.addEventListener("dragenter", dragEnter)   // dragging an image into another one
        tile.addEventListener("dragleave", dragLeave)   //dragging an image away from another one
        tile.addEventListener("drop", dragDrop)         //drop an image onto another
        tile.addEventListener("dragend", dragEnd)       //after youcomplete dragDrop
        document.getElementById("pieces").append(tile)
    }
}

//DRAG TILES
function dragStart(){
    currTile = this; //this refers to image that was clicked for dragging
}

function dragOver(e){
    e.preventDefault();
}

function dragEnter(e){
    e.preventDefault();
}

function dragLeave(){
    
}

function dragDrop(){
    otherTile = this; //this refers to image that is being dropped on
}

function dragEnd(){
    console.log(currTile.classList)
    console.log(otherTile.classList)
    if(currTile.src.includes("G") || currTile.src.includes("blank")){
        return
    }

    let currValue = currTile.getAttribute("Class")
    let otherValue = otherTile.getAttribute("Class")

    if(currValue == otherValue){
        otherTile.src = "./img/blank.png"
        otherTile.classList.remove(otherValue)
        otherTile.classList.add("done")
        let currImg = currTile.src
        let otherImg = otherTile.src
        currTile.src = otherImg;
        otherTile.src = currImg;
    }
    else{
        return
    }
    
}

function CheckDone(){
    if(startGame == true){
        let correct = document.querySelectorAll(".done")

        console.log(correct.length)
        if(correct.length == 6){
            startGame = false
        }
    }
}

setInterval(CheckDone, 1)