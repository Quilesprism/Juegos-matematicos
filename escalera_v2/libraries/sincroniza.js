function guardar_estado()
{
	console.log('done');
	$.post( "http://juegosmatematicos.online/escalera_v2/servicios/insercion_Juego_escalera_v2.php", {Numero_de_Bloques:cantidadBloques,Intento:intento,Estado: estadoActual.join()} )
	.done(function( data ) {
		//alert( "Data Loaded: " + data );
	});
	// alert("estadoActual:"+movimiento_v);
	// alert("Llevas 20 movimientos");

}
