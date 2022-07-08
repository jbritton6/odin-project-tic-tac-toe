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

const jim = Player();
jim.setPlayerName();
console.log(jim.getPlayerName());
jim.setPlayerToken("X");
console.log(jim.getPlayerToken());