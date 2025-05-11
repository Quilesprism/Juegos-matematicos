class Creencias{
  constructor(etapa, desAg, grafo, desAp, eMeta, eActual, distMeta) //etapa , desAg = desempeñó del agente, grafo := si esta o no el grafo, desAp = desempeño del estuaidnate, eMeta := estado meta, eActual, distMeta := distancia a la meta
  {

    this.etapa = etapa;
    this.desAg=desAg;
    this.grafo=grafo;
    this.desAp=desAp;
    this.eMeta=eMeta;
    this.eActual=eActual;
    this.distMeta=distMeta;
  }
}



class Deseo{
  constructor(id, prioridad, desscripcion, satisfecho)
  {
    this.id =id;
    this.prioridad = prioridad;
    this.desscripcion=desscripcion;
    this.satisfecho=satisfecho;
  }
}


class Intension {
  constructor(id, prioridad, desciripción, lista_acciones)
  {
    this.id = id;
    this.prioridad=prioridad;
    this.desscripcion = desscripcion;
    this.lista_acciones = lista_acciones;
  }

}

class Accion{

  constructor(id, texto, color, deseo, intension)
  {
    this.id = id;
    this.texto = texto;
    this.color = "inherit";
    this.deseo =deseo;
    this.intension =intension;
  }

}


class Agente {
  constructor(creencias, intensiones, deseos)
  {
    this.creencias = creencias;
    this.intensiones = intensiones;
    this.deseos = deseos;
  }
}



let deseos0 = ["El aprendiz no rompe las reglas",
"El aprendiz avanza en el juego",
"El aprendiz mejora su desempeño con pocos intentos",
"El aprendiz es eficiente en el juego",
"El aprendiz comprende la estructura del juego"];

let creencias_iniciales = new Creencias(1,1,0,1,684, 1, 999);
let intensiones_pool = new Array;
let deseos_stack = new  Array;
let bob_agente_No= 0;

for(let i = 0; i< deseos0.length; i++)
{

  deseos_stack.push(new Deseo(i,i, deseos0[i], 0));
}



let alba = new Agente(creencias_iniciales, intensiones_pool, deseos_stack);


var idioma = $("#idioma").html();




function Validador_deseos()

{
  if (idioma == 'es')
  {
    if (metrica_Regla0 != 0 && dp.movil == true)
    {
      deseos_stack[0].satisfecho = 1;  ///// Deseo basico satisfecho, indigar por los demás

      if (MOCHS[MOCHS.length -1 ] == 0)
      {
        bob_agente_No =bob_agente_No +1;
        escuchar();
        var texto_agente = $("#msj-agente").html();

        if(con_grafo ==1)
        {
          $("#msj-agente").html(texto_agente+" <div class = \"bob-agente\" id = \"bob-agente"+bob_agente_No+"\" > "+bob_agente_No+") &#x1F614 Esta no jugada te acerca a resolver el juego. </br> </br>Si observas el grafo  podrás ver que hay mejores opciones.</div> <p></p>");
	window.speechSynthesis.speak(new SpeechSynthesisUtterance('¡Esta no es la mejor jugada!Ver el grafo podría ayudarte'));         
}
        else
        {
         $("#msj-agente").html(texto_agente+" <div class = \"bob-agente\" id = \"bob-agente"+bob_agente_No+"\" > "+bob_agente_No+") &#x1F614 ESTA JUGADA NO TE ACERCA A RESOLVER EL JUEGO, EXPOLAR OTRAS OPCIONES!!</div> <p></p>");
				window.speechSynthesis.speak(new SpeechSynthesisUtterance('¡Esta no es la mejor jugada!'));      
 }

       $(".bob-agente").focus();
       $("#msj-agente").scrollTop(1000000);
       $("#bob-agente"+bob_agente_No).css("color" , "#000000");
       $("#bob-agente"+(bob_agente_No-1)).css("color" , "#909090");

     }

     else{
      if(MOCHS.length !=0)
      {
        bob_agente_No =bob_agente_No +1;
        escuchar();
        var texto_agente = $("#msj-agente").html();
        if(con_grafo ==1)
        {
          $("#msj-agente").html(texto_agente+" <div class = \"bob-agente\" id = \"bob-agente"+bob_agente_No+"\" > "+bob_agente_No+") &#x1F600 Esta jugada te acerca a resolver el juego. </br> ¡Sigue adelante!. </br>Si observas el grafo  notarás que tu \"posición\" se acercó un poco más a la meta.</div> <p></p>");
window.speechSynthesis.speak(new SpeechSynthesisUtterance('¡Buena jugada!¡'));        
}
        else
        {
         $("#msj-agente").html(texto_agente+" <div class = \"bob-agente\" id = \"bob-agente"+bob_agente_No+"\" > "+bob_agente_No+") &#x1F600 ESTA JUGADA TE ACERCA A RESOLVER EL JUEGO, SIGUE ADELANTE.</div> <p></p>");
window.speechSynthesis.speak(new SpeechSynthesisUtterance('¡Buena jugada!¡'));        
       
}
       $(".bob-agente").focus();
       $("#msj-agente").scrollTop(1000000);
       $("#bob-agente"+bob_agente_No).css("color" , "#000000");
       $("#bob-agente"+(bob_agente_No-1)).css("color" , "#909090");
     }
   }
 }
 else
 {
  if(metrica_Regla0 == 0 && dp.movil == true)
  {
    deseos_stack[0].satisfecho = 0;
    bob_agente_No =bob_agente_No +1;
    escuchar();
    var texto_agente = $("#msj-agente").html();
    $("#msj-agente").html(texto_agente+" <div class = \"bob-agente\" id = \"bob-agente"+bob_agente_No+"\" > "+bob_agente_No+") &#x1F628 ESTA JUGADA ROMPE LAS REGLAS!! </div> <p></p>");
window.speechSynthesis.speak(new SpeechSynthesisUtterance('¡Esta jugada rompería las reglas!'));    
$(".bob-agente").focus();
    $("#msj-agente").scrollTop(1000000);
    $("#bob-agente"+bob_agente_No).css("color" , "#ff1010");
    $("#bob-agente"+(bob_agente_No-1)).css("color" , "#909090");
  }
  else
  {
    deseos_stack[0].satisfecho = 0;
    bob_agente_No =bob_agente_No +1;
    escuchar();
    var texto_agente = $("#msj-agente").html();
    $("#msj-agente").html(texto_agente+" <div class = \"bob-agente\" id = \"bob-agente"+bob_agente_No+"\" > "+bob_agente_No+") &#x1F628 LA JUGADA QUE INTENTAS ROMPE LAS REGLAS!! </div> <p></p>");
							window.speechSynthesis.speak(new SpeechSynthesisUtterance('¡Esta jugada rompería las reglas!'));
    $(".bob-agente").focus();
    $("#msj-agente").scrollTop(1000000);
    $("#bob-agente"+bob_agente_No).css("color" , "#ff1010");
    $("#bob-agente"+(bob_agente_No-1)).css("color" , "#909090");;
  }
}

}

else  ///idioma ////////////////////////////////////////////////////////////
{

  if (metrica_Regla0 != 0 && dp.movil == true)
  {
    deseos_stack[0].satisfecho = 1;
///// Deseo basico satisfecho, indigar por los demás

if (MOCHS[MOCHS.length -1 ] == 0)

{
  bob_agente_No =bob_agente_No +1;
  escuchar();
  var texto_agente = $("#msj-agente").html();

  if(con_grafo ==1)
  {

    $("#msj-agente").html(texto_agente+" <div class = \"bob-agente\" id = \"bob-agente"+bob_agente_No+"\" >"+bob_agente_No+") &#x1F614 Ce jeu ne vous rapproche pas de la résolution du jeu. </br> Si vous regardez le graphique, vous remarquerez qu'il existe de meilleures options </div> <p></p>");
  }
  else
  {
    $("#msj-agente").html(texto_agente+" <div class = \"bob-agente\" id = \"bob-agente"+bob_agente_No+"\" >"+bob_agente_No+") &#x1F614 CE JEU N'EST PAS PRÈS DE RÉSOUDRE LE JEU, D'EXPOLER D'AUTRES OPTIONS</div> <p></p>");

  }


  $(".bob-agente").focus();
  $("#msj-agente").scrollTop(1000000);
  $("#bob-agente"+bob_agente_No).css("color" , "#000000");
  $("#bob-agente"+(bob_agente_No-1)).css("color" , "#909090");

}
else{
  if(MOCHS.length !=0){
    bob_agente_No =bob_agente_No +1;
    escuchar();
    var texto_agente = $("#msj-agente").html();

    if(con_grafo ==1)
    {
      $("#msj-agente").html(texto_agente+" <div class = \"bob-agente\" id = \"bob-agente"+bob_agente_No+"\" > "+bob_agente_No+") &#x1F600 Ce mouvement vous rapproche de la résolution du jeu. </br> Continuez ! </br> Si vous regardez le graphique, vous remarquerez que votre \"position \" s'est un peu rapprochée du but.</div> <p></p>");
    }
    else
    {
      $("#msj-agente").html(texto_agente+" <div class = \"bob-agente\" id = \"bob-agente"+bob_agente_No+"\" >"+bob_agente_No+") &#x1F600 CE JEU VOUS REND PLUS PROCHE DE LA RÉSOLUTION DU JEU, CONTINUEZ.</div> <p></p>");
    }


    $(".bob-agente").focus();
    $("#msj-agente").scrollTop(1000000);
    $("#bob-agente"+bob_agente_No).css("color" , "#000000");
    $("#bob-agente"+(bob_agente_No-1)).css("color" , "#909090");

  }

}



}
else
{
  if(metrica_Regla0 == 0 && dp.movil == true){
    deseos_stack[0].satisfecho = 0;
    bob_agente_No =bob_agente_No +1;
    escuchar();
    var texto_agente = $("#msj-agente").html();
    $("#msj-agente").html(texto_agente+" <div class = \"bob-agente\" id = \"bob-agente"+bob_agente_No+"\" > "+bob_agente_No+") &#x1F628 CE JEU BRISE LES RÈGLES !! </div> <p></p>");
    $(".bob-agente").focus();
    $("#msj-agente").scrollTop(1000000);
    $("#bob-agente"+bob_agente_No).css("color" , "#ff1010");
    $("#bob-agente"+(bob_agente_No-1)).css("color" , "#909090");
  }
  else
  {

    deseos_stack[0].satisfecho = 0;
    bob_agente_No =bob_agente_No +1;
    escuchar();
    var texto_agente = $("#msj-agente").html();
    $("#msj-agente").html(texto_agente+" <div class = \"bob-agente\" id = \"bob-agente"+bob_agente_No+"\" > "+bob_agente_No+") &#x1F628 LE JEU QUE VOUS ESSAYEZ BRISE LES RÈGLES !! </div> <p></p>");
    $(".bob-agente").focus();
    $("#msj-agente").scrollTop(1000000);
    $("#bob-agente"+bob_agente_No).css("color" , "#ff1010");
    $("#bob-agente"+(bob_agente_No-1)).css("color" , "#909090");;

  }

}



}

}














function probarAg() // función de pruebas para el agente en la venta.
{
  let alerta = alba.creencias.grafo;
  alert(alerta);
}
