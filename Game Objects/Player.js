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
	
};

Player.prototype.draw = function(pencil) {
	
	pencil.beginPath();
	pencil.fillStyle = (pencil.world ? "#0076D6" : "#FF8929");
	pencil.fillRect(this.x, this.y, this.w, this.h);
	
};