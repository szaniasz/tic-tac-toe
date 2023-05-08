const boardGame = (function(){
    const board = [
        ['x','','x'],
        ['x','','x'],
        ['','x','o']
    ]
    const displayBoard = function() {
        const squares = document.querySelectorAll('.square')
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
        displayBoard}
})()

boardGame.displayBoard()



