 window.onload = function() {

var head = document.getElementsByClassName("head");

for(var i = 0; i < head.length; i++) {
   	head[i].onclick = function(e) {
    var head = e.target;

   while (head != this) {
    head = head.parentNode;
    if (head.className == 'head') {
    	var panel = head.parentNode;
 		panel.classList.toggle("hide");
        return;
   		}
 	}
}

};
};