window.onload = function(){
	var w = window.innerWidth;
	var h = window.innerHeight;
	// alert(h);
	// alert(w);
	if(w < 480){
		// alert(w);
		var footer_info = document.getElementsByClassName("footer-info");
		var logo_img = document.getElementsByClassName("logo-150px");
		var nav = document.getElementById("nav");
		var main_info_height = document.getElementsByClassName("main-info")[0].offsetHeight;

		// alert(main_info_height);
		logo_img[0].style.margin = "0px " + ((w - 150) / 2) + "px";
		logo_img[0].style.bottom = -75 + "px";
		nav.style.margin = main_info_height + "px " + ((w - 200) / 2) + "px";
	}
}
