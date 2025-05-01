<?php
$servername = "localhost"; //El nombre FQDN del servidor donde corre el motor de base de datos, usualmente Localhost(mismo servidor donde corre PHP y almacenamos este archivo), pero puede usarse cualquiera al que se tenga acceso
$username = "u573036680_john"; // Revisar en la configuración de la base de datos
$password = "n+S4N&8L>L"; // Revisar en la configuración de la base de datos
$dbname = "u573036680_escalera2";  //Revisar en la configuración de la base de datos
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error)
{
  die("La conexión falló: " . $conn->connect_error);
}
else {

    $sql ="SELECT * FROM Juegos WHERE 1 ";

}
// ////////////////////////

$result =  $conn->query($sql);

if (!$result) {
 echo ("Datos no disponibles");
}
$f = fopen('datos/data- username'.uniqid().'-anonimized.csv', 'w');
if (!$f)
{
    echo("No es posible crear el archivo");
}
$nd =0;
fputcsv('id, fecha',0);
while ($row = $result->fetch_assoc()) {
    fputcsv($f, $row);
    $nd =$nd+1;
}
echo ("Archivo de datos generado con éxito con $nd registros // Data file successfully generated $nd logs are ready");
$conn->close();

echo '<script type="text/javascript">
           window.location = "http://juegosmatematicos.online/escalera/v2/data/datos"
      </script>';

?>
