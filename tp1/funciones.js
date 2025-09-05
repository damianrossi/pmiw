function cuadrados(numCuadrados, tamano, rot, col1, col2, centroX, centroY, cuadrante) {
// también se cambia void por function y no hay necesidad de declarar los tipos de variables. 
// Se declaran las variables con let. 
  let rotAcumulado = 0;
  let tam = tamano / cuadrante;
  let tam2 = tam;
  let centroX_, centroY_;
  let factor = 0;

  if (cuadrante == 2) factor = 80;
  if (cuadrante == 3) factor = 100;
  if (cuadrante == 4) factor = 120;

  for (let i = 0; i < cuadrante; i++) {
    for (let j = 0; j < cuadrante; j++) {
      centroX_ = centroX - factor + tam * i;
      centroY_ = centroY - factor + tam * j;

      for (let k = 0; k < numCuadrados; k++) {
        let col = (k % 2 == 0) ? col1 : col2;

        push();
            translate(centroX_, centroY_);
            rotate(radians(rotAcumulado));
            stroke(col);
            fill(col);
            rect(0, 0, tam2, tam2);
        pop();

        tam2 *= 0.8;
        rotAcumulado += rot;
      }
      tam2 = tam;
      rotAcumulado = 0;
    }
  }
}
//modifico la funcion cuadrente por detectarCuadrante.
function detectarCuadrante(cuadrante) {
  let cuad = cuadrante;
  if ((mouseX > 400) && (mouseX < 600)) {
    if ((mouseY > 0) && (mouseY < 200)) {
      cuad = 1;
    } else if ((mouseY > 200) && (mouseY < 400)) {
      cuad = 3;
    }
  } else if ((mouseX > 600) && (mouseX < 800)) {
    if ((mouseY > 0) && (mouseY < 200)) {
      cuad = 2;
    } else if ((mouseY > 200) && (mouseY < 400)) {
      cuad = 4;
    }
  }
  return cuad;
}

function teclaPresionada() {
  if((key>='0')&&(key<='9')){
  if (key == '1') {   //Agrega cuadrado más chico (sube en 1 la cantidad de  cuadrados)
    numCuadrados++;
  } 
  if (key == '2') {  //resta un cuadrado (resta en 1 la cantidad de  cuadrados)
    numCuadrados--;
    if (numCuadrados < 1) {
      numCuadrados = 1;  
    }
  }
    if (key == '3') {   // color random para los cuadrados negros - Excepto componente 2.
    col1=color(random(255),255,random(255));
  } 
  if (key == '4') { // color random para los cuadrados blancos - Exepto componente 3.
    col2=color(random(255),random(255),255);
  }
    if (key == '5') { //cambia dirección del ángulo.
    angulo*=-1;
  }
  if (key == '6') { // gira el ángulo una vez más
   angulo+=angulo;
  }
    if (key == '7') { //Disminuye el tamaño de los cuadrados.
   tamano*=0.9;
  }
      if (key == '8') { //Aumenta el tamaño de los cuadrados.
   tamano*=1.1;
  }
  if (key == '9') {  //Traslada los cuadrados donde está el mouse posicionado.
   centroX=mouseX;
   centroY=mouseY;
  }
  if (key == '0') { // Resetea los parametros.
      col1=color(0);
      col2=color(255);
      numCuadrados=12;
      angulo = -12;
      tamano=400*0.8;
      centroX=width /4*3;
      centroY=height / 2;
      cuadrante=1;
    }
  }
}