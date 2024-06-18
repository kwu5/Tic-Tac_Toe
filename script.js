
//Algorithm
let rows;
let cols;
let diagonal=0 , antiDiagonal =0;

const setUp= (size) =>{
    rows = new Array(size).fill(0);
    cols = new Array(size).fill(0);
    // console.log(rows.length);
    // console.log(cols.length);
}

//Return a player (1,-1) who wins; if no one wins, return 0;
const move = (gridId, player)=> {
    let row = parseInt(gridId.charAt(0));
    let col = parseInt(gridId.charAt(1));
    let size = 3;
    console.log(`move: ${row} ${col} ${player} ${size}`)

    const n= size;
    const currentPlayer = (parseInt(player) == 1)? 1: -1;
    

    rows[row] += currentPlayer;
    cols[col] += currentPlayer;
    if(row == col){
        diagonal += currentPlayer;
    }
    if((row+col) == (n-1)){
        antiDiagonal+= currentPlayer;
    }
    // console.log( `${currentPlayer}: rows[${row}] = ${rows[row]}; cols[${col}] = ${cols[col]}; diagonal: ${diagonal}; Antidiagonal: ${antiDiagonal}`)
    if(Math.abs(rows[row])== n || Math.abs(cols[col])==n || Math.abs(diagonal)==n || Math.abs(antiDiagonal)==n){
        return player;
    }
    return 0;
}


//-----------------------------------

// let noWinner = true;
// const size = parseInt(prompt('Enter the size','2'));
// setUp(size);
// let player = 1;
// while(noWinner){
//     const row_input = parseInt(prompt('Enter the row','0'));
//     const col_input = parseInt(prompt('Enter the col','0'));
    
//     const result = move(row_input, col_input, player, size);
//     // console.log(`${row_input} ${col_input} ${player}` );
//     if(result == 1){
//         alert("player 1 wins");
//         noWinner = false;
//     }else if(result == -1){
//         alert("player 2 wins");
//         noWinner = false;
//     }else{
//         player = -player;
//     }
// }


//Create gameBoard
const gameBoard = document.querySelector(".gameBoard");
const gridSideSize = 3;
for(let i=0; i< gridSideSize;i++ ){
    for(let j=0;j<gridSideSize; j++){
        const gridItem = document.createElement("div");
        gridItem.className = "cell";
        gridItem.id = `${i}${j}`;
        gridItem.textContent = " ";
        gridItem.addEventListener("click", onClickGrid);
        gameBoard.appendChild(gridItem);
    }
}
//set up backend structure
setUp(3);




//check winner
let winnerExisted = false;
const checkWin= (result)=>{
    if(result == 0){
        return 0;
    }else if(result == 1){
        winnerExisted = true;
        alert("Winner 1 wins! Refresh the page to start a new game");
        return 1;
    }else{
        winnerExisted = true;
        alert("Winner 2 wins! Refresh the page to start a new game")
        return -1;
    }
}

//Play logic
const player1 = 1;
const player2 = -1;
let currentPlayer = 1;
function onClickGrid(){
    console.log(this.id);
    let result = 0;
   
    if(this.textContent != " " || winnerExisted){
        console.log("not allow or gameover");
        return;
    }

    if(currentPlayer == player1){
        this.textContent = "X";
        result = move(this.id,currentPlayer);
        checkWin(result);
        currentPlayer = player2; 
    }else
    {
        this.textContent = "O";
        result = move(this.id, currentPlayer);
        checkWin(result);
        currentPlayer = player1;
    }
}

