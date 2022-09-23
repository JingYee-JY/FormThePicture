const startButton = document.querySelector(".startButton")
const start = document.querySelector(".start")
const game = document.querySelector(".game")
const playAgain = document.querySelector(".againButton")
const final = document.querySelector(".final");
const board = document.getElementById("board");
const piecesCon = document.getElementById("pieces");
const round = document.querySelector(".round")

let rows;
let columns;
let endpuzzle;

var checkP1
var checkP2
var checkP3

let rounds;
let totalRound;

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

document.addEventListener('dblclick', function(event) {
    event.preventDefault();
    }, { passive: false });


startButton.addEventListener("click", () => {
    start.classList.add("hide")
    game.classList.remove("hide")
    rows = 2
    columns =  3
    puzzle = 6
    rounds = 0
    endpuzzle = 2
    totalRound = 3
    puzzleSelected = null
    puzzleNumber = null
    Spawn()
})

playAgain.addEventListener("click", () => {
    final.classList.add("hide")
    game.classList.remove("hide")
    puzzleSelected = null
    puzzleNumber = null
    rounds = 0
    Spawn()
})

function Spawn(){

    rounds += 1;

    round.innerHTML = `<p>${rounds}/${totalRound}</p>`

    if(rounds == 1){
        puzzlePieces = MixingManyLanguagesP
    }
    if(rounds == 2){
        puzzlePieces = InfusingLocalFlavoursP
    }
    if(rounds == 3){
        puzzlePieces = RenewingTraditionP
    }

    let i = -1
    //initialize the board
    for(let r = 1; r < (rows + 1); r ++){
        for(let c = 1; c < (columns + 1); c++){
            i = i + 1

            let currentClass = "guide" + (i + 1)
            
            let tile = document.createElement("img")
            tile.src = puzzlePieces[i].image
            tile.classList.add(currentClass)
            tile.setAttribute("data", puzzlePieces[i].number)

            board.append(tile)
            
            let asignButton = document.querySelector(`.${currentClass}`)
            let number = tile.getAttribute("data")
            
            asignButton.addEventListener("click", () => {
                if(puzzleNumber == null & !asignButton.classList.contains("question")) {return}
                if(puzzleNumber == number & asignButton.classList.contains("question")){
                    puzzleSelected.classList.add("right")
                    asignButton.style.opacity = "1";
                    asignButton.classList.add("done")
                    Check()
                }
                puzzleSelected.style.border = ""
                puzzleSelected = null
                puzzleNumber = null
            })
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

    for (let i = 0; i < 3; i ++){
        let currentClass = "puzzle" + (i + 1)

        let tile = document.createElement("img")
        tile.src = pieces[i].image
        tile.classList.add(currentClass)
        tile.setAttribute("data", pieces[i].number)


        let currentCheck = "checkP" + (i + 1)

        window[currentCheck] = pieces[i].number

        piecesCon.append(tile)

        let asignButton = document.querySelector(`.${currentClass}`)

        asignButton.addEventListener("click", () => {
            let puzzleNo = tile.getAttribute("data")
                if(puzzleSelected == currentClass){
                    puzzleSelected = null
                    puzzleNumber = null
                    asignButton.style.border = ""
                    return
                }
                else{
                    if(puzzleSelected != null){
                        puzzleSelected.style.border = ""
                    }
                    puzzleSelected = asignButton
                    puzzleNumber = puzzleNo
                    asignButton.style.border = "solid 5px black"
                }
        })
    }

    for(let o = 0; o < endpuzzle; o++){
        let value = (Math.floor(Math.random() * puzzlePieces.length) + 1)
        let puzzleValue = (Math.floor(Math.random() * 3) + 1)

        let questionPuzzle = "guide" + value
        let answerPuzzle = "puzzle" + puzzleValue
        
        let questionButton = document.querySelector(`.${questionPuzzle}`)
        let answerButton = document.querySelector(`.${answerPuzzle}`)
        
        let getQuestionData = questionButton.getAttribute("data")
        console.log(questionButton,o)
        console.log(checkP1, checkP2,checkP3)
        if(questionButton.classList.contains("question") || answerButton.classList.contains("change")){
            o--
            console.log("T")
        }
        if(!questionButton.classList.contains("question")  && !answerButton.classList.contains("change")){
            questionButton.classList.add("question")
            if(checkP1 == getQuestionData){
                let btn = document.querySelector(".puzzle1")
                btn.classList.add("change")
                console.log(btn, "1")
            }
            if(checkP2 == getQuestionData){
                let btn = document.querySelector(".puzzle2")
                btn.classList.add("change")
                console.log(btn, "2")
            }
            if(checkP3 == getQuestionData){
                let btn = document.querySelector(".puzzle3")
                btn.classList.add("change")
                console.log(btn, "3")
            }
            if(checkP1 != getQuestionData && checkP2 != getQuestionData && checkP3 != getQuestionData){
            answerButton.classList.add("change")
            let image = questionButton.src

            answerButton.src = image
            if(puzzleValue == 1){
                checkP1 = parseInt(getQuestionData)
            }
            if(puzzleValue == 2){
                checkP2 = parseInt(getQuestionData)
            }
            if(puzzleValue == 3){
                checkP3 = parseInt(getQuestionData)
            }
            answerButton.setAttribute("data", getQuestionData)
            console.log(answerButton, "c")
           }
        }
    }

}

function Check(){
    let correct = document.querySelectorAll(".done")
        if(correct.length == endpuzzle){
            if(rounds == totalRound){
                let delay = setTimeout(() => {
                    remove()
                    final.classList.remove("hide")
                    game.classList.add("hide")
                }, 500);
                return
            }
            else{
                let delay = setTimeout(() => {
                    remove()
                    Spawn()
                }, 500);
            }
        }
}

function remove(){
    removeAllChildNodes(board)
    removeAllChildNodes(pieces)
    board.classList.remove("boardP4")
    piecesCon.classList.remove("boardP4")
    board.classList.remove("boardP6")
    piecesCon.classList.remove("boardP6")
    board.classList.remove("boardP9")
    piecesCon.classList.remove("boardP9")
  }

  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}