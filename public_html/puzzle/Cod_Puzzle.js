var numcuadro=0;
var estadoActual = new Array();
var vectordb = new Array(); //Agregado para cargar a la base de datos

let levantado=false;
let cuadroseleccionado;
let vacio;
let cordenadaSelX, cordenadaSelY;
let cordenadaSolX, cordenadaSolY;
let cuadro;
let multi=100;
let ajusaltu=50;
let ancho;
let alto;
let cnv;

function setup() {
    ancho=windowWidth;
    alto=windowHeight;
 // var cnv = createCanvas(windowWidth, windowHeight);
  cnv = createCanvas(ancho*0.38, alto*0.87);
  cnv.position(ancho*0.50, alto*0.11);
  //background(229, 232, 232);

  for(var fila=1; fila<6;fila++){
    estadoActual[fila-1]=new Array();
    for(var columna=5;columna<9;columna++){
      numcuadro++;
      if (numcuadro==10||numcuadro==11){
        estadoActual[fila-1][columna-5]=0;}
      else{
        estadoActual[fila-1][columna-5]=numcuadro;}

    fill(pintarpuzzle(numcuadro));
    rect((columna*100)-450, (fila*100)-78, 100, 100);
    }
  }
  print(estadoActual);
  mandarvector();

  numcuadro=0;
}

function draw() {

  for (var fila=1; fila<6;fila++){
    for (var columna=5;columna<9;columna++){
      cuadro=estadoActual[fila-1][columna-5];
      fill(pintarpuzzle(cuadro));
      noStroke()
      rect((columna*100)-450, (fila*100)-78, 100, 100);}
 }

}

function mousePressed(){

  for (var i=1; i<6;i++){

    for (var o=5;o<9;o++){
    //case ()

     if (mouseX>((o*100)-450)&&mouseX<((o*100)-450)+100&&mouseY>((i*100)-78)&&mouseY<((i*100)-78)+100){
        if (levantado==false){
            cuadroseleccionado=estadoActual[i-1][o-5];
            if(cuadroseleccionado>0){
            cordenadaSelX=i-1;
            cordenadaSelY=o-5;
            levantado=true;}}
        else{vacio=estadoActual[i-1][o-5];
            if(vacio==0){
            cordenadaSolX=i-1;
            cordenadaSolY=o-5;
            moverfigura(cuadroseleccionado,vacio,cordenadaSelX,cordenadaSelY,cordenadaSolX,cordenadaSolY);
            levantado=false;}
        }
      }
    }
  }
}

function moverfigura (seleccionado,cero,Xsel,Ysel,Xsol,Ysol){

  if (seleccionado==1||seleccionado==2||seleccionado==5||seleccionado==6){
    switch(seleccionado)
    {
      case 1: Xsel=Xsel+1;break;
      case 2: Xsel=Xsel+1;Ysel=Ysel-1;break;
      case 6: Ysel=Ysel-1;break;
      default: break;
    }
    seleccionado=5;
    if(Xsol==Xsel||Xsel-1==Xsol){
    moverderechaizquirdaCubo(Xsel,Ysel,Ysol,seleccionado,cero);}
    else{moverArribaAbajoCubo(Xsel,Ysel,Xsol,seleccionado,cero);}}

  else if (seleccionado==3||seleccionado==4){
    if (seleccionado==4){seleccionado=3;Ysel=Ysel-1;} //tener un punto de referencia por bloque de figuras
    moverfigurashorizontales(Xsel,Xsol,Ysel,Ysol,seleccionado,cero,4);}

  else if(seleccionado==7||seleccionado==8){
    if(seleccionado==8){seleccionado=7;Ysel=Ysel-1;}
    moverfigurashorizontales(Xsel,Xsol,Ysel,Ysol,seleccionado,cero,8);}

  else if (seleccionado==15||seleccionado==16){
    if (seleccionado==16){seleccionado=15;Ysel=Ysel-1;}
    moverfigurashorizontales(Xsel,Xsol,Ysel,Ysol,seleccionado,cero,16);}

  else if (seleccionado==19||seleccionado==20){
    if (seleccionado==20){seleccionado=19;Ysel=Ysel-1;}
    moverfigurashorizontales(Xsel,Xsol,Ysel,Ysol,seleccionado,cero,20);}

  else if (seleccionado==13||seleccionado==17){
      if(seleccionado==17){seleccionado=13;Xsel=Xsel-1;}
      moverfigurasverticales(Xsel,Xsol,Ysel,Ysol,seleccionado,cero,17);}

  else if (seleccionado==14||seleccionado==18){
      if(seleccionado==18){seleccionado=14;Xsel=Xsel-1;}
      moverfigurasverticales(Xsel,Xsol,Ysel,Ysol,seleccionado,cero,18);}

  else{
    if(Xsel==Xsol&&(Ysel-Ysol==-1||Ysel-Ysol==1)){
      estadoActual[Xsol][Ysol]=seleccionado;
      estadoActual[Xsel][Ysel]=cero;}
    else{
      if(Ysel==Ysol&&(Xsel-Xsol==-1||Xsel-Xsol==1)){
          estadoActual[Xsol][Ysol]=seleccionado;
          estadoActual[Xsel][Ysel]=cero;}}
  }
  print(estadoActual);
  mandarvector();

}

function pintarpuzzle(cuadro){

var CR=0,CG=0,CB=0;

  if (cuadro==1||cuadro==2||cuadro==5||cuadro==6){
    CR=21;CG=67,CB=96;}
  else if (cuadro==3||cuadro==4){
    CR=169;CG=204,CB=227;}
  else if(cuadro==7||cuadro==8){
    CR=195;CG=155,CB=211;}
  else if (cuadro==9){
    CR=217;CG=136,CB=128;}
  else if(cuadro==12){
    CR=247;CG=220,CB=111;}
  else if(cuadro==13||cuadro==17){
    CR=237;CG=187,CB=153;}
  else if (cuadro==14||cuadro==18){
    CR=88;CG=214,CB=141;}
  else if(cuadro==15||cuadro==16){
    CR=202;CG=207,CB=210;}
  else if(cuadro==19||cuadro==20){
    CR=235;CG=152,CB=78;}
  else{CR=255;CG=255,CB=255;}

  return [CR,CG,CB];
}

// Funciones para movimientos de figuras horizontales

function moverfigurashorizontales(Xsel,Xsol,Ysel,Ysol,seleccionado,cero,pareja){

  if(Xsol==Xsel){
    if(Ysel>Ysol){moverizquierdaH(Xsel,Ysel,seleccionado,cero,pareja);}
    else{moverderechaH(Xsel,Ysel,seleccionado,cero,pareja);}}
  else{moverArribaAbajoH(Xsel,Ysel,Xsol,seleccionado,cero,pareja);}

}

function moverizquierdaH(Xsel,Ysel,seleccionado,cero,Pareja){

  if(estadoActual[Xsel][Ysel-1]==0&&estadoActual[Xsel][Ysel-2]==0){
    //Mover dos pasos
    estadoActual[Xsel][Ysel-2]=seleccionado;
    estadoActual[Xsel][Ysel-1]=Pareja;
    estadoActual[Xsel][Ysel]=cero;
    estadoActual[Xsel][Ysel+1]=cero;}
  else{
     //Mover un paso
    estadoActual[Xsel][Ysel-1]=seleccionado;
    estadoActual[Xsel][Ysel]=Pareja;
    estadoActual[Xsel][Ysel+1]=cero;}

}


function moverderechaH(Xsel,Ysel,seleccionado,cero,Pareja){

  if(estadoActual[Xsel][Ysel+2]==0&&estadoActual[Xsel][Ysel+3]==0){
    //Mover dos pasos
    estadoActual[Xsel][Ysel+2]=seleccionado;
    estadoActual[Xsel][Ysel+3]=Pareja;
    estadoActual[Xsel][Ysel]=cero;
    estadoActual[Xsel][Ysel+1]=cero;}
  else{
    //Mover un paso
    estadoActual[Xsel][Ysel+1]=seleccionado;
    estadoActual[Xsel][Ysel+2]=Pareja;
    estadoActual[Xsel][Ysel]=cero;}

}

function moverArribaAbajoH(Xsel,Ysel,Xsol,seleccionado,cero,pareja){

  if(estadoActual[Xsol][Ysel]==0&&estadoActual[Xsol][Ysel+1]==0&&(Xsel-Xsol==-1||Xsel-Xsol==1)){
    estadoActual[Xsol][Ysel]=seleccionado;
    estadoActual[Xsol][Ysel+1]=pareja;
    estadoActual[Xsel][Ysel]=cero;
    estadoActual[Xsel][Ysel+1]=cero;
  }

}
// Funciones para movimientos de figuras verticales

function moverfigurasverticales(Xsel,Xsol,Ysel,Ysol,seleccionado,cero,pareja){

  if(Xsol==Xsel||Xsel+1==Xsol){
    moverderechaizquirdaV(Xsel,Ysel,Ysol,seleccionado,cero,pareja);}
  else{
    if(Ysel==Ysol){
      switch (Xsel)
      {
       case 0: moverabajoV(Xsel,Ysel,seleccionado,cero,pareja);break;
       case 1: if (Xsol==0){subfmoverarriba(Xsel,Ysel,seleccionado,cero,pareja);}
              else{moverabajoV(Xsel,Ysel,seleccionado,cero,pareja);}
              break;
       case 2: if (Xsol==4){subfmoverabajo(Xsel,Ysel,seleccionado,cero,pareja);}
              else{moverarribaV(Xsel,Ysel,seleccionado,cero,pareja);}
              break;
       case 3: moverarribaV(Xsel,Ysel,seleccionado,cero,pareja); break;
       default: break;
    }
  }
  }

}

function moverderechaizquirdaV(Xsel,Ysel,Ysol,seleccionado,cero,pareja){

  if(estadoActual[Xsel][Ysol]==0&&estadoActual[Xsel+1][Ysol]==0){
    estadoActual[Xsel][Ysol]=seleccionado;
    estadoActual[Xsel+1][Ysol]=pareja;
    estadoActual[Xsel][Ysel]=cero;
    estadoActual[Xsel+1][Ysel]=cero;}

}

function moverabajoV(Xsel,Ysel,seleccionado,cero,pareja){

  if(estadoActual[Xsel+2][Ysel]==0&&estadoActual[Xsel+3][Ysel]==0){
    estadoActual[Xsel+2][Ysel]=seleccionado;
    estadoActual[Xsel+3][Ysel]=pareja;
    estadoActual[Xsel][Ysel]=cero;
    estadoActual[Xsel+1][Ysel]=cero;}
  else{subfmoverabajo(Xsel,Ysel,seleccionado,cero,pareja);}

}

function moverarribaV(Xsel,Ysel,seleccionado,cero,pareja){

  if(estadoActual[Xsel-2][Ysel]==0&&estadoActual[Xsel-1][Ysel]==0){
    estadoActual[Xsel-2][Ysel]=seleccionado;
    estadoActual[Xsel-1][Ysel]=pareja;
    estadoActual[Xsel][Ysel]=cero;
    estadoActual[Xsel+1][Ysel]=cero;}
  else{subfmoverarriba(Xsel,Ysel,seleccionado,cero,pareja);}

}

function subfmoverarriba(Xsel,Ysel,seleccionado,cero,pareja){

  estadoActual[Xsel-1][Ysel]=seleccionado;
  estadoActual[Xsel][Ysel]=pareja;
  estadoActual[Xsel+1][Ysel]=cero;

}

function subfmoverabajo(Xsel,Ysel,seleccionado,cero,pareja){

  estadoActual[Xsel+1][Ysel]=seleccionado;
  estadoActual[Xsel+2][Ysel]=pareja;
  estadoActual[Xsel][Ysel]=cero;

}

function moverderechaizquirdaCubo(Xsel,Ysel,Ysol,seleccionado,cero){

  if(estadoActual[Xsel][Ysol]==0&&estadoActual[Xsel-1][Ysol]==0){
    if(Ysel>Ysol){
      estadoActual[Xsel][Ysel-1]=seleccionado;
      estadoActual[Xsel][Ysel]=6;
      estadoActual[Xsel-1][Ysel-1]=1;
      estadoActual[Xsel-1][Ysel]=2;
      estadoActual[Xsel][Ysel+1]=cero;
      estadoActual[Xsel-1][Ysel+1]=cero;}
     else{
      estadoActual[Xsel][Ysel+1]=seleccionado;
      estadoActual[Xsel][Ysel+2]=6;
      estadoActual[Xsel-1][Ysel+1]=1;
      estadoActual[Xsel-1][Ysel+2]=2;
      estadoActual[Xsel][Ysel]=cero;
      estadoActual[Xsel-1][Ysel]=cero;}
  }

}

function moverArribaAbajoCubo(Xsel,Ysel,Xsol,seleccionado,cero){

  if(estadoActual[Xsol][Ysel]==0&&estadoActual[Xsol][Ysel+1]==0)
  {
    if (Xsel<Xsol){
      estadoActual[Xsol][Ysel]=seleccionado;
      estadoActual[Xsol][Ysel+1]=6;
      estadoActual[Xsel][Ysel]=1;
      estadoActual[Xsel][Ysel+1]=2;
      estadoActual[Xsel-1][Ysel]=cero;
      estadoActual[Xsel-1][Ysel+1]=cero;}
    else{
      estadoActual[Xsol][Ysel]=1;
      estadoActual[Xsol][Ysel+1]=2;
      estadoActual[Xsel-1][Ysel]=seleccionado;
      estadoActual[Xsel-1][Ysel+1]=6;
      estadoActual[Xsel][Ysel]=cero;
      estadoActual[Xsel][Ysel+1]=cero;}
  }
}

function mandarvector(){
  numcuadro=0;
  var vectorestado = new Array();

  for(var fila=0; fila<5;fila++){
    for(var columna=0;columna<4;columna++){

      vectorestado[numcuadro]=estadoActual[fila][columna];
      numcuadro++;

    }
  }
  vectorestado=vectorestado.join(',');
  print(vectorestado);
  //vectordb.push(vectorestado);
  //guardar_estado();
   let uid = $("#uid").text();
//let gid = $("#gid").text();

	$.post("servicios/insercion_Juego_puzzle.php", {uid : uid, Estado: vectorestado.toString()} )
	.done(function( data ) {
		//alert( "Data Loaded: " + data );
	});

}

function windowResized() {

  //resizeCanvas(windowWidth*0.45, windowHeight*0.87);
 // resizeCanvas(windowWidth, windowHeight);
  //multiplicador=windowWidth*0.0732;
  //ajustealtura=windowHeight*0.16;
  //print(windowWidth,windowHeight);
    cnv.position(ancho*0.50, alto*0.11);
  //background(229, 232, 232);
}

//function guardar_estado(){
    
     //vectordb.push(vectorestado);
 
    
    
    
//let uid = $("#uid").text();
//let gid = $("#gid").text();

//	$.post("servicios/insercion_Juego_puzzle.php", {uid : uid, gid: gid, estado: estadoActual.toString(), vector: vectordb.toString()} )
//	.done(function( data ) {
		//alert( "Data Loaded: " + data );
//	});
	// alert("estadoActual: "+estadoActual);
  // alert("Enviado a la DB")
//}
