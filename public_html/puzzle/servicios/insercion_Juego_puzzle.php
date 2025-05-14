<?php
session_start();
include("conex_based.php");
//$servername = "localhost"; //El nombre FQDN del servidor donde corre el motor de base de datos, usualmente Localhost(mismo servidor donde corre PHP y almacenamos este archivo), pero puede usarse cualquiera al que se tenga acceso
//$username = "u573036680_MET"; // Revisar en la configuración de la base de datos
//$password = "PuzzleSinColor_2023"; // Revisar en la configuración de la base de datos
//$dbname = "u573036680_puzzle_sin_col";  //Revisar en la configuración de la base de datos

// Create connection
if ($conex->connect_error) {
  die("La conexión falló: " . $conex->connect_error);
}

$id_jugador= trim($_SESSION["uid"]);
$estadoActual = $_POST["Estado"];




$sql = "INSERT INTO Movimientos (id_jugador , estado)
VALUES ('$id_jugador', '$estadoActual')";

if ($conex->query($sql) === TRUE) {
  echo "Continua Jugando";
} else {
  echo "Error: " . $sql . "<br>" . $conex->error;
}
echo $$parametro1;
include("cerrar_conexion.php");

?>
