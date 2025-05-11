<?php
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

$id = $_POST["id"];
$intento = $_POST["intento"];
$movimiento = $_POST["movimiento"];
$trayectoria = $_POST["trayectoria"];

// Consulta SQL para insertar los datos
$sql = "INSERT INTO Juegos (id, intento, movimiento, trayectoria)
VALUES ('$id', '$intento', '$movimiento', '$trayectoria')";

// Ejecutar la consulta
if ($conn->query($sql) === TRUE) {
  echo "Continúa Jugando";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
