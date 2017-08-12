function Player(x, y) { // The player class, the only manually controllable game object.
	
	Game_Object.call(this, x, y, 10, 10); // Class inheritance.
	
	this.xs = 0;
	this.ys = 0;
	
}

Player.prototype = Object.create(Game_Object.prototype); // Also inheritance.
Player.prototype.constructor = "Player";

Player.prototype.update = function(world) {
	
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
	this.x += this.xs;
	
	if(world) {
		
		for(var count = 0; count < light_objects.blocks.length; count++) {
			if(this.collide(light_objects.blocks[count])) {
				this.x = light_objects.blocks[count].x - this.w;
			}
		}
		
	} else {
		
		for(var count = 0; count < dark_objects.blocks.length; count++) {
			if(this.collide(dark_objects.blocks[count])) {
				this.x = dark_objects.blocks[count].x - this.w;
			}
		}
		
	}
	
};

Player.prototype.draw = function(pencil) {
	
	pencil.beginPath();
	pencil.fillStyle = (pencil.world ? "#0076D6" : "#FF8929");
	pencil.fillRect(this.x, this.y, this.w, this.h);
	
};