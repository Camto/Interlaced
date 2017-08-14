function Player(x, y) { // The player class, the only manually controllable game object.
	
	Game_Object.call(this, x, y, 10, 10); // Class inheritance.
	
	this.xs = 0;
	this.ys = 0;
	
	this.on_floor = false;
	
}

Player.prototype = Object.create(Game_Object.prototype); // Also inheritance.
Player.prototype.constructor = "Player";

Player.prototype.update = function(world) {
	
	count = 0;
	
	if(world) {
		if(keys[key_codes.a]) {
			this.xs -= 0.5;
		}
		if(keys[key_codes.d]) {
			this.xs += 0.5;
		}
	} else {
		if(keys[key_codes.left]) {
			this.xs -= 0.5;
		}
		if(keys[key_codes.right]) {
			this.xs += 0.5;
		}
	}
	
	this.xs *= 0.8;
	
	if(this.on_floor) {
		if(world) {
			if(keys[key_codes.w]) {
				this.ys = -4;
			}
		} else {
			if(keys[key_codes.up]) {
				this.ys = -4;
			}
		}
	}
	
	this.ys += 0.25;
	
	this.x += this.xs;
	
	if(world) {
		
		for(count = 0; count < light_objects.blocks.length; count++) {
			if(this.collide(light_objects.blocks[count])) {
				if(this.xs > 0) {
					this.x = light_objects.blocks[count].x - this.w;
				} else {
					this.x = light_objects.blocks[count].x + light_objects.blocks[count].w;
				}
				this.xs = 0;
			}
		}
		
		for(count = 0; count < light_objects.walls.length; count++) {
			if(this.collide(light_objects.walls[count])) {
				if(this.xs > 0) {
					this.x = light_objects.walls[count].x - this.w;
				} else {
					this.x = light_objects.walls[count].x + light_objects.walls[count].w;
				}
				this.xs = 0;
			}
		}
		
		for(count = 0; count < light_objects.doors.length; count++) {
			if(this.collide(light_objects.doors[count])) {
				if(this.xs > 0) {
					this.x = light_objects.doors[count].x - this.w;
				} else {
					this.x = light_objects.doors[count].x + light_objects.doors[count].w;
				}
				this.xs = 0;
			}
		}
		
	} else {
		
		for(count = 0; count < dark_objects.blocks.length; count++) {
			if(this.collide(dark_objects.blocks[count])) {
				if(this.xs > 0) {
					this.x = dark_objects.blocks[count].x - this.w;
				} else {
					this.x = dark_objects.blocks[count].x + dark_objects.blocks[count].w;
				}
				this.xs = 0;
			}
		}
		
		for(count = 0; count < dark_objects.walls.length; count++) {
			if(this.collide(dark_objects.walls[count])) {
				if(this.xs > 0) {
					this.x = dark_objects.walls[count].x - this.w;
				} else {
					this.x = dark_objects.walls[count].x + dark_objects.walls[count].w;
				}
				this.xs = 0;
			}
		}
		
		for(count = 0; count < dark_objects.doors.length; count++) {
			if(this.collide(dark_objects.doors[count])) {
				if(this.xs > 0) {
					this.x = dark_objects.doors[count].x - this.w;
				} else {
					this.x = dark_objects.doors[count].x + dark_objects.doors[count].w;
				}
				this.xs = 0;
			}
		}
		
	}
	
	this.y += this.ys;
	this.on_floor = false;
	
	if(world) {
		
		for(count = 0; count < light_objects.blocks.length; count++) {
			if(this.collide(light_objects.blocks[count])) {
				if(this.ys > 0) {
					this.y = light_objects.blocks[count].y - this.h;
					this.on_floor = true;
				} else {
					this.y = light_objects.blocks[count].y + light_objects.blocks[count].h;
				}
				this.ys = 0;
			}
		}
		
		for(count = 0; count < light_objects.walls.length; count++) {
			if(this.collide(light_objects.walls[count])) {
				if(this.ys > 0) {
					this.y = light_objects.walls[count].y - this.h;
					this.on_floor = true;
				} else {
					this.y = light_objects.walls[count].y + light_objects.walls[count].h;
				}
				this.ys = 0;
			}
		}
		
		for(count = 0; count < light_objects.doors.length; count++) {
			if(this.collide(light_objects.doors[count])) {
				if(this.ys > 0) {
					this.y = light_objects.doors[count].y - this.h;
					this.on_floor = true;
				} else {
					this.y = light_objects.doors[count].y + light_objects.doors[count].h;
				}
				this.ys = 0;
			}
		}
		
	} else {
		
		for(count = 0; count < dark_objects.blocks.length; count++) {
			if(this.collide(dark_objects.blocks[count])) {
				if(this.ys > 0) {
					this.y = dark_objects.blocks[count].y - this.h;
					this.on_floor = true;
				} else {
					this.y = dark_objects.blocks[count].y + dark_objects.blocks[count].h;
				}
				this.ys = 0;
			}
		}
		
		for(count = 0; count < dark_objects.walls.length; count++) {
			if(this.collide(dark_objects.walls[count])) {
				if(this.ys > 0) {
					this.y = dark_objects.walls[count].y - this.h;
					this.on_floor = true;
				} else {
					this.y = dark_objects.walls[count].y + dark_objects.walls[count].h;
				}
				this.ys = 0;
			}
		}
		
		for(count = 0; count < dark_objects.doors.length; count++) {
			if(this.collide(dark_objects.doors[count])) {
				if(this.ys > 0) {
					this.y = dark_objects.doors[count].y - this.h;
					this.on_floor = true;
				} else {
					this.y = dark_objects.doors[count].y + dark_objects.doors[count].h;
				}
				this.ys = 0;
			}
		}
		
	}
	
};

Player.prototype.draw = function(pencil) { // Render the player.
	
	pencil.beginPath();
	pencil.fillStyle = (pencil.world ? "#0076D6" : "#FF8929");
	pencil.fillRect(this.x, this.y, this.w, this.h);
	
};