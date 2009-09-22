// When the page is loaded
function load() {
	var pubCats = new PublicCats();
	var privCats = new PrivateCats();
	
	var log = function log(msg) {
		if (typeof msg == "object" && msg.length) msg = msg.join("");
		$("body").append($("<div>").html(msg));
	}
	
	// Adding a cat is the same
	jsKataEx.title("Add cats");
	jsKataEx.assertNotNull(pubCats.add("Mistigri"), "is added");
	jsKataEx.assertNotNull(pubCats.add("Felix"), "is added");
	jsKataEx.assertNotNull(pubCats.add("Mimi"), "is added");
	jsKataEx.assertNotNull(pubCats.add("Duchess"), "is added");

	// Check scopes
	jsKataEx.title("Check the scopes");
	jsKataEx.assertNotNull(pubCats.nameList, ": I CAN access the private nameList variable from public cats");
	jsKataEx.assertNotNull(privCats.nameList, "I CANNOT access the nameList variable from private cats");
}

// This class uses public variables
function PublicCats() {
	// This is the list of cat names
	this.nameList = [];
	
	// This is a method that I would like to be private but can't
	// It returns the last cat of the list
	this.lastCat = function() {
		return this.nameList[this.nameList.length-1];
	}
	
	// Return the list of names
	this.names = function() {
		return this.nameList;
	}
	
	// Add a name to the list
	this.add = function(name) {
		this.nameList.push(name);
		
		// Return the last cat just added
		return this.lastCat();
	}	
}

// This class uses private variables
function PrivateCats() {
	// This is the list of cat names
	var nameList = [];
	
	// This is a private method
	var lastCat = function() {
		// Note : I don't use "this" to access private variables
		// thanks to the power of closures!
		return nameList[nameList.length-1];
	}
	
	// These are our public methods!
	// This is where we create another scope to
	// avoid external objects to use the private variables.
	return {
		add:function(name) {
			// Note : once again, I don't use "this" 
			// to access the private variables and methods
			nameList.push(name);
			return lastCat();
		},
		names:function() {
			return nameList;
		}
	}	
}
