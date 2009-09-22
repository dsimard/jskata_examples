


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
	console.log("cat1 contains 1 cat", cat1.names());

	// Use another instance
	var cat2 = new Cats();
	console.log("cat2 contains Mistigri added in cat1", cat2.names());
	
	// Add another cat in the other instance
	cat2.add("Felix");
	console.log("cat2 contains Mistigri and Felix", cat2.names());
	console.log("cat1 also contains Mistigri and Felix", cat1.names());
}
