<?php

session_start();


$ident=$_GET['variable'];
$ident= trim($ident);
$nombre=$_GET['variable2'];

$today = date("YmdHi");
header("Content-type: application/octet-stream");
header("Content-Disposition: attachment; filename=\"".$nombre."_dat8Reinas.csv\"");


include("conex_based.php");


// Check connection
if ($conex->connect_error) {
  die("La conexión falló: " . $conex->connect_error);
}

$query = "SELECT fecha_hora, intento, vector FROM Movimientos WHERE id_jugador = '$ident';";
$result = $conex->query($query);

if ($result->num_rows > 0) {
    $fields = $result->fetch_fields();
    
    // Prepare the header row
    $header = [];
    foreach ($fields as $field) {
        $header[] = $field->name;
    }
    $data = implode(";", $header) . "\n";

    // Fetch and process the data rows
    while ($row = $result->fetch_assoc()) {
        $rowValues = [];
        foreach ($fields as $field) {
            $rowValues[] = $row[$field->name];
        }
        $data .= implode(";", $rowValues) . "\n";
    }

    // Output the data
    echo $data;
} else {
    echo "No data found";
}

// Close the database connection
 include("cerrar_conexion.php");
 
?>