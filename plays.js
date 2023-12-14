class Play {
    constructor(name, team, playerPositions) {
        this.name = name; // Name of the play
        this.team = team; // Team running the play (Team A or Team B)
        this.playerPositions = playerPositions; // Player positions in the play
    }

    run() {
        // Logic to execute the play
        console.log(`Running play: ${this.name} for ${this.team}`);
        console.log('Player positions:');
        this.playerPositions.forEach((position) => {
            movePlayerTo(position.player, position.location, canvas);
        });
        // Additional play logic can be added here
    }
}

const pnR = new Play('Pick and Roll', teamA, [{
        player: player1,
        location: courtZones.centerCircle
    },
    {
        player: player2,
        location: courtZones.leftTopCorner
    },
    {
        player: player3,
        location: courtZones.leftBottomCorner
    },
    {
        player: player4,
        location: courtZones.leftTopElbow
    },
    {
        player: player5,
        location: courtZones.leftBottomElbow
    }
]);

pnR.run();