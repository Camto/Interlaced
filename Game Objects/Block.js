function Block(x, y, w, h) { // Platforms the player can stand on.
	
	Game_Object.call(this, x, y, w, h); // Class inheritance.
	
}

Block.prototype = Object.create(Game_Object.prototype); // Also inheritance.
Block.prototype.constructor = "Block";

Block.prototype.draw = function(pencil) {
	
	pencil.beginPath();
	pencil.fillStyle = (pencil.world ? "#21C115" : "#DE3EEA");
	pencil.fillRect(this.x, this.y, this.w, this.h);
	
}