const Player = () => {
    let playerName;
    let playerToken;

    const setPlayerName = () => {
        playerName = prompt("Enter name for player 1:", "Player 1");
    };
    const getPlayerName = () => {
        return playerName;
    };

    const setPlayerToken = (token) => {
        playerToken = token;
    };
    const getPlayerToken = () => {
        return playerToken;
    };

    return {
        setPlayerName,
        getPlayerName,
        setPlayerToken,
        getPlayerToken,
    };
};


const Board = (player1, player2) => {
    let board;
    let activePlayerToken;

    const setActivePlayerToken = (token) => {
        activePlayerToken = token;
    };

    const getCellPosition = (cell) => {
        const classes = cell.className;
        const row = classes.match(/(?<=row-)\d/)[0];
        const col = classes.match(/(?<=row-\d-col-)\d/)[0];

        return [row, col]
    };

    const switchActivePlayer = (player1, player2) => {
        if (player1.getPlayerToken() === activePlayerToken) {
            activePlayerToken = player2.getPlayerToken();
        } else {
            activePlayerToken = player1.getPlayerToken();
        }
    }

    const setCellValue = (cell) => {
        [row, col] = getCellPosition(cell);

        console.log(row, col);
        cell.textContent = activePlayerToken;
        board[row][col] = activePlayerToken;

        switchActivePlayer(player1, player2);
    };


    const clearBoard = () => {
        board = Array(3).fill(null).map(() => Array(3).fill(null)); 
        return board;
    };

    const logBoard = () => {
        return board;
    }

    const initalizeBoard = () => {
        cells = document.querySelectorAll(".cell");
        for (let cell of cells) {
            cell.addEventListener('click', () => setCellValue(cell));
        };
    };

    const checkWinner = () => {
        if (
            (board[0][0] === board[0][1]) && 
            (board[0][1] === board[0][2])
        ) {
            return board[0][0];

        } else if (
            (board[1][0] === board[1][1]) && 
            (board[1][1] === board[1][2])
        ) {
            return board[1][0];

        } else if (
            (board[2][0] === board[2][1]) && 
            (board[2][1] === board[2][2])
        ) {
            return board[2][0];

        } else if (
            (board[0][0] === board[1][0]) && 
            (board[1][0] === board[2][0])
        ) {
            return board[0][0];

        } else if (
            (board[0][1] === board[1][1]) && 
            (board[1][1] === board[2][1])
        ) {
            return board[0][1];

        } else if (
            (board[0][2] === board[1][2]) && 
            (board[1][2] === board[2][2])
        ) {
            return board[0][2];

        } else if (
            (board[0][0] === board[1][1]) && 
            (board[1][1] === board[2][2])
        ) {
            return board[0][0];

        } else if (
            (board[2][0] === board[1][1]) && 
            (board[1][1] === board[0][2])
        ) {
            return board[2][0];
        }
    };

    return {
        setActivePlayerToken,
        board,
        logBoard,
        clearBoard,
        initalizeBoard,
        checkWinner,
    };
};


(() => {
    const player1 = Player();
    const player2 = Player();

    player1.setPlayerName();
    player1.setPlayerToken('X');
    player2.setPlayerName();
    player2.setPlayerToken('P');

    const gameBoard = Board(player1, player2);
    gameBoard.clearBoard();
    gameBoard.initalizeBoard();
    gameBoard.setActivePlayerToken('x')
    console.log(gameBoard.logBoard());
})();

/*
const jim = Player();
jim.setPlayerName();
console.log(jim.getPlayerName());
jim.setPlayerToken("X");
console.log(jim.getPlayerToken());
*/

/*
const board = Board();
console.log(board.logBoard());
board.clearBoard();
console.log(board.logBoard());
board.initalizeBoard();
console.log(board.checkWinner());
*/