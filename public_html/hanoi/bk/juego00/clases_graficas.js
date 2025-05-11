/// Clases para nodos
let ver_grafo= false;

class Boton {
  constructor(id, x, y, w, h, color)
  {  
    this.id =id;
    this.dx = x;
    this.dy =y;
    this.ancho = w;
    this.alto =h;
    this.color =color;
  }

  dibujarB()
  { 
    fill(this.color);
    ellipse(this.dx+50, this.dy+this.alto, 100, 150);
    circle(this.dx, (this.dy+(this.alto/2)), this.ancho*1.5);
    rect(this.dx- (this.ancho/2), this.dy, this.ancho, this.alto);
    fill(this.color);
    circle(this.dx, (this.dy+(this.alto/2)), this.ancho/2);
    circle(this.dx+100, (this.dy+(this.alto/2)), this.ancho*1.5);
    rect(this.dx- (this.ancho/2) +100, this.dy, this.ancho, this.alto);
    fill(this.color);
    circle(this.dx +100, (this.dy+(this.alto/2)), this.ancho/2);
  }

  onMe() { ////identica el mouse sobre un disco
    if (mouseX >  this.dx-(this.ancho/2) && mouseX< this.dx + (this.ancho/2)  && mouseY > this.dy && mouseY < this.dy+this.alto) {
      return this;
    } else {

      return 0;
    }
  }
}

class Nodo {
  constructor (id, x, y, tamaño, color)
  {
    this.id = id;
    this.x = x;
    this.y =y;
    this.tamaño = tamaño;
    this. color = color;
  }
  dibujarNodo() {
    fill(this.color);
    circle(this.x, this.y, this.tamaño);
  }
}



/// Clase para los pilares o torres
class Pilar {
  constructor (numero, color, st, stg)
  {
    this.numero = numero; /// numero de la torre
    this.color= color; /// color de la torre
    this.centro = (this.numero)*(w/8);
    this.base =395;
    this.ancho =15;
    this.st =st; /// vector de estado de la torre
    this.stg =stg; /// vector de estado de la torre para el gro inlcuyendo los 0 que no se pueden incluir en ST en tanot la posicioón del vertical del disco depende del valor maximo del ST y la movilidad del disco del valor minimo de ST
  }

  dibujarT () {
    fill(this.color);  
    let xx= (this.numero)*(w/8);
    rect(xx-(this.ancho/2), 200, 15, 200, 10, 10);
    noStroke();
    rect((xx-50-(this.ancho/2)), 395, 115, 25, 15, 15, 0, 0);
    fill(255);
    text (('T'+this.numero), this.centro-5, 410);
    //text (this.st, this.centro-5, 450);
    let top = min(this.st); 
    let tposm = this.st.length-1;
    // text (top+" en pos: "+tposm, this.centro-5, 470);
  }
}


/// Clase para los discos
class Disco {
  constructor (numeroD, colorD, tw, tpos, movil) 
  {
    this.numero = numeroD; /// numero del dico corresponde al tamaño
    this.color= colorD; /// color del disco arbitrario
    this.ancho = 40 +(this.numero*10);  // ancho del disco, depende del numero
    this.alto =25;
    this.centro = this.dx+(this.ancho/2);
    this.tw =tw; /// parametro que endica la torre en que está el disco
    this.tpos=tpos;  ///posición del disco en la torre
    this.dx = torres[this.tw-1].centro; /// posición en x del disco
    this.dy =torres[this.tw-1].base-(25+25*this.tpos); /// posicion en y del disco
    this.movil = movil;
  }

  dibujarDM() {
    let dc= this.color;
    fill(dc);
    let xx= 40 +(this.numero*10);
    stroke(0);
    rect(this.dx-(this.ancho/2), this.dy, xx, 25, 15, 15);
    fill(255);
    text(this.numero, this.dx-5, this.dy+15);
    // text("Estado: T1:"+ estado[0]+" T2:"+ estado[1]+" T3:"+ estado[2], t3.centro, 560);
    // text("Estado Anterior: "+ estado_anterior, t3.centro, 580); 
    // text("Clicks: "+ click, t3.centro, 590);
  }
  dibujarD() {
    let dc= this.color;
    fill(dc);
    let xx= 40 +(this.numero*10);
    stroke(0);
    this.dx = torres[this.tw-1].centro; /// posición en x del disco
    this.dy =torres[this.tw-1].base-(25+25*this.tpos); /// posicion en y del disco
    rect(this.dx-(this.ancho/2), this.dy, xx, 25, 15, 15);
    fill(255);
    text(this.numero, this.dx-5, this.dy+15);
  }
  onMe() { ////identica el mouse sobre un disco
    if (mouseX >  this.dx-(this.ancho/2) && mouseX< this.dx + (this.ancho/2)  && mouseY > this.dy && mouseY < this.dy+this.alto) {
      return this;
    } else {

      return 0;
    }
  }
}
function objeto() ///identifica el objeto sobre que se hace click, solo aplica a discos

{
  let di = d1.onMe();
  if (di==0)
  {
    di = d2.onMe();
  }
  if (di==0)
  {
    di = d3.onMe();
  }
  if (di==0)
  {
    di = d4.onMe();
  }
  if (di==0)
  {
    di = d5.onMe();
  }
  if (di==0)
  {
    di = d6.onMe();
  }
  return di;
}

function rehacer() /// redibuja todo
{
  background(223, 220, 227);  
  t1.dibujarT();
  t2.dibujarT();
  t3.dibujarT();
  d6.dibujarD();
  d5.dibujarD();
  d4.dibujarD();
  d3.dibujarD();
  d2.dibujarD();
  d1.dibujarD();
 // boton1.dibujarB();
 // text("Movimientos válidos: "+ movsok, t3.centro, 500); 
 // text("Movimientos NO válidos: "+ movsmal, t3.centro, 520); 
 //  // text("STG1: ", 700, 500);
  // text("STG2: ", 700, 550);
  // text("STG3: ", 700, 600);
  // text("DIFS1: ", 700, 450);


  //for (difs1 > 0; i--;)
  // {
  // stg1 [difs1]=0; 
  //  null;
  //  }
}

function rehacerM() /// redibuja todo
{
  background(223, 220, 227);  
  t1.dibujarT();
  t2.dibujarT();
  t3.dibujarT();
  d6.dibujarDM();
  d5.dibujarDM();
  d4.dibujarDM();
  d3.dibujarDM();
  d2.dibujarDM();
  d1.dibujarDM();
 // boton1.dibujarB();

  // text("Movimientos válidos: "+ movsok, t3.centro, 500); 
  // text("Movimientos NO válidos: "+ movsmal, t3.centro, 520); 
  // text("STG1: "+stg[0], 700, 500);
  // text("STG2: "+stg[1], 700, 520);
  // text("STG3: "+stg[2], 700, 540);
  // text("DIFS1: "+ difs[0] +" ; "+difs[1] +" ; "+difs[2], 700, 450);
  // text("NC: "+nc, 700, 300);
  // text("NUMEX: "+(numex+1), 700, 400);
  // text("ADY: "+ adyacentes, 120, 120);
  // text("RUTA Recomendada: "+ ruta, 120, 140);
  // text("Distancia desde SIG: "+ distfin, 120, 160);
  // text("STgg: "+stgg, 200, 280);
  // text("STg : "+estadios[1], 200, 300);
  // fill(255,0,0);
  // stroke(255,0,0);
  // fill(255,0,0);
  // text("Ruta Optima: "+ ruta_optima, 30, 450); 
  // fill(0,0,255);
  // text("Historico jugador: "+ partida, 30, 500); 
  // text("Metrica RH: "+ metrica_RH, 30, 520);
  // text("Metrica MOCH: "+ metrica_MOCH, 180, 520);
  // text("Historico RH: "+ RHS, 30, 540);
  // fill(0,255,0);
  // text("Metrica_BH: "+ metrica_BH, 30, 560); 
  // text("RESET_RH: "+ reset_RH, 180, 560);
  // text("Historico BH: "+ BHS, 30, 580);
  
  // text("Historico de sugerencia: "+ reco_partida, t1.centro, 50); 
  // text("ind_ram: "+ ind_ram, t1.centro, 70); 
  // text("ind_ramN: "+ ind_ramN, t1.centro, 90); 
  // text("ind_nr: "+ ind_nr, t1.centro, 110); 
  // text("ind_conf: "+ind_conf, t1.centro, 130); 
  // text("ind_confH: "+rachas, t1.centro, 150); 


  if (ver_grafo == true)
  {
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(map(xx[numex], minx, maxx, 600, 1200), map(yy_mod[numex], miny, maxy, 50, 550), 7);
    if (ruta.length>0) {
      fill(255, 255, 255);
      stroke(255, 255, 255);
      for (let i = 0; i< ruta.length; i++)
      {
        circle(map(xx[(ruta[i]-1)], minx, maxx, 600, 1200), map(yy_mod[(ruta[i]-1)], miny, maxy, 50, 550), 7);
      }
      fill(0);
      stroke(0);
    }
  }
}

function torreclick() /// retorna la torre (objeto)en la que se encuentra el disco sobre el que se hace click depende dp
{
  let torre = torres[dp.tw-1];
  //text("ULTIMA TORRE: "+ torre.numero, 400, 550);
  return torre;
}

function ontop()
{
 // text (t1.st.length,500,50);

 for (i = 0; i < 6; i++) {
  discos[i].movil=false;
}
if (t1.st.length<1) {
    // text("Vacio", t1.centro, 20);
  } else {
    //text(discos[min(t1.st)-1].numero, t1.centro, 20);
    discos[min(t1.st)-1].movil= true;
  }

  if (t2.st.length<1) {
    //text("Vacio", t2.centro, 20);
  } else {

    //text(discos[min(t2.st)-1].numero, t2.centro, 20);
    discos[min(t2.st)-1].movil= true;
  }
  if (t3.st.length<1) 
  {
    //text("Vacio", t3.centro, 20);
  } else
  {

    //text(discos[min(t3.st)-1].numero, t3.centro, 20);
    discos[min(t3.st)-1].movil= true;
  }
}

function compara()

  //i indica la posición del valor en el arreglo stg
  // k indica el numero en el arrreglo de estado con el que estoy comparando

  { 


    for (let k= 0; k < 729; k++) {
      nc=0;
      for (let i = 0; i < 18; i++)
      {
        if (stgg[i] !=estadios[k][i])
        {
        } else {
          nc = nc+1;
        }
      }
      if (nc > 17 ) {
        rt =k; 
        break;
      } else {
        rt = 999999;
      }
    }
    return rt;
  }

  function encontrarAdyacentes(origen)
  {
    let protoadyacentes=[];
    for (let i = 0; i < ss.length; i++)
    {
      if (ss[i]==origen)
      {
        protoadyacentes.push(tt[i]);
      }
    }
    for (let i = 0; i < tt.length; i++)
    {
      if (tt[i]==origen)
      {
        protoadyacentes.push(ss[i]);
      }
    }
    return protoadyacentes;
  }
  function recomendarAdyacente(vector)
  {
    var r;
    r = Math.max(...vector);
    for (let i =0; i < vector.length; i++)
    {
      if (distancia(vector[i]) < distancia(r))

      {
        r = adyacentes[i];
      } else 
      {
        r = r;
      }
    }
    return r;
  }

  function distancia (origen)
  {
    var rad = 0;
    var cat1 =0;
    var cat2=0;
    let mx = Math.max(...xx);
    let my = Math.max(...yy);
    cat1 = mx - xx[origen-1] ;
    cat2= my - yy[origen-1];
    rad = Math.pow((Math.pow(cat1, 2)+Math.pow(cat2, 2)), 0.5);
    return rad;
  }

  function calcularRuta()
  {
    let protoruta=[];
  // protoruta.push(numex+1);
  protoruta.push(reco);
  for (let n = 0; n < 10; n++) {
    let protoAd = encontrarAdyacentes(protoruta[protoruta.length-1]);
    var siguiente = recomendarAdyacente(protoAd);
    protoruta.push(siguiente);
  }
  return protoruta;
}

function cambiar_grafo ()
{
  ver_grafo= !ver_grafo;
}
