$(document).ready(function()
{
	var estado =false;
	$('#btn').click(function()
	{
		if(!estado)
		{
			$("#content").css("background-color","#ff00ff");
			estado=true;
		}else
		{
			$("#content").css("background-color","#ffff00");
			estado=false;
		}
	})
	//$("#content").css.width="200px";
})