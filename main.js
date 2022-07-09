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

const Board = () => {
    const board = [];

    const clearBoard = () => {
        board.length = 0;
        board[0] = [null, null, null];
        board[1] = board[0];
        board[2] = board[0];

        return board;
    };

    const initalizeBoard = () => {
        cells = document.querySelectorAll(".cell");
        for (let cell of cells) {
            cell.addEventListener('click', () => {
                alert('hello');
            });
        };
    };

    return {
        clearBoard,
        initalizeBoard,
    };
};

/*
const jim = Player();
jim.setPlayerName();
console.log(jim.getPlayerName());
jim.setPlayerToken("X");
console.log(jim.getPlayerToken());
*/

const board = Board();
board.initalizeBoard();
console.log(board.clearBoard());