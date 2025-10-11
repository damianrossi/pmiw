function relato() {
  // Historia
  relatos[1] = "Hércules, el hijo semidiós de Zeus y la mortal Alcmena, nació dotado de fuerza sobrehumana, a pesar de la malicia de Hera.";
  relatos[2] = "Tras matar a su familia en un ataque de locura, fue condenado por el oráculo a realizar Doce Trabajos para el rey Euristeo.";
  relatos[3] = "Hércules decide no hacer las tareas y vivir desterrado del reino por haber matado a toda su familia";
  relatos[4] = "Entre sus primeras pruebas debe elegir entre capturar a la creta, la cierva y el jabalí o cazar a un león, hidra y unos pájaros.";
  relatos[5] = "Matar al león de Nemea: Hércules mató a un león invulnerable con la fuerza de sus propias manos.";
  relatos[6] = "Matar a la Hidra de Lerna: Una serpiente monstruosa de múltiples cabezas cuya sangre era venenosa.";
  relatos[7] = "Matar a los pájaros del Estínfalo: Aves con picos, garras y alas de bronce que aterrorizaban la región.";
  relatos[8] = "Capturar al toro de Creta: Un toro salvaje que expulsaba fuego por la nariz.";
  relatos[9] = "Capturar a la cierva de Cerinea: Una cierva sagrada de Artemisa con cuernos de oro.";
  relatos[10] = "Capturar al jabalí de Erimanto: Un jabalí salvaje que causaba estragos en la región de Erimanto.";
  relatos[11] = "Luego de las primeras 3 pruebas debería limpiar los establos de Augías. Hércules desvió dos ríos para limpiar los sucios establos de Augías en un solo día.";
  relatos[12] = "Proxima prueba fue robar las yeguas de Diomedes, yeguas antropófagas que comen carne humana.";
  relatos[13] = "su sexta prueba fue obtener el cinturón de Hipólita, cinturno mágico de la reina amazona Hipólita.";
  relatos[14] = "Enamorarse de las amzonas y reacer su vida lejos de Euristeo.";
  relatos[15] = "La siguiente prueba fue robar el ganado de Gerión. El monstruoso gigante Gerión poseía un rebaño de bueyes rojos.";
  relatos[16] = "Continaundo con las pruebas, debería robar las manzanas de oro de las Hespérides. Manzanas mágicas del jardín de las Hespérides.";
  relatos[17] = "Por último debería capturar a Cerbero, El perro de tres cabezas que guardaba las puertas del inframundo.";
  relatos[18]= "Tras superar las pruebas, Hércules se casó de nuevo y los dioses lo aceptaron entre ellos, concediéndole la inmortalidad.";
  relatos[19]= "Rossi Damián (120374/6)  y Ladaga Francisco (88293/6)";
  }
  
function textoBotones() {
  // Botones
  botones[0] = "COMENZAR";
  botones[1] = "SIGUIENTE"; 
  botones[2] = "NO HACER PRUEBAS"; //FALTA HACER LAS PRUEBAS
  botones[3] = "CRÉDITOS";
  botones[4] = "CAZAR";
  botones[5] = "SIGUIENTE";
  botones[6] = "SIGUIENTE";
  botones[7] = "SIGUIENTE";
  botones[8] = "SIGUIENTE";
  botones[9] = "SIGUIENTE";
  botones[10] = "SIGUIENTE";
  botones[11] = "SIGUIENTE";
  botones[12]= "SIGUIENTE";
  botones[13] = "VIVIR CON LAS AMAZONAS";
  botones[14] = "CRÉDITOS";
  botones[15] = "SIGUIENTE";
  botones[16] = "SIGUIENTE";
  botones[17] = "SIGUIENTE";
  botones[18] = "CRÉDITOS";
  botones[19]="INICIO";
  botones[20]="CRÉDITOS";
  botones[22] = "HACER PRUEBAS"; 
  botones[24] = "CAPTURAR"; 
  botones[33] = "SEGUIR CON PRUEBAS";
}
  
  function mostrarRelato() {
    fill(255);
    stroke (1);
    textSize(22);
    textAlign(LEFT, TOP);
    text(relatos[pantalla], 20, 390, 580, 580); // Ajustar el texto dentro del canvas
  }
