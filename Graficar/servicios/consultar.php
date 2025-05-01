<?php
session_start();

$_SESSION['juego'] = $_POST["juego"];

$_SESSION['identificador'] = $_POST["identificador"];
$ident= trim($_POST['identificador']);
$juego=$_POST["juego"];

if (isset($_POST['consultarb'])){
    include("conex_based.php");
    if (strlen($_POST['identificador'])>=1){
       
        
       $consulta="SELECT * FROM Jugadores WHERE uid='$ident'";
       
       $resultado=mysqli_query($conex,$consulta);
       $filas_encontradas = mysqli_num_rows($resultado);
        
        if($resultado & $filas_encontradas>0){
            ?>
            <html lang="en">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Tabla de consulta</title>
            <link rel="stylesheet"  href="/css/estiloT.css">
            </head>
            <body>

            <div class="con_tabla">
            <table class="table">
            <thead>
            <tr>
                <td> id </td>
                <td>Fecha</td>
                <td>Código identificador </td>
                <td>Nombre </td>
                <td>Correo</td>
                <td>Edad</td>
                <td>Pais</td>
                <td>Genero</td>
                <td>Institución</td>
            </tr>    
            </thead>
            <tbody>
            <?php
            foreach ($resultado as $row){?> 
                <tr>
                <td><?php echo $row['n_registro'];?></td>
                <td><?php echo $row['fecha_registro'];?></td>
                <td><?php echo $row['uid']; ?></td>
                <td><?php echo $row['nombre'];         ?></td>
                <td><?php echo $row['correo'];         ?></td>
                <td><?php echo $row['edad'];           ?></td>
                <td><?php echo $row['pais'];           ?></td>
                <td><?php echo $row['genero'];         ?></td>
                <td><?php echo $row['institucion'];    ?></td>
            </tr>
            </tbody>  
            
            
        <?php
            }
            ?>
        
    </table>
            <a href="../Graficar/main.php?variable=<? echo $ident;?>&variable2=<? echo $juego;?>"><input type="button" value="Continuar"></a>

        </div>
        </body>
        </html>
            <?php
        }   else{
            ?>
           
                <h3 class="bad">¡Ups! Usuario no encontrado </h3>
            
            
            <?php
        }
        
        }
    else{ 
        
        ?>
        <h3 class="bad">¡por favor complete los campos! </h3>
        <?php


    }
    include("cerrar_conexion.php");
    

}



?>