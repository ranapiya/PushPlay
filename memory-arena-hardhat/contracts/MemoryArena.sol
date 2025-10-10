// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract MemoryArena {
    struct Player {
        string name;
        uint256 score;
        bool isRegistered;
    }

    address public owner;
    mapping(address => Player) public players;
    address[] public playerAddresses;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyRegistered() {
        require(players[msg.sender].isRegistered, "Player not registered");
        _;
    }

    function registerPlayer(string calldata name) external {
        require(!players[msg.sender].isRegistered, "Already registered");
        require(bytes(name).length > 0, "Name cannot be empty");

        players[msg.sender] = Player(name, 0, true);
        playerAddresses.push(msg.sender);
    }

    function submitScore(uint256 newScore) external onlyRegistered {
        require(newScore > players[msg.sender].score, "New score must be higher");

        players[msg.sender].score = newScore;
    }

    function getLeaderboard() external view returns (string[] memory, uint256[] memory) {
        uint256 n = playerAddresses.length;
        string[] memory names = new string[](n);
        uint256[] memory scores = new uint256[](n);

        for (uint256 i = 0; i < n; i++) {
            Player memory p = players[playerAddresses[i]];
            names[i] = p.name;
            scores[i] = p.score;
        }

        return (names, scores);
    }

    function getPlayer(address playerAddr) external view returns (string memory name, uint256 score) {
        Player memory p = players[playerAddr];
        return (p.name, p.score);
    }
}
