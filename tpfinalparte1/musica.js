 function activarMusica(){
  if ( colisionBoton(615, 25, 30, 30)) {
    sonidoMusica.currentTime=0;
    sonidoMusica.play();
    //volumen=1;
  }
  if ( colisionBoton(615, 65, 30, 30) ) {
    sonidoMusica.pause();
  }
}
