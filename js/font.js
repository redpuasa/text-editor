var fonts = 
["Bebas Neue","Caveat",
"Cookie","Great Vibes",
"Indie Flower", "Playball",
"Kaushan Script","Kiwi Maru",
"Lato","Lobster Two",
"Merriweather","PT Sans",
"Pacifico","Parisienne",
"Roboto","Sacramento",
"Satisfy","Shadows Into Light","Syne Mono",
"Yanone Kaffeesatz","Tangerine"];

var select = document.getElementById("fFamily");
for(var a = 0; a < fonts.length ; a++){
	var opt = document.createElement("option");
	opt.value = opt.innerHTML = fonts[a];
	opt.style.fontFamily = fonts[a];
	select.add(opt);
}

function family(fonts) {
	var font = document.getElementById("content");
	font.style.fontFamily = fonts.value;
}

function changeSize(n) {
    var size = document.getElementById("content");
    size.style.fontSize = n.value + "px";
}