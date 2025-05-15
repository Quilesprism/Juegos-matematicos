<?php
# mysqli_connect(servidor, usuario, contraseña, base de datos)
$username = "u573036680_Puzzle";
$password = "Met2023*";
$dbname   = "BD_Puzzle";  

$conex = mysqli_connect("localhost", $username, $password, $dbname);

if (!$conex) {
    die("Conexión fallida: " . mysqli_connect_error());
}
?>
