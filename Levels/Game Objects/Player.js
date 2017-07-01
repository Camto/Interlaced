function Player(x, y) { // The player class, the only manually controllable game object.
	
	Game_Object.call(this, x, y, 10, 10); // Class inheritance.
	
	this.xs = 0;
	this.ys = 0;
	
}

Player.prototype = Object.create(Game_Object.prototype); // Also inheritance.
Player.prototype.constructor = "Player";

Player.prototype.update = function(world) {
	
	
	
};

Player.prototype.draw = function(pencil) {
	
	pencil.beginPath();
	pencil.fillStyle = (pencil.world ? "#57E9FF" : "#A66BFF");
	
};