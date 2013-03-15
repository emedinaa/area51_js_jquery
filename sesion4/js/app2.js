console.log("app JS ");

var estado;

$(document).ready(function()
	{
		//esta listo para iniciar script 
		console.log("READY ");
		estado=true;
		$("#content").show();
		//$("#btnToggle").click(ocultar);//iniciando el evento
		$("#btnToggle").click(function()
		{
			$("#content").toggle();
		});//iniciando el evento
		//
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