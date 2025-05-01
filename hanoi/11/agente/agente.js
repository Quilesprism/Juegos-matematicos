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



function Validador_deseos()

{
  if (metrica_Regla0 != 0 && dp.movil == true)
  {
    deseos_stack[0].satisfecho = 1;
///// Deseo basico satisfecho, indigar por los demás

if (MOCHS[MOCHS.length -1 ] <= MOCHS[MOCHS.length -2])

{
  bob_agente_No =bob_agente_No +1; 
  escuchar();
  var texto_agente = $("#msj-agente").html();
  $("#msj-agente").html(texto_agente+" <div class = \"bob-agente\" id = \"bob-agente"+bob_agente_No+"\" >"+bob_agente_No+") Esta jugada no te acerca a resolver el juego. </br> Si observas el grafo notarás que hay mejores opciones </div> <p></p>");
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
    $("#msj-agente").html(texto_agente+" <div class = \"bob-agente\" id = \"bob-agente"+bob_agente_No+"\" > "+bob_agente_No+")Estas jugada te acerca a resolver el juego. </br> ¡Sigue adelante!. </br>Si observas el grafo  notarás que tu \"posición\" se acercó un poco más a la meta.</div> <p></p>");
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
    $("#msj-agente").html(texto_agente+" <div class = \"bob-agente\" id = \"bob-agente"+bob_agente_No+"\" > "+bob_agente_No+")ESTA JUGADA ROMPE LAS REGLAS!! </div> <p></p>");
    $(".bob-agente").focus();
    $("#msj-agente").scrollTop(1000000);
    $("#bob-agente"+bob_agente_No).css("color" , "#ff1010");
    $("#bob-agente"+(bob_agente_No-1)).css("color" , "#909090");
  }
  else{

    deseos_stack[0].satisfecho = 0;
    bob_agente_No =bob_agente_No +1; 
    escuchar();
    var texto_agente = $("#msj-agente").html();
    $("#msj-agente").html(texto_agente+" <div class = \"bob-agente\" id = \"bob-agente"+bob_agente_No+"\" > "+bob_agente_No+")LA JUGADA QUE INTENTAS ROMPE LAS REGLAS!! </div> <p></p>");
    $(".bob-agente").focus();
    $("#msj-agente").scrollTop(1000000);
    $("#bob-agente"+bob_agente_No).css("color" , "#ff1010");
    $("#bob-agente"+(bob_agente_No-1)).css("color" , "#909090");;

  }

}

}
















function probarAg() // función de pruebas para el agente en la venta.
{
  let alerta = alba.creencias.grafo;
  alert(alerta);
}