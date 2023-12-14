        // Check if two players collide
        function playersCollide(player1, player2) {
            const distance = Math.sqrt(
                (player1.x - player2.x) ** 2 + (player1.y - player2.y) ** 2
            );

            return distance < 30; // Adjust the collision threshold as needed
        }

        // Handle collisions between players
        function handleCollisions() {
            for (let i = 0; i < players.length; i++) {
                for (let j = i + 1; j < players.length; j++) {
                    const player1 = players[i];
                    const player2 = players[j];

                    if (playersCollide(player1, player2)) {
                        // Adjust player positions based on collision
                        const dx = player2.x - player1.x;
                        const dy = player2.y - player1.y;
                        const angle = Math.atan2(dy, dx);
                        const distance = Math.sqrt(dx ** 2 + dy ** 2);
                        const overlap = 30 - distance;

                        player1.x -= overlap * Math.cos(angle);
                        player1.y -= overlap * Math.sin(angle);

                        player2.x += overlap * Math.cos(angle);
                        player2.y += overlap * Math.sin(angle);
                    }
                }
            }
        }