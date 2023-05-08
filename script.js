const boardGame = (function(){
    const board = [
        ['X','','X'],
        ['X','','X'],
        ['','X','O']
    ]
    const squares = document.querySelectorAll('.square')
    // const squaresArray = [...squares]
    const displayBoard = function() {   
        let squareNumber = 0
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < this.board[i].length; j++) {
              squares[squareNumber].innerHTML = this.board[i][j];
              squareNumber++
            }
        }
    }
    
    return {
        board, 
        displayBoard
    }
})()
// boardGame.squares.forEach((square) => {
//     square.addEventListener('click', console.log('elo'))
// })
boardGame.displayBoard()





