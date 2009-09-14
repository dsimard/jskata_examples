function load() {
	$.getJSON(
		"http://api.flickr.com/services/rest/?jsoncallback=?",
		{ method : "flickr.photos.search",
			api_key : "4ef2fe2affcdd6e13218f5ddd0e2500d",
			format : "json",
			tags : "landscape"
		},
		ajaxCallBack
	);
}

function ajaxCallBack(data) {
	// Loop throught all photos and display them
	// it uses the jquery.each method 
	// doc at http://docs.jquery.com/Utilities/jQuery.each
	$.each(data.photos.photo, function(photoIdx, photo) {
		// Build the thumbnail url
		var thumb_url = ["http://farm", photo.farm, ".static.flickr.com/", 
			photo.server, "/", photo.id, "_", photo.secret, "_t.jpg"].join("");
		
		// Build the photo url
		var photo_url = ["http://www.flickr.com/photos/", 
			photo.owner, "/", photo.id].join("")

		// Build HTML
		$("body").append(
			$("<a>")
				.attr("href", photo_url)
				.attr("target", "_blank")
				.append(
					$("<img>").attr("src", thumb_url)
				)
		)
	});
}
