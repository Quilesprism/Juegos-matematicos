<?php
session_start();
$_SESSION['nombre'] = $_POST["nombre"];
$_SESSION['edad'] = $_POST["edad"];
$_SESSION['pais'] = $_POST["pais"];
$_SESSION['genero'] = $_POST["genero"];
$_SESSION['institucion'] = $_POST["institucion"];
$_SESSION['uid'] = uniqid();
$uid = $_SESSION['uid'];

$servername = "localhost"; // El nombre FQDN del servidor donde corre el motor de base de datos, usualmente Localhost (mismo servidor donde corre PHP y almacenamos este archivo), pero puede usarse cualquiera al que se tenga acceso
$username = "debian-sys-maint"; // Usuario de conexión actualizado
$password = "DRTe05kccpRBhTHg"; // Contraseña de conexión actualizada
$dbname = "BD_escalera_1";  // Base de datos escalera_1

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
  die("La conexión falló: " . $conn->connect_error);
}

$nombre = $_POST["nombre"];
$edad = $_POST["edad"];
$pais = $_POST["pais"];
$genero = $_POST["genero"];
$institucion = $_POST["institucion"];

// Consulta SQL para insertar los datos
$sql = "INSERT INTO Jugadores(id, nombre, edad, pais, genero, institucion)
VALUES ('$uid', '$nombre', '$edad', '$pais', '$genero', '$institucion')";

// Ejecutar la consulta
if ($conn->query($sql) === TRUE) {
  echo "¡Estás listo para jugar, $nombre!";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
echo "<script> window.location='../juego.php'; </script>";
?>
