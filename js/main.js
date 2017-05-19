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

var bottomLeft = document.getElementsByClassName("fa-chevron-left");
var bottomRight = document.getElementsByClassName("fa-chevron-right");
var currentSlide = 0;

for(var i = 0; i < bottomLeft.length; i++) {
   	bottomLeft[i].onclick = function(e) {
   	var slideContainer = e.target.parentNode;
   	var slide = slideContainer.getElementsByClassName("slide");
   	previousSlide();
   	function previousSlide(){
		goToSlide(currentSlide-1);
			}
	function goToSlide(n){
		slide[currentSlide].classList.toggle("hide");
		currentSlide = (n+slide.length)%slide.length;
		slide[currentSlide].classList.toggle("hide");
		}
		};
};

for(var i = 0; i < bottomRight.length; i++) {
   	bottomRight[i].onclick = function(e) {
   	var slideContainer = e.target.parentNode;
   	var slide = slideContainer.getElementsByClassName("slide");
   	 nextSlide();
   	function nextSlide(){
		goToSlide(currentSlide+1);
	}
	function goToSlide(n){
		slide[currentSlide].classList.toggle("hide");
		currentSlide = (n+slide.length)%slide.length;
		slide[currentSlide].classList.toggle("hide");
		}
		};
	};
};