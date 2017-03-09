window.onload = function(){
	var w = window.innerWidth;
	var h = window.innerHeight;
	// alert(h);
	// alert(w);
	if(w < 480){
		// alert(w);
		var footer_info = document.getElementsByClassName("footer-info");
		var logo_img = document.getElementsByClassName("logo-150px");

		logo_img[0].style.margin = "0px " + ((w - 150) / 2) + "px";
	}
}
