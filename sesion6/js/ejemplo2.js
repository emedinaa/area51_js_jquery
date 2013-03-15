$(document).ready(function()
	{
		init();
	}
)

function click_handler()
{
	$("#div1").css("background","#ffff00");
}
function on_handler(e)
{
	$("#div1").bind("click",click_handler);//agregamos un evento
}


function off_handler(e)
{
	$("#div1").unbind(); //removemos un evento
	//$("#div").unbind("click",click_handler);
	$("#div1").css("background","#ff00ff");
}

function init()
{
	var p=1;
	$("#btnOn").click(on_handler);
	$("#btnOff").click(off_handler);
	
	$("#div1").css("width",$(window).width()*0.5+"px");
	$("#div1").css("height",$(window).height()*0.5+"px");

	//evento resize()
	$(window).resize(function()
	{
		/*console.log("resize" , "w ",$(window).width(), " h "
			,$(window).height());*/
		if($(window).height()==0)return;

		p=$(window).width()/$(window).height();
		console.log("resize ",p);

		/*var w=$("#div1").width();
		var h=$("#div1").height();*/

		//$("#div1").css("width",);

		$("#div1").css("width",$(window).width()*0.5+"px");
		$("#div1").css("height",$(window).height()*0.5+"px");


	})
}