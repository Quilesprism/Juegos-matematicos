<?php
session_start();
$_SESSION["nombre"] = $_POST["nombre"];
$_SESSION["id"] = uniqid();

print "<p>El nombre es $_SESSION[nombre]</p>";
print "<p>El id de sesion es $_SESSION[id]</p>";

$servername = "localhost"; // El nombre FQDN del servidor donde corre el motor de base de datos, usualmente Localhost
$username = "debian-sys-maint"; // Usuario de conexión (puede ser diferente según lo que encuentres en tu sistema)
$password = "DRTe05kccpRBhTHg"; // Contraseña que se encuentra en el archivo de configuración
$dbname = "BD_8reinas";  // Base de datos a utilizar

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("La conexión falló: " . $conn->connect_error);
}

$nombre = $_POST["nombre"];
$apellido = $_POST["apellido"];
$correo = $_POST["correo"];
$contraseña =$_POST["contraseña"];
$edad = $_POST["edad"];
$genero = $_POST["genero"];

$sql = "INSERT INTO Usuarios (nombre, apellido, correo, contraseña, edad, genero)
VALUES ('$nombre', '$apellido', '$correo', '$contraseña', '$edad', '$genero')";

if ($conn->query($sql) === TRUE) {
  echo "Nuevo usuario creado con exito";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
