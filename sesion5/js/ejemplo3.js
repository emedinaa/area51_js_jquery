$(document).ready(function()
{
	init();
})

function init()
{
	//$("#btn1").bind("click",click_handler);
	$("#btn1").click(activar_handler);
}
function activar_handler(e)
{
	$("#btn2").mousedown(down_handler);
	$("#btn2").mouseup(up_handler);
}
function down_handler(e)
{
	$("#btn2").css("width","200px");
	$("#btn2").css("height","200px");
}
function up_handler(e)
{
	$("#btn2").css("width","100px");
	$("#btn2").css("height","50px");
}