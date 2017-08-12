function Door(x, y, w, h, k) { // Open me with a keeeeey...
	
	Game_Object.call(this, x, y, w, h); // Class inheritance.
	this.k = k;
	
}

Door.prototype = Object.create(Game_Object.prototype); // Also inheritance.
Door.prototype.constructor = "Door";

Door.prototype.update = function(world) {
	
	
	
};

Door.prototype.draw = function(pencil) {
	
	pencil.beginPath();
	pencil.fillStyle = (pencil.world ? "#C61553" : "#39EAAC");
	pencil.fillRect(this.x, this.y, this.w, this.h);
	
}