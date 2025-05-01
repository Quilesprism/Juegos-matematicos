function aja()
let uid = document.getElementById("uid").html;
{
	$.post( "../servicios/insercion_Juego_a.php", {parametro1: ind_ramN, parametro2 : ind_nr, parametro3 : ind_conf } )
	.done(function( data ) {
		alert( "Data Loaded: " + data );
	});
	alert("uid");
	alert("Llevas 20 movimientos");
	
	


}