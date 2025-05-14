<?php
$servername = "localhost"; //El nombre FQDN del servidor donde corre el motor de base de datos, usualmente Localhost(mismo servidor donde corre PHP y almacenamos este archivo), pero puede usarse cualquiera al que se tenga acceso
$username = "u573036680_puzzle"; // Revisar en la configuración de la base de datos
$password = "Puzzle2023*MET-2022"; // Revisar en la configuración de la base de datos
$dbname = "u573036680_puzzle";  //Revisar en la configuración de la base de datos
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error)
{
  die("La conexión falló: " . $conn->connect_error);
}
else {

    // $sql ="SELECT * FROM Juegos WHERE 1 ";
////////////////////////////////////////////////
    $sql ="SELECT Juegos.numero_registro, Juegos.fechas_hora, Juegos.id_juego, Juegos.id_jugador, Juegos.estado, Juegos.vector, Jugadores.edad, Jugadores.pais, Jugadores.genero, Jugadores.institucion FROM Juegos INNER JOIN Jugadores ON Juegos.id_jugador = Jugadores.id";

/////////////////////////////////////////////////
}
// ////////////////////////

$result =  $conn->query($sql);

if (!$result) {
 echo ("Datos no disponibles");
}
$t=time();
$fecha = date("hms-Ymd",$t);
$f = fopen('datos/data-puzzle-'.$fecha.'-'.uniqid().'-.csv', 'w');
if (!$f)
{
    echo("No es posible crear el archivo");
}
$nd =0;
fputcsv('id, fecha',0);
while ($row = $result->fetch_assoc()) {
    fputcsv($f, $row);
    $nd =$nd+1;
}
echo ("Archivo de datos generado con éxito con $nd registros // Data file successfully generated $nd logs are ready");
$conn->close();

echo '<script type="text/javascript">
           window.location = "http://juegosmatematicos.online/puzzle/data/datos"
      </script>';

?>
