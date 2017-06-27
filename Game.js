function Game() { // The game loop.
	
	// Update EVERYTHING.
	
	
	
	// Draw EVERYTHING.
	
	light_draw.fillStyle = "#6060ff";
	light_draw.fillRect(0, 0, 400, 400);
	
	dark_draw.fillStyle = "#600000";
	dark_draw.fillRect(0, 0, 400, 400);
	
	checkerboard(1, dark_draw, light_draw);
	
}