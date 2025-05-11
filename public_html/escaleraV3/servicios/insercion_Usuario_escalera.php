<?php
session_start();

$_SESSION['uid'] = uniqid();
echo "UID: " . $_SESSION['uid']; // Solo para depuración

$_SESSION['nombre'] = $_POST["nombre"];
$_SESSION['edad'] = $_POST["edad"];
$_SESSION['pais'] = $_POST["pais"];
$_SESSION['institucion'] = $_POST["institucion"];
$_SESSION['correo'] = $_POST["correo"];
$uid = $_SESSION['uid'];

include("conex_based.php");

if ($conex->connect_error) {
    die("La conexión falló: " . $conex->connect_error);
}

$nombre = $_POST["nombre"];
$correo = $_POST["correo"];
$edad = $_POST["edad"];
$pais = $_POST["pais"];
$institucion = $_POST["institucion"];

$sql = "INSERT INTO Jugadores (uid, nombre, correo, edad, pais, institucion) VALUES (?, ?, ?, ?, ?, ?)";
$stmt = $conex->prepare($sql);

if ($stmt === false) {
    die("Error al preparar la consulta: " . $conex->error);
}

$stmt->bind_param("ssssss", $uid, $nombre, $correo, $edad, $pais, $institucion);

if ($stmt->execute()) {
    echo "<h3 class=\"ok\">Todo ha salido muy bien, " . $nombre . "!</h3>";
    echo "<script> setTimeout(function(){  window.location='../servicios/preguntas.php?id_jugador=$uid'; }, 3500) </script>";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
include("cerrar_conexion.php");
include("envio_correo.php");
?>
