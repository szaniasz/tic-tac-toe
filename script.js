const boardGame = (function(){
    const board = [
        ['','',''],
        ['','',''],
        ['','','']
    ]
    const squares = document.querySelectorAll('.square')
    // const squaresArray = [...squares]
    const displayBoard = function() {   
        let squareNumber = 0
        for (let i = 0; i < (this.board).length; i++) {
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
            board[i][j] = mark
            // console.log(board[i])
            checkIfWon(i,j)
            changeMark()
        } else {
            alert("You can't change the value")
            return
        }
      })
    })

    let mark = 'X'
    const changeMark = function() {
        if (mark === 'X') {
            mark = 'O'
        } else {
            mark = 'X'
        }
    }
    const checkIfWon = function(i, j) {
        if (board[i].every (el => el === board[i][0])) {
            console.log('the same in row. the winner is ' + mark)

        } else if (board[0][j] === board[1][j] && board[1][j] === board[2][j]) {
            console.log('the winner is ' + mark)
        } else if ( (j % 2 === 0 && i % 2 === 0) || (i === j)) {
            if ( (board[0][0] === board[1][1] && board[1][1] === board[2][2]) ||
            (board[0][2] === board[1][1] && board[1][1] === board[2][0]) ){
                console.log('the winner is ' + mark)
            }
        } else {
            return
        }
    }
    return {
        board,
        displayBoard,
        checkIfWon
    }
})()



boardGame.displayBoard()





