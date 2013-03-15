var version;
var divW;
var divH;

$(document).ready(function()
{
	console.log("ready");
	init();
});

//init , definir variables , eventos
//pause
//destroy
function init()
{
	//inicializar variables
	version=1.0;
	divW=$("#div1").width();//ancho del div
	divH=$("#div1").height(); //alto dle div

	//eventos
	$("#btnOn").click(function(){
		$("#div1").click(click_handler);
		$("#div1").dblclick(dblclick_handler);
		$("#div1").mouseenter(mousenter_handler);//over
		$("#div1").mouseleave(mouseleave_handler);//out
	})
	$("#btnOff").click(function(){$("#div1").off()})

	$("#div1").click(click_handler);
	$("#div1").dblclick(dblclick_handler);
	$("#div1").mouseenter(mousenter_handler);//over
	$("#div1").mouseleave(mouseleave_handler);//out


	//ON OFF
	/*$("#div1").on("click",function);//activo
	$("#div1").off();//desactivo
	//bind unbind
	$("#div1").bind("click",function);
	$("#div1").unbind("click",function);*/

}
function destroy()
{

}

function click_handler(e)
{
	//console.log("click "," e.target ",e.target, " ",$(e.target));
	console.log("click ",$(e.target));
	//$(e.target).hide();
	//$(e.target).off();
}

function dblclick_handler(e)
{
	console.log("dblclick");
	//$(e.target).on();
}
function mousenter_handler(e)
{
	console.log("mousenter");//over
	//$('#div1')
	$(e.target).css("background",'#ffff00');
	//$(e.target).css("width",'250px');
	//$(e.target).css("height",'150px');
	transformScale(1.5,$(e.target),divW,divH);
}
function mouseleave_handler(e)//out
{
	console.log("mouseleave");
	$(e.target).css("background",'#ff00ff');
	//$(e.target).css("width",'200px');
	//$(e.target).css("height",'100px');
	transformScale(1,$(e.target),divW,divH);
}

// transformaciones
function transformScale(_scale,_obj,_divW,_divH)//0-1 0.5 1 1.5
{
	var w=_divW//_obj.width();
	var h=_divH//_obj.height();

	console.log("w ",w);
	console.log("h ",h);

	var nw= w*_scale +"px";
	var nh= h*_scale +"px";

	_obj.css("width",nw);
	_obj.css("height",nh);
}