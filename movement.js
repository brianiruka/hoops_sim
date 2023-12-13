// Function to move a player to a random spot
function movePlayerTo(player, canvas) {
    player.isMoving = true;
    player.destinationX = Math.random() * canvas.width;
    player.destinationY = Math.random() * canvas.height;
}

// Function to update players' positions
function updatePlayers() {
    players.forEach((player) => {
        if (player.isMoving) {
            const speed = 2;
            const dx = player.destinationX - player.x;
            const dy = player.destinationY - player.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance > speed) {
                player.x += (dx / distance) * speed;
                player.y += (dy / distance) * speed;
            } else {
                // Player reached the destination, stop moving
                player.isMoving = false;
            }
        }
    });
}

// Function to move players randomly
function movePlayers() {
    for (const player of players) {
        if (player.isMoving) {
            // Move towards the destination
            const speed = 2;
            const dx = player.destinationX - player.x;
            const dy = player.destinationY - player.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance > speed) {
                player.x += (dx / distance) * speed;
                player.y += (dy / distance) * speed;
            } else {
                // Player reached the destination, generate a new destination
                player.x = player.destinationX;
                player.y = player.destinationY;
            }
        }
    }
}