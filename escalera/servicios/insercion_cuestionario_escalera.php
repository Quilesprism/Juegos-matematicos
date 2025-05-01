<?php

session_start();
$ident=$_SESSION['uid'];
$res_pre_1 = $_POST["pregunta_1"];
$res_pre_2 = $_POST["pregunta_2"];
$res_pre_3 = $_POST["pregunta_3"];
$res_pre_4 = $_POST["pregunta_4"];
$res_pre_5 = $_POST["pregunta_5"];
$res_pre_6 = $_POST["pregunta_6"];

 if (isset($_POST['jugar'])){
    include("conex_based.php");
    
    if ($conex->connect_error) {
        die("La conexión falló: " . $conex->connect_error);
      }

     


    $sql = "INSERT INTO cuestionario(uid,pregunta_1,pregunta_2,pregunta_3,pregunta_4,pregunta_5,pregunta_6)
    VALUES ('$ident','$res_pre_1','$res_pre_2','$res_pre_3','$res_pre_4','$res_pre_5','$res_pre_6')";

    
   if ($conex->query($sql) === TRUE) {
 
 
    
   
} else {
 echo "Error: " . $sql . "<br>" . $conex->error;
}

include("cerrar_conexion.php");
echo "<script> setTimeout(function(){  window.location='../main.php'; }, 2000) </script>"; 
} 
  
 


?>