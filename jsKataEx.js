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
	
	return {
		container:function(element) {
			if (element) container = element;
			if (container == null) container = $("body");
			return container;
		},
		title:function() {
			writeLine(arguments, "h3");
		},
		log:function log() {
			writeLine(arguments, "div");
		},
		assertNotNull:function assertNotNull(v, msg) {
			if (!msg) msg = "is not null";
			if (v === undefined) v = null;
			this.assertEqual(v, null, msg);
		},
		assertEqual:function(v, e, msg) {
			if (!msg) msg = [" and ", e, "are equal"].join(" ");
			var div = $("<div>");
			var ok = $("<span>")
				.text(v == null ? "fail" : "pass")
				.css("color", v == null ? "red" : "green");
				
			div.append(ok);
			div.append($("<strong>").text(" " + (v ? v.toString() : "null")));
			div.append($("<span>").text(" " + msg));

			this.container().append(div);
		}
	}
})();
