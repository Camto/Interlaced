function Init() { // Setup!
	
	// Light_World is the light world (with the dark world overlayed on top). It is the visible game screen too.
	
	Light_World = document.createElement("canvas");
	
	Light_World.width = 400;
	Light_World.height = 400;
	
	light_draw = Light_World.getContext("2d");
	light_draw.imageSmoothingEnabled = false; // No blurred pixels here!
	light_draw.mozImageSmoothingEnabled = false; // I know it's deprecated, but just in case!
	light_draw.world = true; // To make it simpler, true is light world and false is dark world.
	
	document.body.appendChild(Light_World); // Make the canvas visible.
	
	// All of these styles put the canvas in the middle of the screen.
	
	Light_World.style.position = "absolute";
	Light_World.style.margin = "auto";
	Light_World.style.top = "0";
	Light_World.style.left = "0";
	Light_World.style.bottom = "0";
	Light_World.style.right = "0";
	
	// Dark_World is the dark world (to be overlayed on the light world).
	
	Dark_World = document.createElement("canvas");
	
	Dark_World.width = 100; // It's smaller, but eveything gets resized later so it's okay.
	Dark_World.height = 100;
	
	dark_draw = Dark_World.getContext("2d");
	dark_draw.world = false;
	
	// No need for style becuase the dark world canvas is invisible!
	
	// Add keyboard events.
	
	Keys_Setup(Light_World, Light_World); // The visible screen is the one that gets the events.
	
	// Game objects.
	
	ingame = false; // If your're in a level, or loading one.
	level = 1;
	
	light_objects = { // Objects in the light world.
		
		player: {}, // The controllable player.
		blocks: [], // Blocks the player.
		walls: [], // World walls.
		switches: [], // Buttons that open doors.
		doors: [], // Locked doors.
		exit: {} // Level ends.
		
	};
	
	dark_objects = { // Objects in the dark world.
		
		player: {}, // Same as for light objects.
		blocks: [],
		walls: [],
		switches: [],
		doors: [],
		exit: {}
		
	};
	
	interdimensional = {}; // Variables used by objects in BOTH worlds.
	
}