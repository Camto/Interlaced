function Player(x, y) { // The player class, the only manually controllable game object.
	
	Game_Object.call(this, x, y, 10, 10);
	
	this.xs = 0;
	this.ys = 0;
	
}

Player.prototype = Object.create(Game_Object.prototype);
Player.prototype.constructor = "Player";

Player.prototype.update = function(world) {
	
	
	
};

Player.prototype.draw = function(pencil) {
	
	
	
};