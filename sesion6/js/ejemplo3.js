var btn;
var div1,div2,div3;
$(document).ready(function()
{
	init();
})

function init()
{
	//inicializar variables
	btn=$("#btn");
	div1= $("#div01");
	div2= $("#div02");
	div3= $("#div03");

	div1.hide();
	div2.hide();
	div3.hide();
	//eventos
	btn.click(function()
	{
		//div.fadeIn();
		//div.fadeIn("slow");
		div1.fadeIn(500);//milisegundos
		div2.fadeIn(700);//milisegundos
		div3.fadeIn(1000,fadeComplete);//milisegundos
	});

}
function fadeComplete()
{
	//alert("fade complete ")

	div1.fadeOut(2000);//milisegundos
	div2.fadeOut(1800);//milisegundos
	div3.fadeOut(1600);
}