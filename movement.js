// Function to move a player randomly
function movePlayerRandomly(player, canvas) {
    const destinationX = Math.random() * canvas.width;
    const destinationY = Math.random() * canvas.height;

    // Move towards the destination
    const speed = 2;
    const dx = destinationX - player.x;
    const dy = destinationY - player.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance > speed) {
        player.x += (dx / distance) * speed;
        player.y += (dy / distance) * speed;
    } else {
        // Player reached the destination, generate a new destination
        player.x = destinationX;
        player.y = destinationY;
    }
}