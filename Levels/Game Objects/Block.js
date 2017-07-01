function Block(x, y, w, h) { // Platforms the player can stand on.
	
	Game_Object.call(this, x, y, w, h); // Class inheritance.
	
}

Block.prototype = Object.create(Game_Object.prototype); // Also inheritance.
Block.prototype.constructor = "Block";

Block.prototype.draw = function(pencil) {
	
	
	
}