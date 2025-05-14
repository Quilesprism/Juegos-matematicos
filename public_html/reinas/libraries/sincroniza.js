function guardar_estado()
{
	// uid = $("#uid").html();

	$.post( "http://escalera.juegosmatematicos.online/servicios/insercion_Juego_puzzle.php", {estado: estadoActual, vector: vectordb, err : err.toString()} )
	.done(function( data ) {
		//alert( "Data Loaded: " + data );
	});
	// alert("estadoActual:"+movimiento_v);
	// alert("Llevas 20 movimientos");




}
