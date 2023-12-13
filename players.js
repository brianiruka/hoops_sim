      // Draw players
      players = [{
              x: 50,
              y: 50,
              color: "#ffcc00"
          }, // Player 1
          {
              x: 200,
              y: 100,
              color: "#ffcc00"
          }, // Player 2
          {
              x: 150,
              y: 300,
              color: "#ffcc00"
          }, // Player 3
          {
              x: 400,
              y: 250,
              color: "#ffcc00"
          }, // Player 4
          {
              x: 500,
              y: 150,
              color: "#ffcc00"
          }, // Player 5

          // Five purple players on the other side
          {
              x: 850,
              y: 50,
              color: '#800080'
          }, // Player 6 (purple)
          {
              x: 700,
              y: 100,
              color: '#800080'
          }, // Player 7 (purple)
          {
              x: 750,
              y: 300,
              color: '#800080'
          }, // Player 8 (purple)
          {
              x: 500,
              y: 250,
              color: '#800080'
          }, // Player 9 (purple)
          {
              x: 400,
              y: 150,
              color: '#800080'
          } // Player 10 (purple)
      ];

      players.forEach((player) => {
          drawPlayer(player.x, player.y, player.color);
      });

      // Function to draw a player
      function drawPlayer(x, y, color) {
          ctx.beginPath();
          ctx.arc(x, y, 15, 0, 2 * Math.PI);
          ctx.fillStyle = color;
          ctx.fill();
          ctx.closePath();
      }

      // Function to move players randomly
      function movePlayers() {
          for (const player of players) {
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
      }