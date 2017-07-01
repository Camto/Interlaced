function Game() { // The game loop.
	
	var count = 0; // Looping variable.
	var s_ingame = ingame; // Synchronous `ingame` variable.
	
	if(!s_ingame) { // Check if a new level needs to be loaded...
		
		loadFile("Levels/Level " + level + ".lvl", function() {
			
			var level_JSON = process_level_data(this.responseText);
			light_objects = level_JSON.Light;
			dark_objects = level_JSON.Dark;
			ingame = true;
			
		});
		
	}
	
	// Update EVERYTHING.
	
	
	
	// Draw EVERYTHING.
	
	light_draw.fillStyle = "white";
	light_draw.fillRect(0, 0, 100, 100); // The background.
	
	// All light world objects.
	if(s_ingame) {light_objects.player.draw(light_draw);}
	for(count = 0; count < light_objects.blocks.length; count++) {
		
		light_objects.blocks[count].draw(light_draw);
		
	}
	for(count = 0; count < light_objects.walls.length; count++) {
		
		light_objects.walls[count].draw(light_draw);
		
	}
	for(count = 0; count < light_objects.switches.length; count++) {
		
		light_objects.switches[count].draw(light_draw);
		
	}
	for(count = 0; count < light_objects.doors.length; count++) {
		
		light_objects.doors[count].draw(light_draw);
		
	}
	if(s_ingame) {light_objects.exit.draw(light_draw);}
	
	dark_draw.fillStyle = "black";
	dark_draw.fillRect(0, 0, 100, 100); // The other background.
	
	// All dark world objects.
	if(s_ingame) {dark_objects.player.draw(dark_draw);}
	for(count = 0; count < dark_objects.blocks.length; count++) {
		
		dark_objects.blocks[count].draw(dark_draw);
		
	}
	for(count = 0; count < dark_objects.walls.length; count++) {
		
		dark_objects.walls[count].draw(dark_draw);
		
	}
	for(count = 0; count < dark_objects.switches.length; count++) {
		
		dark_objects.switches[count].draw(dark_draw);
		
	}
	for(count = 0; count < dark_objects.doors.length; count++) {
		
		dark_objects.doors[count].draw(dark_draw);
		
	}
	if(s_ingame) {dark_objects.exit.draw(dark_draw);}
	
	light_draw.drawImage(Light_World, 0, 0, Light_World.width * 4, Light_World.height * 4); // Resize.
	checkerboard(0, dark_draw, light_draw, Dark_World, Light_World); // INTERLACE IT!
	
}