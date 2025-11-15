function cargarDatosPreload() {

for (let i = 0; i <= 6; i++) {
 
    let ruta = "data/enemigo" + nf(i, 2) + ".png";
    
    let ruta2 = "data/personaje" + nf(i, 2) + ".png";

  imagenesEnemigo[i] = loadImage(ruta);


    imagenesPersonaje[i] = loadImage(ruta2);
   
  }

   for (let i=0; i<=3; i++ ) {
    fondo[i] = loadImage("data/imagen"+nf(i, 2)+".png  ");
  }
  botonesSonido[0]=loadImage("data/apagado.png");
  botonesSonido[1]=loadImage("data/encendido.png");


  let ruta="data/piedra00.png";
  piedra= loadImage(ruta);


  botones[0] = "INICIAR";
  botones[1] = "REINICIAR";
  botones[2] = "REINICIAR";
  
  texto[0]= "⬆ para saltar";
  texto[1]=" ¡¡GANASTE, atrapaste al Jabalí!!";
  texto[2]=" ¡¡PERDISTE, se te escapo el Jabalí!!";
  texto[4]=" Ladaga Francisco - Rossi Damián ";
  texto[5]=" Ladaga Francisco - Rossi Damián ";
  

}
