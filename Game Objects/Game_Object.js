function Game_Object(x, y, w, h) { // The default game object.
	
	this.w = w;
	this.h = h;
	
	this.x = x - this.w / 2; // The x and y are in the middle in the level data, so put them in the corner.
	this.y = y - this.h / 2;
	
}

Game_Object.prototype = {
	
	collide: function(object2) { // AABB.
		return ((this.x < (object2.x + object2.w)) && ((this.x + this.w) > object2.x) && (this.y < (object2.y + object2.h)) && ((this.y + this.h) > object2.y));
	}
	
};