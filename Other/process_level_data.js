function process_level_data(text) { // Turn readable level data into JSON.
	
	level_data = text;
	pointer = 0; // The pointer to where the data is being read.
	
	level_JSON = {};
	
	while(pointer < level_data.length) { // Read data until you reach the end.
		
		let section = expect("section");
		level_JSON[section[0]] = section[1];
		
	}
	
	return level_JSON;
	
}

function expect(part) { // Expect a certain thing from the data.
	
	switch(part) {
		
		case "section":
			
			pointer++; // [
			skip();
			var section_name = expect("name"); // Title
			
			next_line(); // ] and comments
			skip();
			
			var section_data = {};
			
			while(level_data[pointer] != "[" && pointer < level_data.length) { // Until we find another section or the E.O.F.
				
				if(level_data[pointer] == ">") {
					
					let object = expect("unique object");
					section_data[object[0]] = object[1];
					
				}
				
				if(level_data[pointer] == "$") {
					
					let object = expect("object");
					if(!section_data[object[0]]) {
						
						section_data[object[0]] = [];
						
					}
					section_data[object[0]].push(object[1]);
					
				}
				
			}
			
			skip();
			
			return [section_name, section_data];
		
		case "name": // Like a variable name.
			
			var name = "";
			
			while(/[A-Za-z]/.test(level_data[pointer]) && pointer < level_data.length) { // Read chars until the name's done.
				
				name += level_data[pointer];
				pointer++;
				
			}
			
			return name;
		
		case "unique object": // Like a javascript object variable!
			
			pointer++; // >
			skip();
			
			var name = expect("name"); // The variable's name.
			
			skip();
			pointer++; // -
			next_line();
			skip();
			
			var attributes = {}; // The object attributes.
			
			while(!/[\$>\[]/.test(level_data[pointer]) && pointer < level_data.length) { // Loop until the object definition is over.
				
				let attribute = expect("attribute");
				
				attributes[attribute[0]] = attribute[1];
				
			}
			
			skip();
			
			return [name, attributes];
		
		case "object": // Like a javascript object (but this time, in an array)!
			
			pointer++; // $
			skip();
			
			var name = expect("name"); // The array's name.
			
			skip();
			pointer++; // -
			next_line();
			skip();
			
			var attributes = {}; // The object attributes.
			
			while(!/[\$>\[]/.test(level_data[pointer]) && pointer < level_data.length) { // Loop until the object definition is over.
				
				let attribute = expect("attribute");
				
				attributes[attribute[0]] = attribute[1];
				
			}
			
			skip();
			
			return [name, attributes];
		
		case "attribute":
			
			var name = expect("name");
			
			skip();
			pointer++; // -
			skip();
			
			var value = expect("number");
			
			next_line();
			skip();
			
			return [name, value];
		
		case "number":
			
			var number = "";
			
			while(/\d/.test(level_data[pointer]) && pointer < level_data.length) { // Get all the numbers!
				
				number += level_data[pointer];
				pointer++;
				
			}
			
			return +number;
		
	}
	
}

function skip() { // Skip past whitespace!
	
	while(/\s/.test(level_data[pointer]) && pointer < level_data.length) { // While we can't find a non-whitespace character or E.O.F. ...
		
		pointer++; // ...we keep on moving along the file.
		
	}
	
}

function next_line() { // skip one line of data. (till a line feed is encountered)
	
	while(!/[\n\r]/.test(level_data[pointer]) && pointer < level_data.length) { // Keep on skipping till a newline is encountered. (also E.O.F.)
		
		pointer++;
		
	}
	
	pointer++; // Then skip the whitespace itself!
	
}