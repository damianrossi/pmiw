class Piedra{
    
constructor (posX,posY,velocidad,piedra){
this.posX=posX;
this.posY=posY;
this.velocidad=velocidad;
this.miColor=color(0,255,0);
this.piedra=piedra;

}
dibujar(){
image(this.piedra, this.posX, this.posY, 100, 100);
this.mover();
}

mover(){
this.posX=this.posX-this.velocidad}

}
