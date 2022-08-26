const startButton = document.querySelector(".startButton")
const start = document.querySelector(".start")
const game = document.querySelector(".game")
const playAgain = document.querySelector(".againButton")
const final = document.querySelector(".final");
const board = document.getElementById("board");
const pieces = document.getElementById("pieces");

let startGame = false

var rows = 2
var columns = 3;

var currTile;
var otherTile;

var startingX, startingY, movingX, movingY;

  function touchstart(evt) {
    startingX = evt.touches[0].clientX
    startingY = evt.touches[0].clientY
    dragStart()
  }
  function touchmove(evt) {
    movingX = evt.touches[0].clientX
    movingY = evt.touches[0].clientY
    dragOver(evt)
  } 
  function touchend() {
    dragDrop()
    dragEnd()
}

MixingManyLanguagesP = [
    {number: 1, image: "./img/Mixing-Many-Languages_01.jpg"},
    {number: 2, image: "./img/Mixing-Many-Languages_02.jpg"},
    {number: 3, image: "./img/Mixing-Many-Languages_03.jpg"},
    {number: 4, image: "./img/Mixing-Many-Languages_04.jpg"},
    {number: 5, image: "./img/Mixing-Many-Languages_05.jpg"},
    {number: 6, image: "./img/Mixing-Many-Languages_06.jpg"}
]

InfusingLocalFlavoursP = [
    {number: 1, image: "./img/Infusing-Local-Flavours_01.jpg"},
    {number: 2, image: "./img/Infusing-Local-Flavours_02.jpg"},
    {number: 3, image: "./img/Infusing-Local-Flavours_03.jpg"},
    {number: 4, image: "./img/Infusing-Local-Flavours_04.jpg"},
    {number: 5, image: "./img/Infusing-Local-Flavours_05.jpg"},
    {number: 6, image: "./img/Infusing-Local-Flavours_06.jpg"}
]
RenewingTraditionP = [
    {number: 1, image: "./img/Renewing-Tradition_01.jpg"},
    {number: 2, image: "./img/Renewing-Tradition_02.jpg"},
    {number: 3, image: "./img/Renewing-Tradition_03.jpg"},
    {number: 4, image: "./img/Renewing-Tradition_04.jpg"},
    {number: 5, image: "./img/Renewing-Tradition_05.jpg"},
    {number: 6, image: "./img/Renewing-Tradition_06.jpg"}
]

startButton.addEventListener("click", () => {
    start.classList.add("hide")
    game.classList.remove("hide")
    startGame = true
    Spawn()
})

playAgain.addEventListener("click", () => {
    final.classList.add("hide")
    game.classList.remove("hide")
    startGame = true
    Spawn()
})

function Spawn(){
    let randomPuzzle = Math.floor(Math.random() * 3);
    let puzzlePieces

    console.log(randomPuzzle)
    if(randomPuzzle == 0){
        puzzlePieces = MixingManyLanguagesP
    }
    if(randomPuzzle == 1){
        puzzlePieces = InfusingLocalFlavoursP
    }
    if(randomPuzzle == 2){
        puzzlePieces = RenewingTraditionP
    }

    console.log(puzzlePieces)

    let i = -1
    //initialize the 3 x 2 board
    for(let r = 1; r < (rows + 1); r ++){
        for(let c = 1; c < (columns + 1); c++){
            let tile = document.createElement("img")
            i = i + 1
            tile.classList.add("guide")
            tile.setAttribute("data", puzzlePieces[i].number)
            tile.src = puzzlePieces[i].image

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
        pieces = [...puzzlePieces]
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
        tile.setAttribute("data", pieces[i].number)

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
    console.log("S")
    currTile = this; //this refers to image that was clicked for dragging
    console.log(currTile)
}

function dragOver(e){
    console.log("o")
    e.preventDefault();
}

function dragEnter(e){
    console.log("ent")
    e.preventDefault();
}

function dragLeave(){
    
}

function dragDrop(){
    console.log("D")
    otherTile = this; //this refers to image that is being dropped on
}

function dragEnd(){
    if(currTile.classList == null || otherTile.classList == null){
        return
    }
    console.log("c"+ currTile.classList)
    console.log("o" + otherTile.classList)
    if(currTile.classList == "guide" || currTile.src.includes("blank")){
        return
    }

    let currValue = currTile.getAttribute("data")
    let otherValue = otherTile.getAttribute("data")

    console.log("c" + currValue)
    console.log("o", otherValue)
    if(currValue == otherValue){
        otherTile.src = "./img/blank.png"
        otherTile.classList.remove("guide")
        otherTile.classList.add("done")
        let currImg = currTile.src
        let otherImg = otherTile.src
        currTile.src = otherImg;
        otherTile.src = currImg;

        let correct = document.querySelectorAll(".done")
        if(correct.length == 6){
            let delay = setTimeout(() => {
                startGame = false
                remove();
                final.classList.remove("hide")
                game.classList.add("hide")
            }, 1000);
            
        }
    }
    else{
        return
    }
    
}

function remove(){
    removeAllChildNodes(board)
    removeAllChildNodes(pieces)
  }

  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
