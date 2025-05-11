<?php
      #mysqli_connect(servidor,usuario,contraseña,basededatos)
//$username = "u573036680_Puzzle"; // Revisar en la configuración de la base de datos
//$password = "Met2023*"; // Revisar en la configuración de la base de datos
//$dbname = "u573036680_Puzzle"; 
$_SESSION['juego'] = $_POST["juego"];
$juego = $_POST["juego"];
$juego=(int)$juego;


$bases_datos = [
  ["u573036680_rafa","Escalera2021#","u573036680_escalera"],
  ["u573036680_john","n+S4N&8L>L","u573036680_escalera2"],
  ["u573036680_Puzzle", "Met2023*", "u573036680_Puzzle"],
  ["u573036680_MET", "PuzzleSinColor_2023", "u573036680_puzzle_sin_col"]
];


$username = $bases_datos[$juego][0]; // Revisar en la configuración de la base de datos
$password =$bases_datos[$juego][1]; // Revisar en la configuración de la base de datos
$dbname = $bases_datos[$juego][2];
/*

$username = "u573036680_rafa"; // Revisar en la configuración de la base de datos
$password = "Escalera2021#"; // Revisar en la configuración de la base de datos
$dbname = "u573036680_escalera";  //Revisar en la configuración de la base de datos

$username = "u573036680_john"; // Revisar en la configuración de la base de datos
$password = "n+S4N&8L>L"; // Revisar en la configuración de la base de datos
$dbname = "u573036680_escalera2";  //Revisar en la configuración de la base de datos

$username = "u573036680_MET"; // Revisar en la configuración de la base de datos
$password = "PuzzleSinColor_2023"; // Revisar en la configuración de la base de datos
$dbname = "u573036680_puzzle_sin_col";  //Revisar en la configuración de la base de datos



*/

$conex =mysqli_connect("localhost",$username ,$password,$dbname);

?>
