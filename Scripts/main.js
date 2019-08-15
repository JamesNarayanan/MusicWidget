function mainUpdate(type){
	if(type == "music"){
		if(title != "(null)") {
			document.getElementById("title").innerHTML = title;
			document.getElementById("artist").innerHTML = artist;
			document.getElementById("albumTitle").innerHTML = album;

			document.getElementById("albumArtPlaceholder").hidden = true;
			document.getElementById("albumArt").hidden = false;

			document.getElementById("musicInfoPlaceholderContainer").hidden = true;
                        document.getElementById("musicInfoContainer").hidden = false;

			document.getElementById("albumArt").src = "/var/mobile/Documents/Artwork.jpg#" + new Date().getTime();
		}
		else {
			document.getElementById("albumArtPlaceholder").hidden = false;
			document.getElementById("albumArt").hidden = true;

			document.getElementById("musicInfoPlaceholderContainer").hidden = false;
                        document.getElementById("musicInfoContainer").hidden = true;
		}
	}
}

function goToAppleMusic() {
	window.location = 'xeninfo:openapp:com.apple.Music';
}

function playpause() {
	if(isplaying) {
		document.getElementById("pauseBtn").hidden = true;
		document.getElementById("playBtn").hidden = false;
	}
	else {
		document.getElementById("pauseBtn").hidden = false;
		document.getElementById("playBtn").hidden = true;
	}
	window.location = 'xeninfo:playpause';
}
function nexttrack() {
	window.location = 'xeninfo:nexttrack';
}
function prevtrack() {
	window.location = 'xeninfo:prevtrack';
}
