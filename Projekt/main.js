var container = document.getElementById('container');
var stick = document.getElementById('stick');

let menuOpen = false;
container.onclick = function(){
	if (!menuOpen){
		stick.classList.add('open');
		menuOpen = true;
	}
	else{
		stick.classList.remove('open');
		menuOpen = false;
	}
}