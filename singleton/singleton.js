function Cats() {
	var names = [];
	
	// The private variable containing the instance
	var singletonInstance = null;

	// Get the instance of the Cats class
	// If there's none, instanciate one
	var getInstance = function() {
		if (!singletonInstance) singletonInstance = createInstance();
		return singletonInstance;
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
