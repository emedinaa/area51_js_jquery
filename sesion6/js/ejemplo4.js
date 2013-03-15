var pnl1,pnl2;

$(document).ready(function()
{
	init();
})

function init()
{
	pnl1=$("#pnl1");
	pnl2=$("#pnl2");

	pnl2.hide();

	pnl1.click(function()
	{
		//pnl2.slideDown("slow");
		pnl2.slideToggle("slow");
	})
}