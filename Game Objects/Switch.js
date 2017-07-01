function Switch(x, y, d, k) { // Press me to open a door!
	
	Game_Object.call(this, x, y, w, h); // Class inheritance.
	
	this.key = k;
	interdimensional[this.key] = false;
	
}

Switch.prototype = Object.create(Game_Object.prototype); // Also inheritance.
Switch.prototype.constructor = "Switch";

Switch.prototype.update = function(world) {
	
	if(!interdimensional[this.key] && this.collide(world.player)) { // If the player is touching the switch and the key is unset...
		
		interdimensional[this.key] = true; // ...set the key!
		
	}
	
};

Switch.prototype.draw = function(pencil) {
	
	pencil.beginPath();
	pencil.fillStyle = (pencil.world ? "#FF0000" : "#0000FF");
	
	if(!interdimensional[this.key]) { // If the switch HASN'T been pressed.
		
		pencil.arc(this.x, this.y, 10, 1 * Math.PI, 2 * Math.PI);
		
	} else { // If the switch has been pressed.
		
		pencil.arc(this.x, this.y + 2.5, 10, 7 * Math.PI / 6, 11 * Math.PI / 6);
		
	}
	
	pencil.closePath();
	pencil.fill();
	
}