<?php
# mysqli_connect(servidor, usuario, contraseña, basededatos)
$username = "debian-sys-maint"; // Usuario de conexión (utiliza el correcto según el archivo de configuración)
$password = "DRTe05kccpRBhTHg"; // Contraseña de conexión
$dbname = "BD_escalera_2";  // Base de datos escalera_2
$conex = mysqli_connect("localhost", $username, $password, $dbname);

if (!$conex) {
    die("Conexión fallida: " . mysqli_connect_error());
}
?>
