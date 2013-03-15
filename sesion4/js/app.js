console.log("app JS ");

/*var content=document.getElementById("content");

function ocultar()
{
	//content.css... ocultar
	console.log("ocultar ");
}
*/
var VERSION=1.0;
var estado;

$(document).ready(function()
	{
		//esta listo para iniciar script 
		console.log("READY ");
		$("#content").show();
		estado=true;

	});

function ocultar()
{
	//var content=document.getElementById("content");
	if(estado)
	{
		$("#content").hide();
		estado=false;
	}else
	{
		$("#content").show();
		estado=true;
	}
}