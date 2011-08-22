function Cats() {
	var names = [];
 

	// Get the instance of the Cats class
	// If there's none, instanciate one
	var getInstance = function() {
		if (!Cats.singletonInstance) { 
			Cats.singletonInstance = createInstance();
		}
		return Cats.singletonInstance;
	}
	
	// Create an instance of the Cats class
	var createInstance = function() {
		// Here, you return all public methods and variables
		return {
			add : function(name) {
				names.push(name);
				return this.names();
			},
			names : function() {
				return names;
			}
		}
	}
	
	return getInstance();
}

function run() {
	// Add a new cat
	var cat1 = new Cats();
	cat1.add("Mistigri");
	jsKataEx.assert(cat1.names().length == 1, "cat1 contains 1 cat : " + cat1.names().toString());
	 
	// Use another instance
	var cat2 = new Cats();
	jsKataEx.assert(cat2.names().length == 1, "cat2 contains Mistigri added in cat1 : " + cat2.names().toString());
	 
	// Add another cat in the other instance
	cat2.add("Felix");
	jsKataEx.assert(cat2.names().length == 2, "cat2 contains Mistigri and Felix" + cat2.names().toString());
	jsKataEx.assert(cat2.names().length == 2, "cat1 also contains Mistigri and Felix" + cat1.names().toString());
}
