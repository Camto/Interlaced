function process_level_data(text) { // Turn readable level data into JSON.
	
	level_data = text;
	pointer = 0; // The pointer to where the data is being read.
	
	level_JSON = {};
	
	while(pointer < level_data.length) { // Read data until you reach the end.
		
		let section = expect("section");
		level_data[section[0]] = section[1];
		
	}
	
}

function expect(part) { // Expect a certain thing from the data.
	
	switch(part) {
		
		case "section":
			
			pointer++; // [
			skip();
			var section_name = expect("name"); // Title
			
			next_line();
			skip();
			
			var section_data = {};
			
			while(level_data[pointer] != "[" || pointer == level_data.length) { // Until we find another section or the E.O.F.
				
				if(level_data[pointer] == ">") {
					
					let object = expect("unique object");
					section_data[object[0]] = object[1];
					
				}
				
				if(level_data[pointer] == "$") {
					
					let object = expect("object");
					section_data[object[0]] = object[1];
					
				}
				
			}
			
			skip();
			
			return [section_name, section_data];
		
		case "name":
			
			var name = "";
			
			while(/A-Za-z/.test(level_data[pointer])) {
				
				name += level_data[pointer];
				
			}
			
			return name;
		
	}
	
}

function skip() { // Skip past whitespace!
	
	while(/[\t ]/.test(level_data[pointer]) || pointer == level_data.length) { // While we can't find a non-whitespace character or E.O.F. ...
		
		pointer++; // ...we keep on moving along the file.
		
	}
	
}

function next_line() { // Skip one line of data. (till a line feed is encountered)
	
	while(/[\n\r]/.test(level_data[pointer]) || pointer == level_data.length) { // Keep on skipping till a newline is encountered. (also E.O.F.)
		
		pointer++;
		
	}
	
	pointer++; // Then skip the whitespace itself!
	
}