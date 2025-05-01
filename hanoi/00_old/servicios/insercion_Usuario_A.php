<?php
session_start();
$_SESSION['nombre'] = $_POST["nombre"];
$_SESSION['uid'] = uniqid();
$_SESSION['idioma'] = $_POST["idioma"];


$uid = $_SESSION['uid'];
$idioma = $_POST["idioma"];

$servername = "localhost"; //El nombre FQDN del servidor donde corre el motor de base de datos, usualmente Localhost(mismo servidor donde corre PHP y almacenamos este archivo), pero puede usarse cualquiera al que se tenga acceso 
$username = "u573036680_david"; // Revisar en la configuración de la base de datos
$password = "Hanoi2021#%"; // Revisar en la configuración de la base de datos
$dbname = "u573036680_hanoi";  //Revisar en la configuración de la base de datos

// Create connection

$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("La conexión falló: " . $conn->connect_error);
}

$nombre = $_POST["nombre"];
$apellido = $_POST["apellido"];
$edad = $_POST["edad"];
$profe =$_POST["profe"];

$sql = "INSERT INTO Jugadores_anonimos (nombre,  apellido, edad, profe, uid, idioma)
VALUES ('$nombre', '$apellido', '$edad', '$profe', '$uid', '$idioma')";

if ($conn->query($sql) === TRUE) {
  echo "Estas listo para jugar $nombre " ;
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}
echo $$parametro1;
$conn->close();
echo "<script> window.location='../juego/'; </script>";
?>