var imagearray1 = ["images/litsection.jpg","images/busstand.jpg"]
var len1 = imagearray1.length;
var i =0;

window.onload = function(){
	setInterval(function(){
	document.getElementById('bench').setAttribute('src',imagearray1[i]);
	i = (i+1)%len1;
	},2500); 

}