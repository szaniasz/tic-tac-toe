const boardGame = (function(){
    const board = [
        ['','',''],
        ['','',''],
        ['','','']
    ]
    const squares = document.querySelectorAll('.square')
    const displayBoard = function() {   
        let squareNumber = 0
        for (let i = 0; i < boardGame.board.length; i++) {
            for (let j = 0; j < boardGame.board[i].length; j++) {
              squares[squareNumber].innerText = boardGame.board[i][j];
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
            checkIfWon(i,j)
            changeMark(player)
            updateMarkText(mark, player)
        } else {
            return
        }
      })
    })

    let mark = 'X'
    let player = document.getElementById('player1').innerText

    const player1Name = document.getElementById('player1')
    const player2Name = document.getElementById('player2')
    let player1Result = document.getElementById('player1result')
    let player2Result = document.getElementById('player2result')

    const changeMark = function() {
        if (mark === 'X') {
            mark = 'O'
            player = player2Name.innerText
        } else {
            mark = 'X'
            player = player1Name.innerText
        }
    }
    const updateMarkText = function(mark, player) {
        document.getElementById('mark').innerText = mark
        document.getElementById('player-name').innerText = player
    }

    let winner = ''
    const checkIfWon = function(i, j) {
        if (board[i].every (el => el === board[i][0])) {
            displayWinner()
            showModal()
        } else if (board[0][j] === board[1][j] && board[1][j] === board[2][j]) {
            displayWinner()
            showModal()
        } else if ( (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[1][1] === mark) ||
        (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[1][1] === mark)) {
            displayWinner()
            showModal()
        } else {
            return
        }
    }

    const changeResultValue = function() {
        if(player1Name.innerText === winner) {
            player1Result.innerText = parseInt(player1Result.innerText) +1
        } else if (player2Name.innerText === winner) {
            player2Result.innerText = parseInt(player2Result.innerText) +1
        }
    }

    const nameOfWinner = document.querySelector('.modal-winner')
    const displayWinner = function() {
        winner = player
        nameOfWinner.innerText = winner
    }
  
    const modal = document.querySelector('.modal')
    const overlay = document.getElementById('overlay')
    

    const showModal = function(){
        modal.classList.add('active')
        overlay.classList.add('active')
    }
    const hideModal = function(){
        modal.classList.remove('active')
        overlay.classList.remove('active')
        changeResultValue() 
    }
    const modalButton = document.querySelector('[data-modal-button]')
    modalButton.addEventListener('click', function() {
        restartGame()
        displayBoard()
        hideModal()
    })
    const restartGame = function() {
        // debugger
        for (let i = 0; i < (boardGame.board).length; i++) {
            for (let j = 0; j < boardGame.board[i].length; j++) {
              boardGame.board[i][j] = ''
            }
        }
    }

    const restartButton = document.getElementById('restart')

    restartButton.addEventListener(('click'), function(){
        if (window.confirm("Are your sure? This action cannot be undone")) {
            restartGame()
            displayBoard()
            player1Result.innerText = 0
            player2Result.innerText = 0
          } 
    })

    return {
        board,
        displayBoard,
        checkIfWon,
        winner, 
        displayWinner
    }
})()

boardGame.displayBoard()





