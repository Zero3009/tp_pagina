var arbol = document.getElementsByClassName("tree");
var i;
for (i = 0; i < arbol.length; i++) {
	arbol[i].addEventListener("click", function() {
	    this.parentElement.querySelector(".nested").classList.toggle("active");
	    this.classList.toggle("check-tree");
  	});
}