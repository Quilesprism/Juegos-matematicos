<?php
echo "<h3>Index</h3>\n";
echo "<table>\n";
$directorio = opendir(".");
while ($archivo = readdir($directorio))
   {
   $nombreArch = ucwords($archivo);
   // $nombreArch = str_replace("..", "", $nombreArch);
   if(strpos($nombreArch, "Data-") !==false){
   echo "<tr>\n<td>\n<a href='$archivo'>\n";
   echo "<img src='download.png' alt='Descargar'";
   echo " border=0>\n";
   echo "<b>&nbsp;$nombreArch</b></a></td>\n";
   echo "\n</tr>\n";
 }
   }
closedir($directorio);
echo "</table>\n";
?>
