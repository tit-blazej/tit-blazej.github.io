var data = new Date();
var d=data.getDate();
var m=(data.getMonth()+1);
var y=data.getFullYear();
var g=data.getHours();
var min=data.getMinutes();
var calosc=d+'/'+m+'/'+y+' | '+g+':'+min;
document.getElementById('czas').innerHTML= calosc;

var mw=6-m;
if(d>26){
mw--;
var dw=30-1;
}
else{
dw=26-d;
}
var w='miesięcy: '+mw+'<br>'+'dni: '+dw;
document.getElementById('wakacje').innerHTML=w;

var me=6-m;
if(d>22){
me--;
var de=30-2;
}
else{
de=22-d;
}
var e='miesięcy: '+me+'<br>'+'dni: '+de;
document.getElementById('egzamin').innerHTML=e;

var ms=9-m;
if(d>1){
ms--;
var ds=31-d;
}
else{
ds=1-d;
}
var sz='miesięcy: '+ms+'<br>'+'dni: '+ds;
document.getElementById('szkola').innerHTML=sz;

