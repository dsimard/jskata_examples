function Cats() {
	var names = [];

	getInstance = function() {
		if (!Cats.singleton_instance) Cats.singleton_instance = createInstance();
		return Cats.singleton_instance;
	}
	
	createInstance = function() {
		return {
			add : function(name) {
				names.push(name);
				return this.names;
			},
			names : function() {
				return names;
			}
		}
	}
	
	return getInstance();
}

function load() {
	// Add a new cat
	var cat1 = new Cats();
	cat1.add("Mistigri");
	
	test("Add Mistigri as a cat1", function() {
		equals(cat1.names().length, 1, "There's one cat");
		equals(cat1.names()[0], "Mistigri", "Mistigri is added as a cat");
	});
	
	// Use another instance
	var cat2 = new Cats();
	
	test("Mistigri is available in cat2", function() {
		equals(cat2.names().length, 1, "There's one cat");
		equals(cat2.names()[0], "Mistigri", "Mistigri is available in cat2");
	});
	
	// Add another cat in the other instance
	cat2.add("Felix");
	
	test("There's 2 cats in cat2", function() {
		equals(cat2.names().length, 2, "There's one cat");
		equals(cat2.names()[1], "Felix", "The new cat is Felix");
	});
}
