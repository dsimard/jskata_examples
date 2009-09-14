function load() {
	$.getJSON(
		"http://api.flickr.com/services/rest/?jsoncallback=?",
		{ method : "flickr.photos.search",
			api_key : "4ef2fe2affcdd6e13218f5ddd0e2500d",
			format : "json",
			tags : "landscape",
			sort : "relevance",
			per_page: 50
		},
		ajaxCallBack
	);
}

function ajaxCallBack(data) {
	// Loop throught all photos and display them
	// it uses the jquery.each method ( http://docs.jquery.com/Utilities/jQuery.each )
	$.each(data.photos.photo, function(photoIdx, photo) {
		console.log(photo);
		var url = ["http://farm", photo.farm, ".static.flickr.com/", 
			photo.server, "/", photo.id, "_", photo.secret, "_t.jpg"].join("");

		$("body").append(
			$("<img>").attr("src", url)
		)
	});
}
