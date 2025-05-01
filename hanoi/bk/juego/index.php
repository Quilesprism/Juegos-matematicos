<?php
session_start();
$nombre = $_SESSION['nombre'];
$id = $_SESSION['uid'];
$idioma=$_SESSION['idioma'];
echo "<div id=\"uid\" style =\"display:none; \">$id</div>";
?>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/>
  <link rel="stylesheet" type="text/css" href= "../css/estilo.css" >
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato">
  <!-- PLEASE NO CHANGES BELOW THIS LINE (UNTIL I SAY SO) -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.min.js" integrity="sha512-WIklPM6qPCIp6d3fSSr90j+1unQHUOoWDS4sdTiR8gxUTnyZ8S2Mr8e10sKKJ/bhJgpAa/qG068RDkg6fIlNFA==" crossorigin="anonymous"></script>  <script language="javascript" type="text/javascript" src="clases_graficas.js"></script>  <script language="javascript" type="text/javascript" src="clases_graficas.js"></script>
  <script language="javascript" type="text/javascript" src="clases_indicadores.js"></script>
  <script language="javascript" type="text/javascript" src="grafo.js"></script>
  <script language="javascript" type="text/javascript" src="Hanoi2.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>   <!-- para usar JQUERY desde repo ONLINE -->
  <!-- mis scripts JS -->

  
  <!-- OK, YOU CAN MAKE CHANGES BELOW THIS LINE AGAIN -->

  <!-- This line removes any default padding and style.
   You might only need one of these values set. -->
   <style> body { padding: 0; margin: 0; } </style>
 </head>

 <body>
        <?php
     include("../".$idioma."/text-".$idioma.".html");
      ?>
  <div id = "agente">
    <div id ="head-agente">
      <div id="min-agente" onclick="silenciar();"> - </div>
      <div id="avatar" onclick="escuchar();">🤖</div>  AGENTE
    </div>
    <div id ="msj-agente" class= "removible2">
      <div id ="bob-agente">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      </div>  
    </div>
  </div>
</body>
</html>
<!-- cambios 3-->
