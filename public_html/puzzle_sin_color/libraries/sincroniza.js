function guardar_estado()
{
  let uid = $("#uid").text();
//let gid = $("#gid").text();

	$.post("../puzzle_sin_color/servicios/insercion_Juego_puzzle_sin_color.php", {uid : uid, Estado: vectorestado.toString()} )
	.done(function( data ) {
		//alert( "Data Loaded: " + data );
	});





}
