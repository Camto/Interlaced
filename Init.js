function Init() { // Setup!
	
	// Light_World is the light world (with the dark world overlayed on top). It is the visible game screen too.
	
	Light_World = document.createElement("canvas");
	
	Light_World.width = 400;
	Light_World.height = 400;
	
	light_draw = Light_World.getContext("2d");
	document.body.appendChild(Light_World);
	
	// Style!
	
	Light_World.style.position = "absolute";
	Light_World.style.margin = "auto";
	Light_World.style.top = "0";
	Light_World.style.left = "0";
	Light_World.style.bottom = "0";
	Light_World.style.right = "0";
	
	// Dark_World is the dark world (to be overlayed on the light world).
	
	Dark_World = document.createElement("canvas");
	
	Dark_World.width = 400;
	Dark_World.height = 400;
	
	dark_draw = Dark_World.getContext("2d");
	
	// No need for style becuase the dark world canvas is invisible!
	
	// Add keyboard events.
	
	Keys_Setup(window, Light_World); // The visible screen is the one that gets the events.
	
	// Game objects.
	
	light_objects = { // Objects in the light world.
		
		player: {}, // The controllable player.
		blocks: [], // Blcks the player c
		walls: [], // World walls.
		switches: [], // Buttons that open doors.
		doors: [], // Locked doors.
		exit: {} // Level ends
		
	};
	
	dark_objects = { // Objects in the dark world.
		
		player: {}, // Same as for light objects.
		blocks: [],
		walls: [],
		switches: [],
		doors: [],
		exit: {}
		
	};
	
}