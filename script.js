const boardGame = (function(){
    const board = [
        ['','',''],
        ['X','','X'],
        ['','','O']
    ]
    const squares = document.querySelectorAll('.square')
    // const squaresArray = [...squares]
    const displayBoard = function() {   
        let squareNumber = 0
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < this.board[i].length; j++) {
              squares[squareNumber].innerText = this.board[i][j];
              squareNumber++
            }
        }
    }
    squares.forEach((square) => {
        square.addEventListener("click", function() {
        if (this.innerText === '') {
            this.innerText = mark
            const i = this.id[(this.id).length - 3]
            const j = this.id[(this.id).length - 1]
            boardGame.board[i][j] = mark
            changeMark()
        } else {
            alert("You can't change the value")
            return
        }
      })
    })
    // const checkIfFilled = function() {
        
    // }
    let mark = 'X'
    const changeMark = function() {
        if (mark === 'X') {
            mark = 'O'
        } else {
            mark = 'X'
        }
    }
    return {
        board, 
        displayBoard
    }
})()



boardGame.displayBoard()





