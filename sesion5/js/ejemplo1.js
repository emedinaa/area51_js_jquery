/*
@autor : emedinaa
@email : xxxx
@referencias ...

*/

$(document).ready(function()
{
	console.log("ready");

	init();
	//destroy();
});
function init() //inicializar parámetros
{
	//función anonima
	$("p").click(function()
	{
		//console.log("click >>>");+
		$(this).hide();
	});
	//función específica
	$("#h2").click(click_handler);
	$("#h3").click(click_handler);//$("#h3").click(click_handler3);
	$("#h4").click(click_handler);//$("#h3").click(click_handler3);
	$("#btn").dblclick(dblclick_handler);
}
//función clik handler a todos, comparar por el target
function click_handler(e)
{
	//console.log("click handler ",e.target.id,$("#h2"));
	if( $(e.target).is("#h2") )
	{
		console.log("click handler h2");
	}else if($(e.target).is("#h3"))
	{
		console.log("click handler h3");
	}else if($(e.target).is("#h4"))
	{
		console.log("click handler h4");
	}

	/*switch($(e.target))
	{
		case "#h2"
	}*/
}

function dblclick_handler(e)
{
	console.log("dbclick handler ",e.target);
}
function destroy() //remover events...
{

}