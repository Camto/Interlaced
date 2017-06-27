function checkerboard(parity, pencil, location, screen, screen2) { // Make the screen a checkerboard pattern.
	
	var pixels = pencil.getImageData(0, 0, screen.width, screen.height); // Pixels is the ImageData().
	
	var offset = 0; // The offset.
	
	for(var y = 0; y < screen.height; y++) { // For every pixel.
		
		for(var x = 0; x < screen.width; x++) {
			
			if(x % 2 - offset == parity) { // If it's the correct parity...
				
				pixels.data[(x + y * screen.width) * 4 + 3] = 0; // ...remove it! (completely transparent)
				
			}
			
		}
		
		offset = !offset; // Remove it and see what happens!
		
	}
	
	pencil.putImageData(pixels, 0, 0); // Put the processed image back.
	
	location.drawImage(screen, 0, 0, screen2.width, screen2.height); // Copy & paste to the correct canvas.
	
}