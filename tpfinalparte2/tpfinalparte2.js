/*-----------------------------------------.
|                                          | 
|   Alumno: Rossi, Damián                  | 
|   Legajo 120374/6                        | 
|   Youtube: https://youtu.be/m0e9lzl_hac  | 
|   Alumno: Ladaga, Francisco              | 
|   Legajo 88293/6                         | 
|   Youtube:                               |
|                                          |
.-----------------------------------------*/


let juego;
let imagenesEnemigo= [];
let imagenesPersonaje= [];
let fondo=[];
let piedras=[];
let botones=[];
let texto=[];
let botonesSonido=[];
function preload() {
cargarDatosPreload();
  
}

function setup() {
  createCanvas(640,480);
  juego = new Juego();
  juego.cargarImagenes(fondo,imagenesEnemigo,imagenesPersonaje,piedras,botones,botonesSonido,texto);

}


function draw() {
 background(255);
  juego.dibujar();

  if(keyIsPressed){
                    juego.teclaPresionada();
                  }
}
