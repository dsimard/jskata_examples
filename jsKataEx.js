jsKataEx = (function() {
	var container = null;

	function argumentsToArray(args) {
		var a = [];
		for (var i = 0; i < args.length; i++) {
			a.push(args[i]);
		}
		return a;
	}
	
	function writeLine(args, element) {
		jsKataEx.container().append(
			$("<"+element+">").html(
				argumentsToArray(args).join("")
			)
		);
	}
	
	function failOrPass(trueOrFalse) {
		return $("<span>")
			.text(trueOrFalse ? "pass" : "fail")
			.css({
				color:(trueOrFalse ? "green" : "red"),
				fontWeight:"bold"
			});
	}
	
	return {
		// Get or set the container
		container:function(element) {
			if (element) container = element;
			if (container == null) container = $("#results"); // Try #results
			if (container.length == 0) container = $("body"); // Use body instead
			return container;
		},
		// Show a title
		title:function() {
			writeLine(arguments, "h3");
		},
		// Log a line
		log:function log() {
			writeLine(arguments, "div");
		},
		// Assert
		assert:function(pass, msg) {
			this.container()
				.append($("<div>")
					.append(failOrPass(pass))
					.append($("<span>").text(" " + msg))
				);
		},
	}
})();

// If there's a button run, run on click
$(document).ready(function() {
	var runFunction = window.run ? window.run : window.load;
	if ($("#run").length > 0) {
		$("#run").click(runFunction);
	} else {
		// Run on load
		$(document).ready(runFunction);	
	}
});
