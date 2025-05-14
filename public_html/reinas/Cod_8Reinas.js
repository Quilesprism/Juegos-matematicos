
//nuevo

let board = new Array();  // Matriz que representa el tablero (0: casilla vacía, 1: reina)
let tileSize;    // Tamaño de cada casilla del tablero
let queenPositions = new Array(); // Matriz para almacenar las posiciones de las reinas
let restarts = 0; // Variable para contar cuántas veces se reinicia el juego
let indiceVecQueen=0;
let cnv;

function setup() {
   // ancho=windowWidth;
    //alto=windowHeight;
 // var cnv = createCanvas(windowWidth, windowHeight);
  cnv = createCanvas(400, 400);
  cnv.position(730, 130);
  
  //createCanvas(400, 400);
  tileSize = width / 8;
  initializeBoard();
}


function draw() {
  background(255);
  drawBoard();
}





function drawBoard() {
  for (var col = 0; col < 8; col++) {
    for (var row = 0; row < 8; row++) {
      fill((col + row) % 2 == 0 ? 255 : 'rgba(75,3,76, 0.25)');
      strokeWeight(2);
      rect(col * tileSize, row * tileSize, tileSize, tileSize);
      if (board[col][row] == 1) {
        drawQueen(col, row);
      }
    }
  }
}

function initializeBoard() {

      indiceVecQueen=0;
      for(var fila=0; fila<8;fila++){
        board[fila]=new Array();
        queenPositions[fila]=0;
       
        for(var columna=0;columna<8;columna++){
            board[fila][columna]=0;
            }

      }
    
  }

function mousePressed() {
    let col = Math.trunc(mouseX / tileSize);
    let row = Math.trunc(mouseY / tileSize);

    if (mouseX<400 && mouseX>0 && mouseY<400 && mouseY>0){
    
   if (col >= 0 && col < 8 && row >= 0 && row < 8 && board[col][row] == 0 && !isUnderAttack(col, row)) {
      board[col][row] = 1; // Colocar una reina en la casilla
      //queenPositions[restarts][col] = row + 1; // Actualizar la matriz de posiciones de reinas
      queenPositions[indiceVecQueen]=row+1;
      indiceVecQueen++;
    } else {
      printQueens(); // Imprimir las posiciones de las reinas colocadas antes de reiniciar el juego
      initializeBoard(); // Reiniciar el juego si se hace clic en una casilla ocupada o amenazada
      restarts++; // Incrementar el contador de reinicios
      
    }
        
    }
  }


function drawQueen(col, row) {
    fill(73, 53, 73);
    ellipse(col * tileSize + tileSize / 2, row * tileSize + tileSize / 2, tileSize * 0.8, tileSize * 0.8);
  }

  function isUnderAttack(col, row) {
    for (var i = 0; i < 8; i++) {
      if (board[i][row] == 1 || board[col][i] == 1 || (col + i < 8 && row + i < 8 && board[col + i][row + i] == 1) || (col - i >= 0 && row - i >= 0 && board[col - i][row - i] == 1) || (col + i < 8 && row - i >= 0 && board[col + i][row - i] == 1) || (col - i >= 0 && row + i < 8 && board[col - i][row + i] == 1)) {
        
      return true;
      }
    }
    return false;
  }


function printQueens() {
 
  var vectorQueens = new Array();

  vectorQueens=queenPositions.join(',');
  print("intento: " + restarts); // Mostrar el número de reinicios en la consola
  print("Reinas colocadas en las filas:");
  print(vectorQueens);
  
   let uid = $("#uid").text();
   
   $.post("servicios/insercion_Juego_8reinas.php", {uid : uid, intento:restarts, vector: vectorQueens.toString()} )
	.done(function( data ) {
		//alert( "Data Loaded: " + data );
	});
  
  //print();
}

