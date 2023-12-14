// Function to move a player to a random spot
function movePlayerTo(player, destination, canvas) {
    player.state = "moving";
    player.destinationX = destination.x
    player.destinationY = destination.y;
}

// Function to move players randomly
function movePlayers() {
    for (const player of players) {
        if (player.state == "moving") {

            // Move towards the destination
            let speed = player.getMovementSpeed();
            const dx = player.destinationX - player.x
            const dy = player.destinationY - player.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance > speed) {
                player.x += (dx / distance) * speed + getRandomBetween(-.5, .5);
                player.y += (dy / distance) * speed + getRandomBetween(-.5, .5);
            } else {
                // Player reached the destination, stop moving
                player.x += getRandomBetween(-.1, .1);
                player.y += getRandomBetween(-.1, .1);
            }
        }
    }
}

function getRandomBetween(min, max) {
    return Math.random() * (max - min) + min;
}