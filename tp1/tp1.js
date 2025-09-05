// -----------------------------------
// Rossi Damián                     
// Legajo: 120364/6                   
// Comisión 3                     
// -----------------------------------

// Inicio código TP1 - Programación para medios interactivos orientada a las tecnologías web

// En las variables ya no es necesario declarar el tipo, por lo que solo declararlas con let alcanza.
let cuadradosImg;       
let numCuadrados = 12;
let tamano = 400 * 0.8;
let angulo = -12;
let col1, col2, centroX, centroY;
let cuadrante = 1;

// Se cambian los void por function y se agrega preload para cargar la imagen cuadrados.jpg
function preload() {
  cuadradosImg = loadImage('data/cuadrados.jpg');
}

function setup() {
  createCanvas(800, 400); //Se modifica size por createCanvas
  rectMode(CENTER);
  col1 = color(0);
  col2 = color(255);
  centroX = (width / 4) * 3;
  centroY = height / 2;
}

function draw() {
  background(255);
  image(cuadradosImg, 0, 0, 400, 400);
  cuadrados(numCuadrados, tamano, angulo, col1, col2, centroX, centroY, cuadrante);
}

function keyPressed() {
  teclaPresionada();
}

function mousePressed() {
  //modifico la funcion cuadrante por detectarCuadrante.
  cuadrante = detectarCuadrante(cuadrante);
}