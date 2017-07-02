function Game() { // The game loop.
	
	var count = 0; // Looping variable.
	var s_ingame = ingame; // Synchronous `ingame` variable.
	
	// Update EVERYTHING.
	
	
	
	// Draw EVERYTHING.
	
	light_draw.fillStyle = "white";
	light_draw.fillRect(0, 0, 100, 100); // The background.
	
	// All light world objects.
	if(s_ingame) {
		
		light_objects.player.draw(light_draw);
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
		light_objects.exit.draw(light_draw);
		
		dark_draw.fillStyle = "black";
		dark_draw.fillRect(0, 0, 100, 100); // The other background.
		
		// All dark world objects.
		dark_objects.player.draw(dark_draw);}
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
		dark_objects.exit.draw(dark_draw);
		
	} else { // If we're not in a level, we need to load a new one!
		
		loadFile("Levels/Level " + level + ".lvl", function() {
			
			var level_JSON = process_level_data(this.responseText);
			
			// Load in light objects.
			
			light_objects.player = new Player(level_JSON.Light.player.x, level_JSON.Light.player.y);
			for(count = 0; count < level_JSON.Light.block.length; count++) {
				light_objects.blocks.push(new Block(
					level_JSON.Light.block[count].x,
					level_JSON.Light.block[count].y,
					level_JSON.Light.block[count].w,
					level_JSON.Light.block[count].h)
				);
			}
			for(count = 0; count < level_JSON.Light.wall.length; count++) {
				light_objects.walls.push(new Wall(
					level_JSON.Light.wall[count].x,
					level_JSON.Light.wall[count].y,
					level_JSON.Light.wall[count].w,
					level_JSON.Light.wall[count].h)
				);
			}
			for(count = 0; count < level_JSON.Light["switch"].length; count++) {
				light_objects.switches.push(new Switch(
					level_JSON.Light["switch"][count].x,
					level_JSON.Light["switch"][count].y,
					level_JSON.Light["switch"][count].d,
					level_JSON.Light["switch"][count].k)
				);
			}
			for(count = 0; count < level_JSON.Light.door.length; count++) {
				light_objects.doors.push(new Door(
					level_JSON.Light.door[count].x,
					level_JSON.Light.door[count].y,
					level_JSON.Light.door[count].w,
					level_JSON.Light.door[count].h,
					level_JSON.Light.door[count].k)
				);
			}
			light_objects.exit = new Exit(level_JSON.Light.exit.x, level_JSON.Light.exit.y, level_JSON.Light.exit.w, level_JSON.Light.exit.h);
			
			// Load in dark objects.
			
			dark_objects.player = new Player(level_JSON.Dark.player.x, level_JSON.Dark.player.y);
			for(count = 0; count < level_JSON.Dark.block.length; count++) {
				dark_objects.blocks.push(new Block(
					level_JSON.Dark.block[count].x,
					level_JSON.Dark.block[count].y,
					level_JSON.Dark.block[count].w,
					level_JSON.Dark.block[count].h)
				);
			}
			for(count = 0; count < level_JSON.Dark.wall.length; count++) {
				dark_objects.walls.push(new Wall(
					level_JSON.Dark.wall[count].x,
					level_JSON.Dark.wall[count].y,
					level_JSON.Dark.wall[count].w,
					level_JSON.Dark.wall[count].h)
				);
			}
			for(count = 0; count < level_JSON.Dark["switch"].length; count++) {
				dark_objects.switches.push(new Switch(
					level_JSON.Dark["switch"][count].x,
					level_JSON.Dark["switch"][count].y,
					level_JSON.Dark["switch"][count].d,
					level_JSON.Dark["switch"][count].k)
				);
			}
			for(count = 0; count < level_JSON.Dark.door.length; count++) {
				dark_objects.doors.push(new Door(
					level_JSON.Dark.door[count].x,
					level_JSON.Dark.door[count].y,
					level_JSON.Dark.door[count].w,
					level_JSON.Dark.door[count].h,
					level_JSON.Dark.door[count].k,)
				);
			}
			dark_objects.exit = new Exit(level_JSON.Dark.exit.x, level_JSON.Dark.exit.y, level_JSON.Dark.exit.w, level_JSON.Dark.exit.h);
			
			ingame = true;
			
		});
		
	}
	
	light_draw.drawImage(Light_World, 0, 0, Light_World.width * 4, Light_World.height * 4); // Resize.
	checkerboard(0, dark_draw, light_draw, Dark_World, Light_World); // INTERLACE IT!
	
}