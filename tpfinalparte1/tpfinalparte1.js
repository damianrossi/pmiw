/*_____________________________
|                              | 
|   Alumno: Rossi, Damián      | 
|   Legajo 120374/6            | 
|   Youtube:                   | 
|   Alumno: Ladaga, Francisco  | 
|   Legajo 88293/6             | 
|   Youtube:                   |
|                              |
|_____________________________*/

let volumen=0;
let sonidoMusica;
let relatos = [];
let imagenes = [];
let pantalla = 0;
let botones=[];

function preload() {
  cargarimagenes();
}

function setup() {
  createCanvas(640, 480);
  relato();
  textoBotones();
  sonidoMusica = document.getElementById("sonido-musica");
}

function draw() {
  mostrarimagen();
  mostrarRelato();

  if (pantalla==0 || pantalla==2 || pantalla==4 || pantalla==13){
  pantallaHistoriaDosBotones(botones[pantalla], botones[pantalla+20]);
  }else{pantallaHistoriaUnBoton(botones[pantalla])}
image(imgencendido,600,10);
image(imgenapagado,600,50); 
}


function mousePressed() {
    pantallaPosicion();
    activarMusica();
}
