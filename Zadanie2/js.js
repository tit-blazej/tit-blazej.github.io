function sprawdz(){
	var a=document.getElementById("pole").value;
	if(a<0 || a==0 || a>0){
	if(a>0){ 
	document.getElementById("wynik").innerHTML = "LICZBA DODATNIA";
	}
	if(a<0){ 
	document.getElementById("wynik").innerHTML = "LICZBA UJEMNA";
	}
	if(a==0){ 
	document.getElementById("wynik").innerHTML = "ZERO";
	}
	}
	else{
		document.getElementById("wynik").innerHTML = "TO NIE JEST LICZBA";
	}
}	