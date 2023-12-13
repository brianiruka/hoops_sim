 canvas = document.getElementById("basketballCourt");
 ctx = canvas.getContext("2d");

 function drawCourt() {
     // Draw basketball court
     ctx.fillStyle = "#d39659"; // Basketball court color
     ctx.fillRect(0, 0, canvas.width, canvas.height);

     // Draw half-court line
     drawLine(450, 0, 450, canvas.height);


     // Draw three-point line (centered vertically)
     const threePointRadiusX = 150;
     const threePointRadiusY = 190; // Adjust the value to control the curvature
     const threePointCenterX = 150;
     const threePointCenterY = canvas.height / 2;

     ctx.beginPath();
     ctx.ellipse(threePointCenterX, threePointCenterY, threePointRadiusX, threePointRadiusY, 0, (3 * Math.PI) / 2, Math.PI / 2);
     ctx.lineWidth = 2;
     ctx.strokeStyle = '#f8f8f8';
     ctx.stroke();
     ctx.closePath();

     // Draw tip-off circle
     drawCircle(450, 250, 15); // Adjust the radius as needed
     drawCircle(450, 250, 50); // Adjust the radius as needed

     // Draw lines to connect the ends of the three-point line arc to the left side of the court

     drawLine(0, threePointCenterY - threePointRadiusY, 0 + threePointRadiusX, threePointCenterY - threePointRadiusY, 2);
     drawLine(0, threePointCenterY + threePointRadiusY, 0 + threePointRadiusX, threePointCenterY + threePointRadiusY, 2);

     // Draw the key (rectangle with a half-circle)
     drawKey(120, canvas.height / 2, 200, 150, 2); // Adjust the dimensions as needed

     // Draw mirrored version of the key on the other end of the court
     drawMirroredKey(450, canvas.height / 2, 30, 190, 2); // Adjust the dimensions as needed

     // Function to draw a mirrored version of the key
     function drawMirroredKey(x, y, width, height, lineWidth) {
         ctx.save(); // Save the current transformation matrix
         ctx.scale(-1, 1); // Mirror the drawing along the vertical axis
         drawKey(-x - width, y, width, height, lineWidth); // Draw the mirrored key
         ctx.restore(); // Restore the original transformation matrix
     }
     // Function to draw a line
     function drawLine(x1, y1, x2, y2, width) {
         ctx.beginPath();
         ctx.moveTo(x1, y1);
         ctx.lineTo(x2, y2);
         ctx.lineWidth = width;
         ctx.strokeStyle = '#f8f8f8';
         ctx.stroke();
         ctx.closePath();
     }

     // Function to draw a circle
     function drawCircle(x, y, radius) {
         ctx.beginPath();
         ctx.arc(x, y, radius, 0, 2 * Math.PI);
         ctx.lineWidth = 2;
         ctx.strokeStyle = '#f8f8f8';
         ctx.stroke();
         ctx.closePath();
     }

     // Function to draw the key (rectangle with a half-circle)
     function drawKey(x, y, width, height, lineWidth) {
         ctx.beginPath();
         ctx.rect(0, y - height / 2, width, height);
         ctx.lineWidth = lineWidth;
         ctx.strokeStyle = '#f8f8f8';
         ctx.stroke();

         // Draw half-circle
         ctx.beginPath();
         ctx.arc(width, y, height / 2.5, Math.PI / 2, (3 * Math.PI) / 2, true); // Set the last parameter to true for counter-clockwise
         ctx.stroke();
         ctx.closePath();
     }
 };