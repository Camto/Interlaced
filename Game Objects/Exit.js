function Exit(x, y, w, h) { // You can do it! You can beat the level!!!
	
	Game_Object.call(this, x, y, w, h); // Class inheritance.
	
}

Exit.prototype = Object.create(Game_Object.prototype); // Also inheritance.
Exit.prototype.constructor = "Exit";

Exit.prototype.update = function(world) {
	
	if(this.collide(world.player)) {
		
		ingame = false;
		level++;
		
	}
	
}

Exit.prototype.draw = function(pencil) {
	
	pencil.beginPath();
	pencil.fillStyle = (pencil.world ? "#EBEB00" : "#1414FF");
	pencil.fillRect(this.x, this.y, this.w, this.h);
	
}