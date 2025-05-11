<?php

session_start();

$_POST["juego"] = $_GET['variable2'];

$ident=$_GET['variable'];

$ident= trim($ident);

include("servicios/conex_based.php");

  

    //$cadena=trim($_POST['cadena']);

    $consulta1  = "CREATE TABLE IF NOT EXISTS NODOS (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, nodo text);";
    $consulta1 .= "INSERT INTO `NODOS`( `nodo` ) SELECT DISTINCT `estado` AS nodo FROM `Movimientos` WHERE `id_jugador` = '$ident';";
    $consulta1 .= "CREATE TABLE IF NOT EXISTS sources AS SELECT id AS source FROM NODOS INNER JOIN Movimientos ON  NODOS.nodo=Movimientos.estado AND Movimientos.id_jugador= '$ident';";
    $consulta1 .= "ALTER TABLE sources ADD id INT NOT NULL AUTO_INCREMENT PRIMARY KEY;";
    $consulta1 .= "CREATE TABLE IF NOT EXISTS tarjets AS SELECT id AS tarjet FROM NODOS INNER JOIN Movimientos ON  NODOS.nodo=Movimientos.estado AND Movimientos.id_jugador= '$ident';";
    $consulta1 .= "DELETE FROM tarjets limit 1;";
    $consulta1 .= "ALTER TABLE tarjets ADD id INT NOT NULL AUTO_INCREMENT PRIMARY KEY;";
    $consulta1 .= "CREATE TABLE IF NOT EXISTS datos AS SELECT sources.source,tarjets.tarjet FROM sources INNER JOIN tarjets ON sources.id=tarjets.id";

    if (mysqli_multi_query($conex,$consulta1)){
        echo "Nueva información creada";
    }
    else {
        echo "Error" .$consulta1. "<br>". mysqli_error($conn);
    }

    include("servicios/cerrar_conexion.php");
 


?>