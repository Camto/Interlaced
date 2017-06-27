function checkerboard(parity, pencil, location) { // Make the screen a checkerboard pattern.
	
	var pixels = pencil.getImageData(0, 0, 4400, 400); // Pixels is the ImageData().
	
	for(var count = 0; count < pixels.data.length / 4; count++) { // For every pixel.
		
		if(count % 2 == parity) { // If it's the correct parity...
			
			pixels.data[count * 4 + 3] = 0; // ...remove it! (completely transparent)
			
		}
		
	}
	
	location.putImageData(pixels, 0, 0);
	
}