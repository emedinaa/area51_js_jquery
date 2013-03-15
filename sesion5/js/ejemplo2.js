var w="150px";
var h="150px";
var nw=150;//+"px";
var nh=150;
var scale=1;
var transformX="1px";
var transformY="1px";

$(document).ready(function()
	{
		init();
	}	
)
function init()
{
	//events
	$("#div1").mouseenter(mouseenter_handler);
	$("#div1").mouseleave(mouseleave_handler);

	$("#div2").mousedown(mousedown_handler);
	$("#div2").mouseup(mouseup_handler);
}
function mousedown_handler(e)
{
	//$(e.target).css("background-color","#ff00ff");
	$(e.target).css("width",nw*0.85+"px");
	$(e.target).css("height",nh*0.85+"px");
}
function mouseup_handler(e)
{
	$(e.target).css("width",nw*1+"px");
	$(e.target).css("height",nh*1+"px");
}
function mouseenter_handler(e)
{
	scale=1.2;
	transformX=nw*scale+"px";
	transformY=nw*scale+"px";

	console.log("mouse enter ");
	$(e.target).css("background-color","#ff00ff");
	$(e.target).css("width",transformX);
	$(e.target).css("height",transformY);
	/*$(e.target).css("width",nw*scale+"px");
	$(e.target).css("height",nh*scale+"px");*/
}
function mouseleave_handler(e)
{
	scale=1;
	transformX=nw*scale+"px";
	transformY=nw*scale+"px";

	console.log("mouse leave ");
	$(e.target).css("background-color","orange");
	$(e.target).css("width",nw*scale+"px");
	$(e.target).css("height",nh*scale+"px");
	//$(e.target).css("width",150*1+"px");
	//$(e.target).css("height",150*1+"px");
}