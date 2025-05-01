<?php
session_start();

include("conex_based.php");


if ($conex->connect_error) {
  die("La conexión falló: " . $conex->connect_error);
}


$id = $_SESSION['uid'];
//$nombre = $_SESSION['nombre'];
//$edad = $_SESSION['edad'];
//$pais = $_SESSION['pais'];
//$genero = $_SESSION['genero'];
//$institucion = $_SESSION['institucion'];
//$game_id = $_SESSION['game_id'];


$estadoActual = $_POST["Estado"];
$intento = $_POST["Intento"];
$numeroBloque = $_POST["Numero_de_Bloques"];


$sql = "INSERT INTO Juegos (id_jugador,Numero_de_Bloques, Intento, Estado)
                    VALUES ('$id','$numeroBloque','$intento','$estadoActual')";

if ($conex->query($sql) === TRUE) {
  echo "Continua Jugando";
} else {
  echo "Error: " . $sql . "<br>" . $conex->error;
}
echo $$parametro1;
include("cerrar_conexion.php");

?>