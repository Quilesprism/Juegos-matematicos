function guardar_estado()
{
	console.log('done');
	$.post( "servicios/insercion_Juego_escalera_v2.php", {Numero_de_Bloques:cantidadBloques,Intento:intento,Estado: estadoActual.join()} )
	.done(function(data) {
        console.log("Respuesta del servidor:", data);
    })
    .fail(function(error) {
        console.error("Error en la petición:", error);
    });
	// alert("estadoActual:"+movimiento_v);
	// alert("Llevas 20 movimientos");

}
