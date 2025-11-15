class Pantalla {
  constructor() {
    this.posX = 0;
    this.posY = 0;
    this.pantallaJuego = [];
    this.texto = [];
    this.botones = [];
    this.botonesSonido = []; 
    this.sonidoMusica = document.getElementById("sonido-musica");
  }

    dibujar(valor){
      
    if(valor==3){
image(this.pantallaJuego[valor], this.posX, this.posY,4500,480);

this.moverPantalla();
image(this.botonesSonido[0],600,10);
image(this.botonesSonido[1],600,50); 

  
  }else{
    image(this.pantallaJuego[valor], this.posX, this.posY,640,480);
    this.pantallaHistoriaUnBoton(this.botones[valor])
    image(this.botonesSonido[0],600,10);
    image(this.botonesSonido[1],600,50);
    
    if(valor==0){
      push();
        fill(0);
        textSize(25);
        textAlign(LEFT, TOP);
        text(this.texto[valor], 120, 230, 580, 580);
      pop();
}
    if(valor==1){
      push();
        textSize(30);
        textAlign(LEFT, TOP);
        fill(0);
        rect(0,400,640,480);
        fill(0,120,215);
        text(this.texto[valor], 80, 410, 580, 580);
        fill(255);
        text(this.texto[valor+3], 95, 450, 580, 580);
    pop();
}
    if(valor==2){
      push();
        textSize(30);
        textAlign(LEFT, TOP);
        fill(0);
        rect(0,400,640,480);
        fill(247,0,58);
        text(this.texto[valor], 80, 410, 580, 580);
        fill(255);
        text(this.texto[valor+3], 95, 450, 580, 580);
      pop();
}


}
if ( this.colisionBoton(615, 65, 30, 30)&& mouseIsPressed) {
this.activarMusica() ;
}
 if ( this.colisionBoton(615, 25, 30, 30)&& mouseIsPressed ) {
    this.desactivarMusica();
  }

  }

  cargarImagenes(fondo, botones, botonesSonido,texto) {
    this.pantallaJuego = fondo;
    this.texto = texto;
    this.botones = botones;
    this.botonesSonido = botonesSonido;
  }

  moverPantalla() {
    this.posX -= 1;
  }

  dibujaBoton(txt, x, y, w, h) {
    push();
    rectMode(CENTER);
    textAlign(CENTER, CENTER);
    if (this.colisionBoton(x, y, w, h)) {
      fill(0, 50, 200);
      rect(x, y, w, h);
      fill(0);
      text(txt, x, y);
    } else {
      fill(0);
      rect(x, y, w, h);
      stroke(0);
      fill(255);    
      text(txt, x, y);
    }
    
  }

  colisionBoton(x, y, w, h) {
    return (mouseX > x - w / 2 && mouseX < x + w / 2 && mouseY > y - h / 2 && mouseY < y + h / 2);
    console.log( (mouseX > x - w / 2 && mouseX < x + w / 2 && mouseY > y - h / 2 && mouseY < y + h / 2));
  }

  pantallaHistoriaUnBoton(txt_btn_A) {
    push();
    fill(255);
    textAlign(CENTER);
    textSize(14);
    this.dibujaBoton(txt_btn_A, 120, 30, 200, 40);
    pop();
  }

  mostrartexto(valor) {
    push();
    fill(255);
    textSize(16);
    textAlign(LEFT, TOP);
    text(this.texto[valor], 20, 340, 580, 580); 
    pop();
  }

    activarMusica() {
    this.sonidoMusica.play();  // Reproduce la música
    }
     desactivarMusica() {    
        this.sonidoMusica.pause();  // Pausa la música
    }
  
}
