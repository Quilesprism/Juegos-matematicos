<?php
session_start();
$nombre = $_SESSION["nombre"];
print "el nombre de sesion es $nombre";
?>