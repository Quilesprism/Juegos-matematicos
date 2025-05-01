<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Consulta</title>
    <link rel="stylesheet"  href="css/estilo.css">
</head>
<body>
    <form  method="post">
        <div>
          <img class=ud src="images/logoUD.png"/>
           <img class=met src="images/logoMet2.png"/>
        </div>   
  
        <div class="campos">
          <h1>Consultas</h1>
          <input type="text" name="identificador" placeholder="Ingrese código de identificación">
          <p>Juego</p>

				<select name="juego" id=juego>
					<option value="0">Escalera V1</option>
					<option value="1">Escalera V2</option>
					<!--<option value="2">Hanoi</option>-->
					<option value="2">Puzzle V1</option>
					<option value="3">Puzzle V2</option>
				</select>
				
          <input type= "submit" name="consultarb">
        
          
				
          </div>
          
        
      </form>
<?php
include ("servicios/consultar.php")
?>
</body>
</html>