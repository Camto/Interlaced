function Player(x, y) { // The player class, the only manually controllable game object.
	
	Game_Object.call(this, x, y, 10, 10); // Class inheritance.
	
	this.xs = 0;
	this.ys = 0;
	
}

Player.prototype = Object.create(Game_Object.prototype); // Also inheritance.
Player.prototype.constructor = "Player";

Player.prototype.update = function(world) {
	
	if(Light_World.keys.up) {
		
		this.y--;
		
	}
	
	if(this.y < 0) {console.log(Light_World.keys); this.y = 100} else {this.y--;}
};

Player.prototype.draw = function(pencil) {
	
	pencil.beginPath();
	pencil.fillStyle = (pencil.world ? "#0076D6" : "#FF8929");
	pencil.fillRect(this.x, this.y, this.w, this.h);
	
};