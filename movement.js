// Function to move a player to a random spot
function movePlayerTo(player, canvas) {
    player.isMoving = true;
    player.destinationX = Math.random() * canvas.width;
    player.destinationY = Math.random() * canvas.height;
}

// Function to move players randomly
function movePlayers() {
    for (const player of players) {
        if (player.isMoving) {

            // Move towards the destination
            const speed = player.getMovementSpeed();
            const dx = player.destinationX - player.x
            const dy = player.destinationY - player.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance > speed) {
                player.x += (dx / distance) * speed + getRandomBetween(-.5, .5);;
                player.y += (dy / distance) * speed + getRandomBetween(-.5, .5);
            } else {
                // Player reached the destination, stop moving
                player.isMoving = false;
            }
        }
    }
}

function getRandomBetween(min, max) {
    return Math.random() * (max - min) + min;
}