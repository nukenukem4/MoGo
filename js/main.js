 window.onload = function() {


var menu = document.getElementById('menu');
var textMenu = document.getElementById("textMenu");
var close = document.getElementById("close");

function openMenu () {
	textMenu.classList.toggle("open");
};

menu.onclick = openMenu;
close.onclick = openMenu;

 };

