class Enemigo{
  constructor(){
    this.posX = (width/2);
    this.posY = 300;
    this.posYInicial=300;
    this.vidas = true;
    this.salto=false;
    this.alturaSalto=120;
    this.direccionSalto=-1;
    this.incrementoSalto=2;
    this.saltos=0;
    this.imagenes =[];
    this.frameActual = 0; // Índice del frame actual para la animación
    this.velocidadAnimacion = 10; 
  }
    
  dibujar(){
    if(this.vidas){
    this.animarMovimiento();
    this.modificarSalto();
  }
  }

    saltar(){
      if (this.salto==false){
        this.salto=true;
        this.saltos=this.saltos+1;}
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
         // this.posY = this.posYInicial;
        }
        } 
        
   }

   

  cargarImagenes(imagenesEnemigo){
    this.imagenes=imagenesEnemigo;
    }
  animarMovimiento(){
      if(!this.salto){
    this.frameActual = Math.floor(frameCount / this.velocidadAnimacion) % 6;
      image(this.imagenes[this.frameActual], this.posX, this.posY, 200, 200);
    }else{
      if(this.direccionSalto==-1){image(this.imagenes[5], this.posX, this.posY-100, 200, 200);
      }else{image(this.imagenes[6], this.posX, this.posY-100, 200, 200);}
    
    }
  }

  }
