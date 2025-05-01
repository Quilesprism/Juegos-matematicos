
<!DOCTYPE html>
<html lang="es">
<head>
<title>Acceso a Hanoi</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="icon" type="image/png" href="es/imagenes/icono.png" sizes="64x64">
<link rel="stylesheet" type="text/css" href= "css/estilo.css" >
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato">
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.min.js" integrity="sha512-WIklPM6qPCIp6d3fSSr90j+1unQHUOoWDS4sdTiR8gxUTnyZ8S2Mr8e10sKKJ/bhJgpAa/qG068RDkg6fIlNFA==" crossorigin="anonymous"></script>  <!-- para usar P5JS desde el repo ONLINE -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>   <!-- para usar JQUERY desde repo ONLINE -->
<script language="javascript" type="text/javascript" src="scripts/sincronia.js"></script>  <!-- mis scripts JS -->
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>


<style>
    body {
        font-family: 'Open Sans', 'Helvetica', sans-serif;
        color: #000;
        padding: 0;
        margin: 0;
        line-height: 1.428;
    }
    h1, h2, h3, h4, h5, h6, p {
        padding: 0;
        margin: 0;
        color:#333333;
    }
    h1 {
        font-size: 30px;
        font-weight: 600!important;
        color: #333;
    }
    h2 {
        font-size: 24px;
        font-weight: 600;
    }
    h3 {
        font-size: 22px;
        font-weight: 600;
        line-height: 28px;
    }
    hr {
        margin-top: 35px;
        margin-bottom: 35px;
        border: 0;
        border-top: 1px solid #bfbebe;
    }
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    li {
        display: inline-block;
        float: right;
        margin-left: 20px;
        line-height: 35px;
        font-weight: 100;
    }
    a {
        text-decoration: none;
        cursor: pointer;
        -webkit-transition: all .3s ease-in-out;
        -moz-transition: all .3s ease-in-out;
        -ms-transition: all .3s ease-in-out;
        -o-transition: all .3s ease-in-out;
        transition: all .3s ease-in-out;
    }
    li a {
        color: white;
        margin-left: 3px;
    }
    li > i {
        color: white;
    }
    .column-wrap a {
        color: #5c34c2;
        font-weight: 600;
        font-size:16px;
        line-height:24px;
    }
    .column-wrap p {
        color: #717171;
        font-size:16px;
        line-height:24px;
        font-weight:300;
    }
    .container {
        margin-top: 100px;
    }
    .navbar {
        position: relative;
        min-height: 45px;
        margin-bottom: 20px;
        border: 1px solid transparent;
    }
    .navbar-brand {
        float: left;
        height: auto;
        padding: 10px 10px;
        font-size: 18px;
        line-height: 20px;
    }
    .navbar-nav>li>a {
        padding-top: 11px;
        padding-bottom: 11px;
        font-size: 13px;
        padding-left: 5px;
        padding-right: 5px;
    }
    .navbar-nav>li>a:hover {
        text-decoration: none;
        color: #cdc3ea!important;
    }
    .navbar-nav>li>a i {
        margin-right: 5px;
    }
    .nav-bar img {
        position: relative;
        top: 3px;
    }
    .congratz {
        margin: 0 auto;
        text-align: center;
    }
    .message::before {
        content: " ";
        background: url(https://cdn.hostinger.com/hostinger_welcome/images/hostinger-dragon.png);
        width: 141px;
        height: 175px;
        position: absolute;
        left: -150px;
        top: 0;
    }
    .message {
        width: 50%;
        margin: 0 auto;
        height: auto;
        padding: 40px;
        background-color: #eeecf9;
        margin-bottom: 100px;
        border-radius: 5px;
        position:relative;
    }
    .message p {
        font-weight: 300;
        font-size: 16px;
        line-height: 24px;
    }
    #pathName {
        margin: 20px 10px;
        color: grey;
        font-weight: 300;
        font-size:18px;
        font-style: italic;
    }
    .column-custom {
        border-radius: 5px;
        background-color: #eeecf9;
        padding: 35px;
        margin-bottom: 20px;
    }
    .footer {
        font-size: 13px;
        color: gray !important;
        margin-top: 25px;
        line-height: 1.4;
        margin-bottom: 45px;
    }
    .footer a {
        cursor: pointer;
        color: #646464 !important;
        font-size: 12px;
    }
    .copyright {
        color: #646464 !important;
        font-size: 12px;
    }
    .navbar a {
        color: white !important;
    }
    .navbar {
        border-radius: 0px !important;
    }
    .navbar-inverse {
        background-color: #434343;
        border: none;
    }
    .column-custom-wrap{
        padding-top: 10px 20px;
    }
    @media screen and (max-width: 768px) {
        .message {
            width: 75%;
            padding: 35px;
        }
        .container {
            margin-top: 30px;
        }
    }
    }
</style>
</head>
<body>
  <!-- <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto"> -->
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button class="navbar-toggle" data-target="#myNavbar" data-toggle="collapse" type="button">
                        <span class="icon-bar"></span> <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="https://www.hostinger.co/" rel="nofollow"><img src="https://cdn.hostinger.com/hostinger_welcome/images/hostinger-logo.png" width="120" alt="Hostinger"></a>
                </div>
                <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav navbar-right">
          <li>
            <a class="nav-link" href="http://juegosmatematicos.online/hanoi/00" rel="nofollow" target="_blank">Escenario 1</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://juegosmatematicos.online/hanoi/10" rel="nofollow" target="_blank">Escenario 2</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://juegosmatematicos.online/hanoi/01rev" rel="nofollow" target="_blank">Escenario 3</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://juegosmatematicos.online/hanoi/11rev" rel="nofollow" target="_blank">Escenario 4</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://juegosmatematicos.online/hanoi/data/datos" rel="nofollow">Descarga de datos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://juegosmatematicos.online/hanoi/data/data.php" rel="nofollow">Actualizar datos</a>
          </li>
        </ul>
      </div>
    </nav>


    <?php

    ?>

  </body>
  </html>
