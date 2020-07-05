//get all cells in each row
let cells = document.querySelectorAll('.row > div');
let result = document.getElementById('result');
let currentPlayer="X";
let gameState = ["", "", "", "", "", "", "", "", ""];
//some Messages we will display to the user
const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;

//add event on each cell

cells.forEach((cell,i)=>cell.addEventListener('click',function cellClicked(){
    if(result.textContent!==""){
        //alert("Hello");
        restGame();
        
        return;
    }
    if(currentPlayer==="X"){
        event.target.textContent=currentPlayer;
        gameState[i]=currentPlayer;
    }
    else{
        event.target.textContent=currentPlayer;
        gameState[i]=currentPlayer;
    }
    handleResultValidation();
}));

//winning Conditions
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
//Helper Function
function handleResultValidation(){
    let roundWon=false;
    for(let i=0;i<8;i++){
        const winCondition=winningConditions[i];
        let firstCell  = gameState[winCondition[0]];
        let secondCell = gameState[winCondition[1]];
        let thirdCell  = gameState[winCondition[2]];
        if(firstCell === '' || secondCell === '' || thirdCell === '' ){
            continue;
        }
        if(firstCell === secondCell && secondCell === thirdCell){
            roundWon=true;
            break;
        }
    }
    if(roundWon){
        result.textContent = winningMessage();
        return;
    }
    let roundDrow = !gameState.includes("");
    if(roundDrow){
        result.textContent = drawMessage();
        return;
    }
    changePlayer();   
}
function changePlayer(){
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}
function restGame(){
   
        gameState = ["", "", "", "", "", "", "", "", ""];
        cells.forEach(cell=>cell.textContent="");
        result.textContent="";
}