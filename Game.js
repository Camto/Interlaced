function Game() { // The game loop.
	
	// Update EVERYTHING.
	
	
	
	// Draw EVERYTHING.
	
	light_draw.fillStyle = "white";
	light_draw.fillRect(0, 0, 100, 100); // The background.
	light_draw.fillStyle = "#7CFF73";
	light_draw.fillRect(37.5, 75, 31.25, 25);
	
	dark_draw.fillStyle = "black";
	dark_draw.fillRect(0, 0, 100, 100); // The other background.
	dark_draw.fillStyle = "#850000";
	dark_draw.fillRect(50, 50, 12.5, 50);
	
	light_draw.drawImage(Light_World, 0, 0, Light_World.width * 4, Light_World.height * 4); // Resize.
	checkerboard(0, dark_draw, light_draw, Dark_World, Light_World); // INTERLACE IT!
	
}