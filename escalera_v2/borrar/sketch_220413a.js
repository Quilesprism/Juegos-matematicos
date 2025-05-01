let estadoActual = [1,2,3,4,0,5,6,7,8];
let trayectoria = [];
let bloquesMovidos = [];
let bloqueDejado;
let botonMasBloques;
let botonMenosBloques;
let posicion;
let bloqueadoP = true;
let movimientosJugador;
let cantidadBloques = 2;
let valoresIguales = 0;
let intento = 0;
let posicionIntermedia;
let bloqueSaltado;
let posicionLevantar
let posicionDejar;
let numeroBloque;
function setup() {
  createCanvas(1000, 750);
  botonMasBloquesQ();
  botonMenosBloquesQ();
  botonReIniciarQ();
  for(let j=0;j<3000;j++){
    trayectoria[j]=[];
  }
  llenarVectorEstadoInicial();
}
function draw() {
  background(152,190,100);
  rectMode(CENTER);
  pintarBloques();
  posicionM(mouseX,mouseY);
  mensajesTexto();
}
function llenarVectorEstadoInicial(){
    intento++;
    movimientosJugador=1;
    for(let i=0;i<estadoActual.length;i++){
      estadoActual.splice(i,1);
    }
    for(let j=0;j<100;j++){
      bloquesMovidos[j]=0;
    }
    let idFicha =1;
    for (let i = 0; i < cantidadBloques; i++) {
      estadoActual[i] = idFicha;
      idFicha++;
    }
    estadoActual[cantidadBloques] = 0;
    for (let i = cantidadBloques+1; i <= cantidadBloques*2; i++) {
      estadoActual[i] = idFicha;
      idFicha++;
    }
}
function botonMasBloquesQ(){
  botonMasBloques = createButton("Mas Bloques");
  botonMasBloques.position(10,10);
  botonMasBloques.size(100,50);
  botonMasBloques.style("background-color", 152,190,100);
  botonMasBloques.style("color", "#fff");
  botonMasBloques.mousePressed(contadorIncrementa);
}
function botonMenosBloquesQ(){
  botonMenosBloques = createButton("Menos Bloques");
  botonMenosBloques.position(110,10);
  botonMenosBloques.size(100,50);
  botonMenosBloques.style("background-color", 152,190,100);
  botonMenosBloques.style("color", "#fff");
  botonMenosBloques.mousePressed(contadorDecrementa);
}
function botonReIniciarQ(){
  botonMenosBloques = createButton("Reiniciar");
  botonMenosBloques.position(210,10);
  botonMenosBloques.size(100,50);
  botonMenosBloques.style("background-color", 152,190,100);
  botonMenosBloques.style("color", "#fff");
  botonMenosBloques.mousePressed(llenarVectorEstadoInicial);
}
function contadorIncrementa(){
  if (cantidadBloques<8){
  cantidadBloques++;
  llenarVectorEstadoInicial();
  } else {
    cantidadBloques=8;
  }
}
function contadorDecrementa(){
  if (cantidadBloques>1){
  cantidadBloques--;
  llenarVectorEstadoInicial();
  } else {
    cantidadBloques=1;
  }
}
function pintarBloques(){
  for (let i = 0; i < estadoActual.length; i++) {
      if (estadoActual[i]>0 && estadoActual[i]<(ceil(estadoActual.length/2))){
        e=1;
      } else if (estadoActual[i]>(floor(estadoActual.length/2))){
        e=2;
      } else if (estadoActual[i]==0){
        e=3;
      }
      pintarCubo(e,i+1);
  }
}
function pintarCubo(equipo, casilla){
  stroke(0);
  if (equipo==1){
    fill('blue');
  } else if (equipo==2){
    fill('red');
  } else if (equipo==3){
    fill(255,255,255);
  }
  rect(width/20*casilla, height/3, 50, 50);
}
function posicionM(x1, y1){
  for (let i = 1; i <= estadoActual.length; i++) {
    distancia=sqrt(pow((width/20*i-x1),2)+pow((height/3-y1),2));
    if (distancia < 25)
    {
      posicion=i;
      line(x1,y1,width/20*i,height/3);
    }
  }
}
function levantar(posicion){
     bloqueLevantado=estadoActual[posicion-1];
     estadoActual[posicion-1]=0;
     posicionLevantar=posicion;
}
function dejar(posicion,bloqueLevantado){
     estadoActual[posicion-1]=bloqueLevantado;
     posicionDejar=posicion;
     bloquesMovidos[movimientosJugador]=bloqueLevantado;
     movimientosJugador++;
}
function trayectoriaSujeto(){
  for (let i = 0; i < estadoActual.length; i++) {
    trayectoria[movimientosJugador][i]=estadoActual[i];
  }
}
function reglaUno(){ // No Devolverse
  if (movimientosJugador>1){
    for (let i = 0; i < estadoActual.length; i++) {
      if(trayectoria[movimientosJugador-2][i] == estadoActual[i])
      valoresIguales++;
    }
    if (valoresIguales==estadoActual.length){
      valoresIguales=0;
      llenarVectorEstadoInicial();
    } else {
      valoresIguales=0;
    }
  }
}
function reglaDos(){ // No Saltar sobre mismo equipo
    if (abs(posicionLevantar-posicionDejar) == 2) {
        if (posicionLevantar > posicionDejar){
          posicionIntermedia = posicionDejar;
        } else if (posicionLevantar < posicionDejar){
          posicionIntermedia = posicionLevantar;
        }
        bloqueSaltado=estadoActual[posicionIntermedia];
        if(bloqueSaltado<ceil(estadoActual.length/2) && bloqueLevantado<ceil(estadoActual.length/2)){
            llenarVectorEstadoInicial();
        } else if (bloqueSaltado>floor(estadoActual.length/2) && bloqueLevantado>floor(estadoActual.length/2)){
            llenarVectorEstadoInicial();
        }
    } else if (abs(posicionLevantar-posicionDejar) > 2) {
            llenarVectorEstadoInicial();
    }
}
function reglaTres(){ // No mover consecutivamente fichas del mismo equipo
    bloqueDejado=bloquesMovidos[movimientosJugador-2];
    if (bloqueLevantado > 0 && movimientosJugador > 2){
      if ((bloqueLevantado <ceil(estadoActual.length/2) && bloqueDejado <ceil(estadoActual.length/2)) || (bloqueLevantado >floor(estadoActual.length/2) && bloqueDejado >floor(estadoActual.length/2))){
      console.log("Entre a condición larga");
        bloquesMovidos[movimientosJugador]=0;
      llenarVectorEstadoInicial();
      }
    }
}
function mousePressed() {

  if (mouseY > height/3-25 && mouseY < height/3+25){
    if(bloqueadoP) {
        posicionM(mouseX,mouseY);
        levantar(posicion);
        bloqueadoP=false;
      } else if (!bloqueadoP){
        posicionM(mouseX,mouseY);
        dejar(posicion, bloqueLevantado);
        trayectoriaSujeto();
        bloqueadoP=true;
        reglaUno();
        reglaDos();
        reglaTres();
        imprimirDatos();
        guardar_estado();
      }
  }
}
function mensajesTexto(){
  fill(0,102,153);
  text("JUEGO DE LA ESCALERA",width*3/4,20);
  text("Universidad Distrital Francisco José de Caldas",width*3/4,35);
  text("Doctorado Interinstitucional en Educación",width*3/4,50);
  }
function imprimirDatos(){
  guardar_estado();
  console.log("Número de Bloques: "+cantidadBloques);
  console.log("Intento: "+intento);
  console.log("Estado: "+estadoActual);
  guardar_estado();

}

// function guardar_estado()
// {
// console.log('done');
// 	$.post( "http://juegosmatematicos.online/escalera/v2/servicios/insercion_Juego_escalera.php", {estadoActual:estadoActual,  trayectoria:trayectoria, bloquesMovidos:bloquesMovidos, bloqueDejado:bloqueDejado, posicion:posicion, bloqueadoP:bloqueadoP, movimientosJugador:movimientosJugador, cantidadBloques:cantidadBloques, valoresIguales:valoresIguales, intento:intento, posicionIntermedia:posicionIntermedia, bloqueSaltado:bloqueSaltado, posicionLevantar:posicionLevantar, posicionDejar:posicionDejar, numeroBloque:numeroBloque} )
// 	.done(function( data ) {
// 		//alert( "Data Loaded: " + data );
// 	});
// 	// alert("estadoActual:"+movimiento_v);
// 	// alert("Llevas 20 movimientos");
//
// }
