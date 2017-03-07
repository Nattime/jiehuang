var isClicked = false;
var left_column = document.getElementsByClassName("left-column");
var right_column = document.getElementsByClassName("right-column");
var hidden_menu = document.getElementsByClassName("hidden-item");
var menu_icon = document.getElementsByClassName("menu-icon");
var list_icon = document.getElementsByClassName("list-icon");
var menu_item_container = document.getElementsByClassName("menu-item-container");
var list_item_container = document.getElementsByClassName("list-item-container");


function openMenu(){
	if(isClicked === false){
		menu_item_container[0].style.width = "90%";
		menu_item_container[0].style.marginLeft = "5%";
		menu_item_container[0].style.marginRight = "5%";
		menu_item_container[0].style.transition = "all .5s linear";
		left_column[0].style.width = "15%";
		left_column[0].style.transition = "all .5s";
		right_column[0].style.width = "85%";
		right_column[0].style.transition = "all .5s";
		menu_icon[0].src = "./img/icons/cross-mark-on-a-black-circle-background.png";
		menu_icon[0].style.width = "30%";
		menu_icon[0].style.transition = "all .2s ease-in-out";

		for(i = 0; i < list_item_container.length; ++i){
			list_item_container[i].style.width = "80%";
			list_item_container[i].style.marginLeft = "10%";
			list_item_container[i].style.marginRight = "10%";
			list_icon[i].style.width = "30%";
			list_item_container[i].style.transition = "all .2s ease";
			list_icon[i].style.transition = "all .2s ease";
		}

		for(i = 0; i < hidden_menu.length; ++i){
			hidden_menu[i].style.display = "block";
			hidden_menu[i].style.transition = "all .8s linear";
		}

		isClicked = true;
	}else{
		menu_item_container[0].style.width = "70%";
		menu_item_container[0].style.marginLeft = "15%";
		menu_item_container[0].style.marginRight = "15%";
		left_column[0].style.width = "5%";
		right_column[0].style.width = "95%";
		menu_icon[0].src = "./img/icons/menu-1.png";
		menu_icon[0].style.width = "100%";

		for(i = 0; i < hidden_menu.length; ++i){
			hidden_menu[i].style.display = "none";
		}

		for(i = 0; i < list_item_container.length; ++i){
			list_item_container[i].style.width = "50%";
			list_item_container[i].style.marginLeft = "25%";
			list_item_container[i].style.marginRight = "25%";
			list_icon[i].style.width = "100%";
		}

		isClicked = false;
	}
}
