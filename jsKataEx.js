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
			.text(trueOrFalse ? "fail" : "pass")
			.css("color", trueOrFalse ? "red" : "green");
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
			div.append($("<strong>").text(" " + (v ? v.toString() : "null")));
			div.append($("<span>").text(" equals "));
			div.append($("<strong>").text(" " + (e ? e.toString() : "null")));
			div.append($("<span>").html(" " + msg));

			this.assert(v == e, div.html());
		},
		assert:function(trueOrFalse, msg) {
			if (!msg) msg = " is true";
			var div = $("<div>");
				
			div.append(failOrPass(trueOrFalse));
			div.append($("<span>").html(msg));

			this.container().append(div);
		},
		assertNot:function(trueOrFalse, msg) {
			if (!msg) msg = " is false";
			
			var div = $("<div>");
				
			div.append(failOrPass(trueOrFalse));
			div.append($("<span>").text(msg));

			this.container().append(div);

		}
	}
})();
