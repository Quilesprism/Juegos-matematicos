<?php
session_start();
$_SESSION['ind_grafo'] = true;
$_SESSION['ind_agente'] = true;
$nombre = $_SESSION['nombre'];
$id = $_SESSION['uid'];
$idioma=$_SESSION['idioma'];
echo "<div id=\"uid\" style =\"display:none; \">$id</div>";
echo "<div id=\"idioma\" style =\"display:none; \">$idioma</div>";
echo "<div id=\"audio_div\" style =\"display:none; \">
<audio id=\"audio\" controls>
<source type=\"audio/wav\" src=\"gong.wav\">
</audio>
</div>";
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
    <div id ="head-agente">
      <div id="max-agente" onclick="escuchar();">⬆️</span>
      </div>
      <div id="min-agente" onclick="silenciar();">⬇️</span>
      </div>
      <div id="avatar" onclick="escuchar();">🤖</div>  AGENTE
    </div>
    <div id ="msj-agente" class= "removible2">
      <div id ="bob-agente">
        <?
        if ($idioma == 'es')

        {
         echo ("¡Bienvenido! </br>
           Será de gran ayuda que ubiques tu posición actual y la meta del juego. El grafo actua como un \"mapa\" del juego que marca la meta con un punto rojo y tu posición con un punto azúl brillante. Una vez comprendas como se reflejan los movimientos del juego sobre el grafo, tendrás una excelente guia para resolverlo.</br> Minimiza este chat.");

       }
       else{

         echo ("Bienvenue ! </br>
          Il vous sera utile de localiser votre position actuelle et le but du match. Le graphique agit comme une \"carte\" du jeu qui marque le but avec un point rouge et votre position avec un point bleu vif. Une fois que vous aurez compris comment les mouvements du jeu se reflètent sur le graphique, vous aurez un excellent guide pour le résoudre. </br> Minimisez ce chat pour afficher le graphique complet.");
       }
       ?>

     </div>
   </div>
 </div>
</body>
</html>
<!-- cambios 3-->
