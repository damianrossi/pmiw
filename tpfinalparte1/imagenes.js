function cargarimagenes() {
  // Cargar imágenes
   for (let i=0; i<=19; i++ ) {
    imagenes[i] = loadImage("data/pantalla"+nf(i, 2)+".png  ");
  }
  imgencendido=loadImage("data/encendido.png ");
  imgenapagado=loadImage("data/apagado.png ");
}

function mostrarimagen(){
background(255);
  image(imagenes[pantalla], 0, 0); // Mostrar la imagen correspondiente
}
