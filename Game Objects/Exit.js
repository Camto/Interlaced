function Exit(x, y, w, h) { // You can do it! You can beat the level!!!
	
	Game_Object.call(this, x, y, w, h); // Class inheritance.
	
}

Exit.prototype = Object.create(Game_Object.prototype); // Also inheritance.
Exit.prototype.constructor = "Exit";

Exit.prototype.draw = function(pencil) {
	
	pencil.beginPath();
	pencil.fillStyle = (pencil.world ? "#1414FF" : "#EBEB00");
	pencil.fillRect(this.x, this.y, this.w, this.h);
	
}