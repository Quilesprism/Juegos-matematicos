<?php
# mysqli_connect(servidor, usuario, contraseña, base de datos)
$username = "u573036680_MET";
$password = "PuzzleSinColor_2023";
$dbname   = "BD_Puzzle_2";  

$conex = mysqli_connect("localhost", $username, $password, $dbname);

if (!$conex) {
    die("Conexión fallida: " . mysqli_connect_error());
}
?>
