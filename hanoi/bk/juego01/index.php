<?php
session_start();
$_SESSION['ind_grafo'] = false;
$_SESSION['ind_agente'] = true;
$nombre = $_SESSION['nombre'];
$id = $_SESSION['uid'];
$idioma=$_SESSION['idioma'];


echo "<div id=\"uid\" style =\"display:none; \">$id</div>";

?>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" href="../imagenes/favicon.ico" type="image/x-icon"/>
  <link rel="stylesheet" type="text/css" href= "../css/estilo.css" >
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato">
  <!-- PLEASE NO CHANGES BELOW THIS LINE (UNTIL I SAY SO) -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.min.js" integrity="sha512-WIklPM6qPCIp6d3fSSr90j+1unQHUOoWDS4sdTiR8gxUTnyZ8S2Mr8e10sKKJ/bhJgpAa/qG068RDkg6fIlNFA==" crossorigin="anonymous"></script>  <script language="javascript" type="text/javascript" src="clases_graficas.js"></script>  <script language="javascript" type="text/javascript" src="clases_graficas.js"></script>
  <script language="javascript" type="text/javascript" src="clases_indicadores.js"></script>
  <script language="javascript" type="text/javascript" src="grafo.js"></script>
  <script language="javascript" type="text/javascript" src="Hanoi2.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>   <!-- para usar JQUERY desde repo ONLINE -->
  <script language="javascript" type="text/javascript" src="../fuzzy/fuzzy.js"></script>
  <script language="javascript" type="text/javascript" src="../agente/agente.js"></script>
  <!-- mis scripts JS -->

  
  <!-- OK, YOU CAN MAKE CHANGES BELOW THIS LINE AGAIN -->

  <!-- This line removes any default padding and style.
   You might only need one of these values set. -->
   <style> body { padding: 0; margin: 0; } </style>
 </head>

 <body onload = "carga();">
  <?php
  include("../".$idioma."/text-".$idioma.".html");
  ?>
  <div id = "agente">
    <div id ="head-agente" onclick="probarAg();">
      <div id="max-agente" onclick="escuchar();">⬆️</span>
      </div>
      <div id="min-agente" onclick="silenciar();">⬇️</span>
      </div>
      <div id="avatar" onclick="difuso();">🤖</div>  AGENTE
    </div>
    <div id ="msj-agente" class= "removible2">
      <div class ="bob-agente">
        

      </div>  
    </div>
  </div>
</body>
</html>
<!-- cambios 3-->
