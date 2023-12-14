 canvas = document.getElementById("basketballCourt");
 ctx = canvas.getContext("2d");

 const courtZones = {
     centerCircle: {
         x: 450,
         y: 239
     },
     leftBottomCorner: {
         x: 26,
         y: 450
     },
     leftTopCorner: {
         x: 37,
         y: 37
     },
     leftBottomLowPost: {
         x: 37,
         y: 336
     },
     leftTopLowPost: {
         x: 37,
         y: 139
     },
     leftRestrictedArea: {
         x: 37,
         y: 230
     },
     leftBottomWing: {
         x: 220,
         y: 430
     },
     leftTopWing: {
         x: 220,
         y: 30
     },
     leftBottomElbow: {
         x: 200,
         y: 316
     },
     leftTopElbow: {
         x: 200,
         y: 158
     },
     leftTopOfKey: {
         x: 268,
         y: 238
     },
     leftLane: {
         x: 130,
         y: 240
     },
     leftTopTPL: {
         x: 300,
         y: 121
     },
     leftCenterTPL: {
         x: 325,
         y: 235
     },
     leftLaneTPL: {
         x: 304,
         y: 345
     },
 };

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

     // Draw transparent squares for each court zone
     //  for (const zone in courtZones) {
     //      if (courtZones.hasOwnProperty(zone)) {
     //          const coordinates = courtZones[zone];
     //          drawTransparentSquare(coordinates.x, coordinates.y, 50); // Adjust the size as needed
     //      }
     //  }
 }

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



 // Function to draw a transparent square
 function drawTransparentSquare(x, y, size) {
     ctx.beginPath();
     ctx.globalAlpha = 0.5; // Set transparency level (0 = fully transparent, 1 = fully opaque)
     ctx.fillStyle = "blue"; // Set the color of the square
     ctx.fillRect(x - size / 2, y - size / 2, size, size);
     ctx.globalAlpha = 1; // Reset transparency to default
     ctx.closePath();
 }