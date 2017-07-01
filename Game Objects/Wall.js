function Wall(x, y, w, h) { // Walls to keep the player from falling off the edge of the world!
	
	Game_Object.call(this, x, y, w, h); // Class inheritance.
	
}

Wall.prototype = Object.create(Game_Object.prototype); // Also inheritance.
Wall.prototype.constructor = "Wall";

Wall.prototype.draw = function(pencil) {
	
	
	
}