<?php
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

$id = $_POST["id"];
$intento = $_POST["intento"];
$movimiento = $_POST["movimiento"];
$trayectoria = $_POST["trayectoria"];

$sql = "INSERT INTO Juegos (id, intento, movimiento, trayectoria)
VALUES ('$id', '$intento', '$movimiento', '$trayectoria')";

if ($conn->query($sql) === TRUE) {
  echo "Continua Jugando";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

echo $$parametro1;
$conn->close();
?>
