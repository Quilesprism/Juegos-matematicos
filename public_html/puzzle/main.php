<?php
session_start();
$_SESSION['game-id'] = uniqid('juego-');
$nombre=$_SESSION['nombre']; 
$ident=$_SESSION['uid'];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PUZZLE</title>
    <script src="libraries/p5.min.js"></script>
    <!-- <script language="javascript" type="text/javascript" src="libraries/sincroniza.js"></script> -->
    <link rel="stylesheet"  href="css/estilojuego.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>   <!-- para usar JQUERY desde repo ONLINE -->
</head>
<body>
  <!-- <div id ="contenedor"> -->
    <!-- contenedor -->
    <!-- <div id ="header"> -->
      <!-- HEADER -->
      <div id ="uid" style="display: none" name = <?echo($_SESSION['uid'])?>>
      <?php
      echo($_SESSION['uid']);
      ?>
    </div>
    <div id ="gid" style="display: none"name = <?echo($_SESSION['gid'])?>>
    <?php
      echo($_SESSION['game-id']);
      ?>
    </div>
    
     </div>
    <div id ="name" style="display: none"name = <?echo($_SESSION['nombre'])?>>
    <?php
      echo($_SESSION['nombre']);
      ?>
    </div>

 

<!-- <img scr="http://juegosmatematicos.acacia.red/puzzle/images/logo-ud.png"> -->
    <!-- </div> -->

    <!-- <div id ="contenido"> -->
      <!-- CONTENIDO -->
      <script src="Cod_Puzzle.js?v4"></script>
    <!-- </div> -->
    <!-- <div id ="foot"> -->
      <!-- FOOT -->
    <!-- </div> -->
  <!-- </div> -->
     <a  style="bottom: 20px;right: 20px; position: fixed;" title="Descargar datos" href="servicios/descarga.php?variable=<? echo $ident;?>&variable2=<? echo $nombre;?>"> <img src="images/download.png" alt="Descargar" border="0"> </a>

</body>
</html>
