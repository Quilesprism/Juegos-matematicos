<?php
session_start();
$_SESSION['nombre'] = $_POST["nombre"];
$_SESSION['edad'] = $_POST["edad"];
$_SESSION['pais'] = $_POST["pais"];
$_SESSION['genero'] = $_POST["genero"];
$_SESSION['institucion'] = $_POST["institucion"];
$_SESSION['uid'] = uniqid();
$uid = $_SESSION['uid'];

$servername = "localhost"; // El nombre FQDN del servidor donde corre el motor de base de datos, usualmente Localhost
$username = "debian-sys-maint"; // Usuario de conexión (utiliza el correcto según el archivo de configuración)
$password = "DRTe05kccpRBhTHg"; // Contraseña de conexión
$dbname = "BD_escalera_1";  // Base de datos escalera_1

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("La conexión falló: " . $conn->connect_error);
}

$nombre = $_POST["nombre"];
$edad = $_POST["edad"];
$pais = $_POST["pais"];
$genero = $_POST["genero"];
$institucion = $_POST["institucion"];

$sql = "INSERT INTO Jugadores(id, nombre, edad, pais, genero, institucion)
VALUES ('$uid','$nombre', '$edad', '$pais', '$genero', '$institucion')";

if ($conn->query($sql) === TRUE) {
  echo "Estas listo para jugar $nombre ";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

echo $$parametro1;
$conn->close();
echo "<script> window.location='../juego.php'; </script>";
?>
