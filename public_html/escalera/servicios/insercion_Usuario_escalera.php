<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carge de información</title>
    <link rel="stylesheet"  href="http://juegosmatematicos.online/escalera(1)/css/estilo.css">
</head>
<body>
    
<?php
session_start();
$_SESSION['nombre'] = $_POST["nombre"];
$_SESSION['edad'] = $_POST["edad"];
$_SESSION['pais'] = $_POST["pais"];

$_SESSION['institucion'] = $_POST["institucion"];
$_SESSION['correo'] = $_POST["correo"];
$_SESSION['uid'] = uniqid();
$uid = $_SESSION['uid'];


// Create connection
include("conex_based.php");


// Check connection
if ($conex->connect_error) {
  die("La conexión falló: " . $conex->connect_error);
}

$nombre = $_POST["nombre"];
$edad = $_POST["edad"];
$pais = $_POST["pais"];
$genero = $_POST["genero"];
$institucion = $_POST["institucion"];
$correo=$_POST["correo"];


$sql = "INSERT INTO Jugadores(uid,nombre,correo, edad, pais,institucion)
VALUES ('$uid','$nombre','$correo','$edad', '$pais', '$institucion')";


if ($conex->query($sql) === TRUE) {
    
     echo "<h3 class=\"ok\">Todo a salido muy bien "  .$nombre."</h3>";
    
} else {
  echo "Error: " . $sql . "<br>" . $conex->error;
}
//echo $$parametro1;

include("cerrar_conexion.php");
include("envio_correo.php");
echo "<script> setTimeout(function(){  window.location='../servicios/preguntas.php'; }, 3500) </script>";
?>

