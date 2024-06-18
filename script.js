
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
const move = (row, col,player, size)=> {
    
    const n= size;
    const currentPlayer = (player == 1)? 1: -1;
    
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
const container = document.querySelector(".container");
container.textContent = "hello Tic-Tac-Toe";

let noWinner = true;
const size = parseInt(prompt('Enter the size','2'));
setUp(size);
let player = 1;
while(noWinner){
    const row_input = parseInt(prompt('Enter the row','0'));
    const col_input = parseInt(prompt('Enter the col','0'));
    
    const result = move(row_input, col_input, player, size);
    // console.log(`${row_input} ${col_input} ${player}` );
    if(result == 1){
        alert("player 1 wins");
        noWinner = false;
    }else if(result == -1){
        alert("player 2 wins");
        noWinner = false;
    }else{
        player = -player;
    }
}