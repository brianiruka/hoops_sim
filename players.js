const PLAYER_SIZE = 15;
// Base Player constructor
class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.isMoving = false;
        this.destinationX = x;
        this.destinationY = y;
        this.team = null; // Initially no team
        this.matchup = null; //Initially no matchup
        this.isBallHandler = false; // Initially no ball
    }
    // Method to get movement speed based on player's position
    getMovementSpeed() {
        switch (this.position) {
            case 'pg':
                return 3; // Faster speed for point guards
            case 'sg':
                return 2.5;
            case 'sf':
                return 2;
            case 'pf':
                return 1.5;
            case 'c':
                return 1; // Slower speed for centers
            default:
                return 2; // Default speed if position is not specified
        }
    }
}
// Team constructor
class Team {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.players = []; // Array to store players
        this.isOnOffense = false;
        this.currentPlay = null;
    }
    // Method to switch the team's state between offense and defense
    switchState() {
        this.isOnOffense = !this.isOnOffense;
    }
}


// Function to create a player and add it to a team
function createPlayer(team, x, y, position) {
    const player = new Player(x, y);
    player.team = team;
    player.color = team.color;
    player.position = position;
    team.players.push(player);
    players.push(player); // Add player to the players array
    return player;
}
const players = []; // Array to store players
// Create two teams
const teamA = new Team('Team A', '#fff');
const teamB = new Team('Team B', '#e03a3e');

// Create players and assign them to teams
const player1 = createPlayer(teamA, 50, 15, "pg");
const player2 = createPlayer(teamA, 90, 15, "sg");
const player3 = createPlayer(teamA, 130, 15, "sf");
const player4 = createPlayer(teamA, 170, 15, "pf");
const player5 = createPlayer(teamA, 210, 15, "c");

const player6 = createPlayer(teamB, 850, 15, "pg");
const player7 = createPlayer(teamB, 810, 15, "sg");
const player8 = createPlayer(teamB, 770, 15, "sf");
const player9 = createPlayer(teamB, 730, 15, "pf");
const player10 = createPlayer(teamB, 690, 15, "c");
// Function to draw a player
function drawPlayer(player) {
    ctx.beginPath();
    ctx.arc(player.x, player.y, PLAYER_SIZE, 0, 2 * Math.PI);
    ctx.fillStyle = player.color;
    ctx.fill();
    ctx.closePath();

    ctx.fillStyle = '#000';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(player.position.toUpperCase(), player.x, player.y);
}