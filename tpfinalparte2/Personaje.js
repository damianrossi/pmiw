class Personaje{
  constructor(){
//    this.posX = (width/2)-150;
    this.posX = 0;
    this.posY = 0;
    this.posYInicial=350;
    this.vidas = true;
    this.salto=false;
    this.alturaSalto=120;
    this.direccionSalto=-1;
    this.incrementoSalto=2;
    this.imagenes =[];
    this.frameActual = 0; 
    this.velocidadAnimacion = 10; 
  }
    
  dibujar(){
    if(this.vidas){
      if(!this.salto){
    this.frameActual = Math.floor(frameCount / this.velocidadAnimacion) % 5;
      image(this.imagenes[this.frameActual], this.posX, (this.posY-60), 200, 200);
    }else{
      if(this.direccionSalto==-1){image(this.imagenes[5], this.posX, this.posY-100, 200, 200);
      }else{image(this.imagenes[6], this.posX, this.posY-60, 200, 200);}
    
    }
    this.modificarSalto();
  }
  }
      teclaPresionada(){
    if(keyCode === UP_ARROW){
      this.saltar();
    }
    }
    saltar(){
      if (this.salto==false){
      this.salto=true;
    }
  }
      matar(){this.vidas=false;}
      
    modificarSalto(){
        if(this.salto==true){
          this.posY = this.posY + (this.direccionSalto * this.incrementoSalto);
        
         if(this.posYInicial - this.posY >= this.alturaSalto){
          this.direccionSalto = 1;
        }
        if(this.posYInicial - this.posY <= 0){
          this.salto = false;
          this.direccionSalto = -1;
          this.posY = this.posYInicial;
        }
        } 
        
   }


  cargarImagenes(imagenesPersonaje){
   this.imagenes=imagenesPersonaje;

 }
  }
