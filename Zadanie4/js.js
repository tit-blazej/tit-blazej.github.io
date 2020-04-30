function sprawdz(){
	var l=8;
	var a=document.getElementById("pole").value;
	
	if(a<l || a==l || a>l){
	if(a>l){ 
	alert("Liczba jest mniejsza...Próbuj dalej!");
	document.getElementById("pole").value=null;
	}
	if(a<l){ 
	alert("Liczba jest większa...Próbuj dalej!");
    delete a;
	document.getElementById("pole").value=null;
	}
	if(a==l){ 
	alert("Brawo!...To ta liczba!");
	document.getElementById("pole").value=null;
	}
	}
	else{
    alert("Błąd");
	document.getElementById("pole").value=null;
	}
}	