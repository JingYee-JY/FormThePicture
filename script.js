const startButton = document.querySelector(".startButton")
const start = document.querySelector(".start")
const game = document.querySelector(".game")
const playAgain = document.querySelector(".againButton")
const final = document.querySelector(".final");
const board = document.getElementById("board");
const pieces = document.getElementById("pieces");
const guide1 = document.querySelector(".guide1")
const guide2 = document.querySelector(".guide2")
const guide3 = document.querySelector(".guide3")
const guide4 = document.querySelector(".guide4")
const guide5 = document.querySelector(".guide5")
const guide6 = document.querySelector(".guide6")
const puzzle1 = document.querySelector(".puzzle1")
const puzzle2 = document.querySelector(".puzzle2")
const puzzle3 = document.querySelector(".puzzle3")
const puzzle4 = document.querySelector(".puzzle4")
const puzzle5 = document.querySelector(".puzzle5")
const puzzle6 = document.querySelector(".puzzle6")

let startGame = false
let puzzleSelected;
let puzzleNumber;
let p1,p2,p3,p4,p5,p6

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
    dragDrop()
  } 
  function touchend() {
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

puzzle1.addEventListener("click", () => {
    if(p1 == false){
        if(puzzleSelected == puzzle1){
            puzzleSelected = null
            puzzleNumber = null
            puzzle1.style.border = ""
            return
        }
        else{
            if(puzzleSelected != null){
                puzzleSelected.style.border = ""
            }
            puzzleSelected = puzzle1
            puzzleNumber = puzzle1.getAttribute("data")
            puzzle1.style.border = "solid 5px black"
        }
    }
    else{
        return
    }
})
puzzle2.addEventListener("click", () => {
    if(p2 == false){
        if(puzzleSelected == puzzle2){
            puzzleSelected = null
            puzzleNumber = null
            puzzle2.style.border = ""
            return
        }
        else{
            if(puzzleSelected != null){
                puzzleSelected.style.border = ""
            }
            puzzleSelected = puzzle2
            puzzleNumber = puzzle2.getAttribute("data")
            puzzle2.style.border = "solid 5px black"
        }
    }
    else{
        return
    }
})

puzzle3.addEventListener("click", () => {
    if(p3 == false){
        if(puzzleSelected == puzzle3){
            puzzleSelected = null
            puzzleNumber = null
            puzzle3.style.border = ""
            return
        }
        else{
            if(puzzleSelected != null){
                puzzleSelected.style.border = ""
            }
            puzzleSelected = puzzle3
            puzzleNumber = puzzle3.getAttribute("data")
            puzzle3.style.border = "solid 5px black"
        }
    }
    else{
        return
    }
})

puzzle4.addEventListener("click", () => {
    if(p4 == false){
        if(puzzleSelected == puzzle4){
            puzzleSelected = null
            puzzleNumber = null
            puzzle4.style.border = ""
            return
        }
        else{
            if(puzzleSelected != null){
                puzzleSelected.style.border = ""
            }
            puzzleSelected = puzzle4
            puzzleNumber = puzzle4.getAttribute("data")
            puzzle4.style.border = "solid 5px black"
        }
    }
    else{
        return
    }
})

puzzle5.addEventListener("click", () => {
    if(p5 == false){
        if(puzzleSelected == puzzle5){
            puzzleSelected = null
            puzzleNumber = null
            puzzle5.style.border = ""
            return
        }
        else{
            if(puzzleSelected != null){
                puzzleSelected.style.border = ""
            }
            puzzleSelected = puzzle5
            puzzleNumber = puzzle5.getAttribute("data")
            puzzle5.style.border = "solid 5px black"
        }
    }
    else{
        return
    }
})
puzzle6.addEventListener("click", () => {
    if(p6 == false){
        if(puzzleSelected == puzzle6){
            puzzleSelected = null
            puzzleNumber = null
            puzzle6.style.border = ""
            return
        }
        else{
            if(puzzleSelected != null){
                puzzleSelected.style.border = ""
            }
            puzzleSelected = puzzle6
            puzzleNumber = puzzle6.getAttribute("data")
            puzzle6.style.border = "solid 5px black"
        }
    }
    else{
        return
    }
})

guide1.addEventListener("click", () => {
    if(puzzleNumber == 1){
        puzzleSelected.classList.add("right")
        puzzleSelected.style.border = ""
        guide1.style.opacity = "1";
        guide1.classList.add("done")
        Check()
    }
    puzzleSelected.style.border = ""
    puzzleSelected = null
})

guide2.addEventListener("click", () => {
    if(puzzleNumber == 2){
        puzzleSelected.classList.add("right")
        puzzleSelected.style.border = ""
        guide2.style.opacity = "1";
        guide2.classList.add("done")
        Check()
    }
    puzzleSelected.style.border = ""
    puzzleSelected = null
})

guide3.addEventListener("click", () => {
    if(puzzleNumber == 3){
        puzzleSelected.classList.add("right")
        puzzleSelected.style.border = ""
        guide3.style.opacity = "1";
        guide3.classList.add("done")
        Check()
    }
    puzzleSelected.style.border = ""
    puzzleSelected = null
})

guide4.addEventListener("click", () => {
    if(puzzleNumber == 4){
        puzzleSelected.classList.add("right")
        puzzleSelected.style.border = ""
        guide4.style.opacity = "1";
        guide4.classList.add("done")
        Check()
    }
    puzzleSelected.style.border = ""
    puzzleSelected = null
})
guide5.addEventListener("click", () => {
    if(puzzleNumber == 5){
        puzzleSelected.classList.add("right")
        puzzleSelected.style.border = ""
        guide5.style.opacity = "1";
        guide5.classList.add("done")
        Check()
    }
    puzzleSelected.style.border = ""
    puzzleSelected = null
})

guide6.addEventListener("click", () => {
    if(puzzleNumber == 6){
        puzzleSelected.classList.add("right")
        puzzleSelected.style.border = ""
        guide6.style.opacity = "1";
        guide6.classList.add("done")
        Check()
    }
    puzzleSelected.style.border = ""
    puzzleSelected = null
})




startButton.addEventListener("click", () => {
    start.classList.add("hide")
    game.classList.remove("hide")
    startGame = true
    puzzleSelected = null
    p1 = false
    p2 = false
    p3 = false
    p4 = false
    p5 = false
    p6 = false
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
            i = i + 1

            let current = ".guide" + (i + 1)
            
            let tile = document.querySelector(current)
            tile.src = puzzlePieces[i].image
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
        let current = ".puzzle" + (i + 1)
        let tile = document.querySelector(current)
        tile.src = pieces[i].image
        tile.setAttribute("data", pieces[i].number)
    }
}

function Check(){
    if(puzzleSelected == puzzle1){
        p1 = true
    }
    if(puzzleSelected == puzzle2){
        p2 = true
    }
    if(puzzleSelected == puzzle3){
        p3 = true
    }
    if(puzzleSelected == puzzle4){
        p4 = true
    }
    if(puzzleSelected == puzzle5){
        p5 = true
    }
    if(puzzleSelected == puzzle6){
        p6 = true
    }
    let correct = document.querySelectorAll(".done")
        if(correct.length == 6){
            let delay = setTimeout(() => {
                startGame = false
                remove()
                final.classList.remove("hide")
                game.classList.add("hide")
            }, 1000);
            
        }
}

//DRAG TILES
/*function dragStart(){
    currTile = this; //this refers to image that was clicked for dragging
    console.log(currTile)
}

function dragOver(e){
    console.log("o")
    e.preventDefault();
}

function dragEnter(e){
    e.preventDefault();
}

function dragLeave(){
    
}

function dragDrop(){
    console.log("D")
    otherTile = this; //this refers to image that is being dropped on
    console.log(currTile)
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
    
}*/

function remove(){
    let right = document.querySelectorAll(".right")
    let done = document.querySelectorAll(".done")

    right.forEach((item) =>{
        item.classList.remove("right")
    })
    done.forEach((item) =>{
        item.classList.remove("done")
        item.style.opacity = "0.3";
    })
  }

/*function remove(){
    removeAllChildNodes(board)
    removeAllChildNodes(pieces)
  }

  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}*/
