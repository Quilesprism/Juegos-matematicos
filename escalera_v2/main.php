<?php
session_start();
$_SESSION['game_id'] = uniqid();
$_SESSION['ind_grafo'] = false;
$_SESSION['ind_agente'] = false;
$nombre = $_SESSION['nombre'];
$id = $_SESSION['uid'];
$idioma=$_SESSION['idioma'];
echo "<div id=\"uid\" style =\"display:none; \">$id</div>";
?>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- PLEASE NO CHANGES BELOW THIS LINE (UNTIL I SAY SO) -->
  <link rel="stylesheet"  href="css/estilojuego.css">
  <script language="javascript" type="text/javascript" src="libraries/p5.min.js"></script>
  <script language="javascript" type="text/javascript" src="Cod_escalera_v2.js"></script>
  <script language="javascript" type="text/javascript" src="libraries/sincroniza.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>   <!-- para usar JQUERY desde repo ONLINE -->

  <!-- OK, YOU CAN MAKE CHANGES BELOW THIS LINE AGAIN -->

  <!-- This line removes any default padding and style.
       You might only need one of these values set. -->
  <style> body { padding: 0; margin: 0; } </style>
</head>

<body>
 <div id ="uid" style="display: none" name = <?echo($_SESSION['uid'])?>>
      <?php
      echo($_SESSION['uid']);
      ?>
    </div>
    <div id ="name" style="display: none"name = <?echo($_SESSION['nombre'])?>>
    <?php
      echo($_SESSION['nombre']);
      ?>
    </div>
  
   <a  style="bottom: 20px;right: 20px; position: fixed;" title="Descargar datos" href="servicios/descarga.php?variable=<? echo $ident;?>&variable2=<? echo $nombre;?>"> <img src="images/download.png" alt="Descargar" border="0"> </a>
</body>
</html>
