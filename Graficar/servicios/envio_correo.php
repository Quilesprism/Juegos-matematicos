<?php
session_start();
$name=$_SESSION['nombre'];
$insti=$_SESSION['insti'];
$corr= $_SESSION['corr'];
$pais=$_SESSION['pais'];
$edad=$_SESSION['edad'];
$Genero=$_SESSION['Genero'];
$uid= $_SESSION['uid'];



    ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );
    $from = "juegosmatematicos@juegosmatematicos.online";
    $to = "$corr";
    $subject = "Codigo identificador";
    $message = 
    "Los datos registrados son los siguientes:\r \n
    Nombre: $name \r\n
    Institucion: $insti \r\n
    Pais de residencia: $pais \r\n
    Edad: $edad \r\n
    Genero: $Genero \r\n
    Codigo identificador asignado: $uid";
                

    $headers = "From:" . $from;
    mail($to,$subject,$message, $headers);
    echo "The email message was sent.";
    echo $corr
?>