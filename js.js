function getTime() 
{
return (new Date()).toLocaleTimeString();
}
document.getElementById('zegar').innerHTML = getTime();
 
setInterval(function() {
document.getElementById('zegar').innerHTML = getTime();    
}, 1000);	