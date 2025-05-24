<?php
    // Juego escalera v1
    // BD: BD_escalera_1
    // Usuario: u573036680_rafa
    // Contraseña: Escalera2021#

    $username = "u573036680_rafa";
    $password = "Escalera2021#";
    $dbname = "u573036680_escalera";

    $conex = mysqli_connect("localhost", $username, $password, $dbname);

    if (!$conex) {
        die("Conexión fallida: " . mysqli_connect_error());
    }
?>
