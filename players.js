// Initial set of players
players = [{
        x: 50,
        y: 50,
        color: "#ffcc00",
        isMoving: false,
        destinationX: 0,
        destinationY: 0
    },
    {
        x: 200,
        y: 100,
        color: "#ffcc00",
        isMoving: false,
        destinationX: 0,
        destinationY: 0
    },
    {
        x: 150,
        y: 300,
        color: "#ffcc00",
        isMoving: false,
        destinationX: 0,
        destinationY: 0
    },
    {
        x: 400,
        y: 250,
        color: "#ffcc00",
        isMoving: false,
        destinationX: 0,
        destinationY: 0
    },
    {
        x: 500,
        y: 150,
        color: "#ffcc00",
        isMoving: false,
        destinationX: 0,
        destinationY: 0
    },
    {
        x: 850,
        y: 50,
        color: '#800080',
        isMoving: false,
        destinationX: 0,
        destinationY: 0
    },
    {
        x: 700,
        y: 100,
        color: '#800080',
        isMoving: false,
        destinationX: 0,
        destinationY: 0
    },
    {
        x: 750,
        y: 300,
        color: '#800080',
        isMoving: false,
        destinationX: 0,
        destinationY: 0
    },
    {
        x: 500,
        y: 250,
        color: '#800080',
        isMoving: false,
        destinationX: 0,
        destinationY: 0
    },
    {
        x: 400,
        y: 150,
        color: '#800080',
        isMoving: false,
        destinationX: 0,
        destinationY: 0
    }
];

// Function to draw a player
function drawPlayer(x, y, color) {
    ctx.beginPath();
    ctx.arc(x, y, 15, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}