function Exit() { // You can do it! You can beat the level!!!
	
	Game_Object.call(this, x, y, w, h); // Class inheritance.
	
}

Exit.prototype = Object.create(Game_Object.prototype); // Also inheritance.
Exit.prototype.constructor = "Exit";

Exit.prototype.draw = function(pencil) {
	
	
	
}