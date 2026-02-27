
document.addEventListener('wheel', function (e) {
  if (e.ctrlKey) {
    e.preventDefault();
  }
}, { passive: false });



let tieneLlaveBanio = false;
let estaAbiertoElBanio = false; 
let tieneBarra = false;
let intentosCodigo = 3;
let estaAbiertaVentana = false;


document.getElementById("puertaBanio").style.display = "none";
document.getElementById("puertaBanioAbierta").style.display = "none";
document.getElementById("parrafo1").style.display = "none";
document.getElementById("puerta1").style.display = "none";
document.getElementById("puerta2").style.display = "none";
document.getElementById("puertaIT").style.display = "none";
document.getElementById("ventanaIT").style.display = "none";
document.getElementById("ventanaBanio").style.display = "none";
document.getElementById("llave").style.display = "none";
document.getElementById("flecha1").style.display = "none";
document.getElementById("flecha2").style.display = "none";
document.getElementById("flecha3").style.display = "none";
document.getElementById("llaveBanio").style.display = "none";
document.getElementById("barra").style.display = "none";
document.getElementById("ventanaBanio").style.display = "none";
document.getElementById("flechaClase").style.display = "none";
document.getElementById("puertaBanio1").style.display = "none";
document.getElementById("puertaBanio2").style.display = "none";
    document.getElementById("flecha6").style.display = "none";










//Escena 1, clase
function inicio() {
  document.getElementById("principal").style.backgroundImage = "url(img/Escena1.png)";
  document.getElementById("pizarra").style.display = "block";
  document.getElementById("papel").style.display = "block";
  document.getElementById("corcho").style.display = "none";
    document.getElementById("llave").style.display = "none";
  document.getElementById("puertaBanio").style.display = "none";
  document.getElementById("puerta1").style.display = "none";
  document.getElementById("puerta2").style.display = "none";
  document.getElementById("flecha1").style.display = "none";
  document.getElementById("flechaClase").style.display = "none";
  document.getElementById("parrafo1").style.display = "none";
    document.getElementById("flecha6").style.display = "block";
}


function pizarra() {

  document.getElementById("principal").style.display = "none";
  document.getElementById("pizarraGrande").style.display = "block";
  document.getElementById("pizarraGrande").style.backgroundImage = "url('img/pizarra.jpg')";
  document.getElementById("parrafo1").style.display = "block";
  document.getElementById("parrafo1").innerHTML = "Seguro que se fué a la cafeteria pero la puerta esta cerrada con llave";

}
function noPizarra() {

  document.getElementById("principal").style.display = "block";
  document.getElementById("pizarraGrande").style.display = "none";
  document.getElementById("parrafo1").style.display = "none";

}


function papel() {

  document.getElementById("principal").style.display = "none";
  document.getElementById("papelGrande").style.display = "block";
  document.getElementById("papelGrande").style.backgroundImage = "url('img/papel.png')";
  document.getElementById("parrafo1").style.display = "none";
   const elemento = document.getElementById("parrafo1");
  let oculto = document.getElementById("parrafo1").style.display;
  document.getElementById("parrafo1").style.display = "block";

  const contenidoOriginal = elemento.innerHTML;
  elemento.innerHTML = "Nada, sólo son garabatos del profesor";
  setTimeout(() => {
    elemento.innerHTML = contenidoOriginal;
    if (oculto == "none") {
      document.getElementById("parrafo1").style.display = "none";
    }
  }, 2000);

}
function noPapel() {
  document.getElementById("principal").style.display = "block";
  document.getElementById("papelGrande").style.display = "none";
  


}


function corcho() {

  document.getElementById("principal").style.backgroundImage = "url(img/Escena1.png)";
  // cambiar la imagen por el fondo con la llave
  document.getElementById("corcho").style.display = "none";
  document.getElementById("llave").style.display = "block";
  document.getElementById("parrafo1").style.display = "block";
  document.getElementById("parrafo1").innerHTML = "¡¡La llave de la puerta del aula!!";


}







//Escena 2,pasillo

function pasillo() {

  document.getElementById("pizarra").style.display = "none";
  document.getElementById("papel").style.display = "none";
  document.getElementById("corcho").style.display = "none";
  document.getElementById("llave").style.display = "none";
  document.getElementById("puertaIT").style.display = "none";
  document.getElementById("flecha2").style.display = "none";
  document.getElementById("ventanaIT").style.display = "none";
  document.getElementById("principal").style.backgroundImage = "url(img/Escena2.png)"
  document.getElementById("parrafo1").style.display = "none";
  document.getElementById("puertaBanio").style.display = "block";
  document.getElementById("puerta1").style.display = "block";
  document.getElementById("puerta2").style.display = "block";
  document.getElementById("flechaClase").style.display = "block";
    document.getElementById("flecha4").style.display = "none";

  document.getElementById("flecha1").style.display = "none";
   document.getElementById("llaveBanio").style.display = "none";

  document.getElementById("barra").style.display = "none";
  document.getElementById("ventanaBanio").style.display = "none";
  document.getElementById("puertaBanio1").style.display = "none";
document.getElementById("puertaBanio2").style.display = "none";
document.getElementById("flecha3").style.display = "none";
  document.getElementById("flecha6").style.display = "none";





}
function pasillo2() {

  document.getElementById("pizarra").style.display = "none";
  document.getElementById("papel").style.display = "none";
  document.getElementById("corcho").style.display = "none";
  document.getElementById("llave").style.display = "none";
  document.getElementById("puertaIT").style.display = "none";
  document.getElementById("flecha2").style.display = "none";
  document.getElementById("ventanaIT").style.display = "none";
  document.getElementById("principal").style.backgroundImage = "url(img/Escena2.png)"
  document.getElementById("parrafo1").style.display = "none";
  document.getElementById("puertaBanio").style.display = "block";
  document.getElementById("puerta1").style.display = "block";
  document.getElementById("puerta2").style.display = "block";
  document.getElementById("flechaClase").style.display = "block";
    document.getElementById("flecha4").style.display = "none";

  document.getElementById("flecha1").style.display = "block";
   document.getElementById("llaveBanio").style.display = "none";

  document.getElementById("barra").style.display = "none";
  document.getElementById("ventanaBanio").style.display = "none";
  document.getElementById("puertaBanio1").style.display = "none";
document.getElementById("puertaBanio2").style.display = "none";
document.getElementById("flecha3").style.display = "none";
  document.getElementById("flecha6").style.display = "none";





}

function puertaCerrada() {
 
  const elemento = document.getElementById("parrafo1");
  let oculto = document.getElementById("parrafo1").style.display;
  document.getElementById("parrafo1").style.display = "block";

  const contenidoOriginal = elemento.innerHTML;
  elemento.innerHTML = "Oh, vaya! Está cerrada";
  setTimeout(() => {
    elemento.innerHTML = contenidoOriginal;
    if (oculto == "none") {
      document.getElementById("parrafo1").style.display = "none";
    }
  }, 3000);



}

function necesitoLlave() {
   document.getElementById("flecha1").style.display = "block";
  if (estaAbiertoElBanio) {
    EscenaBanio(); // ← nombre correcto de tu función
  } else if (tieneLlaveBanio) {
    document.getElementById("slot1").style.backgroundImage = "none";
    tieneLlaveBanio = false;
    estaAbiertoElBanio = true;
    EscenaBanio(); // ← nombre correcto de tu función
  } else {
    const elemento = document.getElementById("parrafo1");
    let oculto = elemento.style.display;
    elemento.style.display = "block";
    const contenidoOriginal = elemento.innerHTML;
    elemento.innerHTML = "Necesito una llave para abrirla";
    setTimeout(() => {
      elemento.innerHTML = contenidoOriginal;
      if (oculto == "none") elemento.style.display = "none";
    }, 3000);
  }
}

function pasilloMini() {
  document.getElementById("principal").style.backgroundImage = "url(img/Escena3.png)"
  document.getElementById("puerta1").style.display = "none";
  document.getElementById("puerta2").style.display = "none";
  document.getElementById("flecha1").style.display = "none";
  document.getElementById("puertaBanio").style.display = "none";
  document.getElementById("puertaIT").style.display = "block";
  document.getElementById("flecha2").style.display = "block";
  document.getElementById("ventanaIT").style.display = "block";
  document.getElementById("llaveBanio").style.display = "none";
  document.getElementById("flecha3").style.display = "none";
  document.getElementById("barra").style.display = "none";
  document.getElementById("flechaClase").style.display = "none";





}

function verVentanaIT() {

  const elemento = document.getElementById("parrafo1");
  let oculto = document.getElementById("parrafo1").style.display;
  document.getElementById("parrafo1").style.display = "block";

  const contenidoOriginal = elemento.innerHTML;
  elemento.innerHTML = "El departamento de informática";
  setTimeout(() => {
    elemento.innerHTML = contenidoOriginal;
    if (oculto == "none") {
      document.getElementById("parrafo1").style.display = "none";
    }
  }, 3000);


}

function pasarIT() {
  document.getElementById("principal").style.backgroundImage = "url(img/departamento.png)";
  document.getElementById("puertaIT").style.display = "none";
  document.getElementById("flecha2").style.display = "none";
  document.getElementById("ventanaIT").style.display = "none";
  const elemento = document.getElementById("parrafo1");
  let oculto = document.getElementById("parrafo1").style.display;
  document.getElementById("parrafo1").style.display = "block";

  const contenidoOriginal = elemento.innerHTML;
  elemento.innerHTML = "Buscaré algo que me sirva de ayuda";
  setTimeout(() => {
    elemento.innerHTML = contenidoOriginal;
    if (oculto == "none") {
      document.getElementById("parrafo1").style.display = "none";
    }
  }, 3000);

  // Solo muestra la llave si no se ha cogido ya
  if (!tieneLlaveBanio && !estaAbiertoElBanio) {
    document.getElementById("llaveBanio").style.display = "block";
  }

  // Solo muestra la barra si no se ha cogido ya
  if (!tieneBarra && !estaAbiertaVentana) {
    document.getElementById("barra").style.display = "block";
  }

  document.getElementById("flecha3").style.display = "block";
}



function cogerLlave() {
  document.getElementById("slot1").style.backgroundImage = "url('img/llave.png')";
  document.getElementById("llaveBanio").style.display = "none";
  tieneLlaveBanio = true;  
}


function cogerBarra() {
  document.getElementById("slot2").style.backgroundImage = "url('img/barra.png')";
  document.getElementById("barra").style.display = "none";
  tieneBarra = true; 
}

function EscenaBanio(){
  document.getElementById("principal").style.backgroundImage = "url(img/Escena4.png)";
  document.getElementById("puertaBanio").style.display = "none";
  document.getElementById("puerta1").style.display = "none";
  document.getElementById("puerta2").style.display = "none";
  document.getElementById("flecha1").style.display = "none";
  document.getElementById("flecha3").style.display = "none";
  document.getElementById("flecha4").style.display = "block";
  document.getElementById("flechaClase").style.display = "none";
  document.getElementById("ventanaBanio").style.display = "block";
  document.getElementById("puertaBanio1").style.display = "block";
  document.getElementById("puertaBanio2").style.display = "block";
  document.getElementById("panelCodigo").style.display = "none";
  document.getElementById("candado").style.display = "none";      // ← añadido
  document.getElementById("flecha5").style.display = "none";     // ← añadido
}

// Sustituye o añade la función salida()
function salida() {
  document.getElementById("principal").style.backgroundImage = "none";
 document.getElementById("principal").style.backgroundImage = "url(img/valla.png)";
  document.getElementById("ventanaBanio").style.display = "none";
  document.getElementById("puertaBanio1").style.display = "none";
  document.getElementById("puertaBanio2").style.display = "none";
  document.getElementById("flecha4").style.display = "none";
  document.getElementById("candado").style.display = "block";
  document.getElementById("flecha5").style.display = "block";
 document.getElementById("parrafo1").style.display = "block";
document.getElementById("parrafo1").innerHTML = "Hay un candado en la verja... necesito el código";
setTimeout(() => {
  document.getElementById("parrafo1").style.display = "none";
}, 3000);
}

function mostrarCodigo() {
  document.getElementById("panelCodigo").style.display = "block";
  document.getElementById("mensajeCodigo").innerHTML = "";
  document.getElementById("inputCodigo").value = "";
}

function cerrarPanel() {
  document.getElementById("panelCodigo").style.display = "none";
}

function comprobarCodigo() {
  const codigo = document.getElementById("inputCodigo").value;
  if (codigo === "738") {
    document.getElementById("panelCodigo").style.display = "none";
    intentosCodigo = 3; // resetea por si acaso
    victoria();
  } else {
    intentosCodigo--;
    document.getElementById("intentosTexto").style.display = "none";
    document.getElementById("inputCodigo").value = "";
    if (intentosCodigo <= 0) {
      document.getElementById("panelCodigo").style.display = "none";
      gameOver();
    } else {
      document.getElementById("mensajeCodigo").innerHTML = 
        `Código incorrecto... Te quedan ${intentosCodigo} intento${intentosCodigo === 1 ? "" : "s"}`;
    }
  }
}
function gameOver() {
  document.getElementById("principal").style.backgroundImage = "none";
  document.getElementById("principal").style.backgroundColor = "#0a0a0a";
  document.getElementById("candado").style.display = "none";
  document.getElementById("flecha5").style.display = "none";
  document.getElementById("parrafo1").style.display = "none";
  document.getElementById("inventario").style.display = "none";

  const msg = document.createElement("div");
  msg.style.cssText = `
    position: absolute; top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    text-align: center; color: red;
    font-family: Gamer; font-size: 4vw;
  `;
  msg.innerHTML = "💀 Has fallado los 3 intentos...<br><br>Recarga la página para intentarlo de nuevo";
  document.getElementById("principal").appendChild(msg);
}

function victoria() {
  document.getElementById("principal").style.backgroundImage = "none";
  document.getElementById("principal").style.backgroundColor = "#0a0a0a";
  document.getElementById("candado").style.display = "none";
  document.getElementById("flecha5").style.display = "none";
  document.getElementById("parrafo1").style.display = "none";
  document.getElementById("inventario").style.display = "none";


  const msg = document.createElement("div");
  msg.style.cssText = `
    position: absolute; top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    text-align: center; color: goldenrod;
    font-family: Gamer; font-size: 4vw;
  `;
  msg.innerHTML = "¡Has escapado! ";
  document.getElementById("principal").appendChild(msg);
}

function ventanaCerrada() {
  if (tieneBarra || estaAbiertaVentana) {
    if (!estaAbiertaVentana) {
      document.getElementById("slot2").style.backgroundImage = "none";
      tieneBarra = false;
      estaAbiertaVentana = true; // ← marca la ventana como abierta
    }
    salida();
  } else {
    const elemento = document.getElementById("parrafo1");
    let oculto = elemento.style.display;
    elemento.style.display = "block";
    const contenidoOriginal = elemento.innerHTML;
    elemento.innerHTML = "Necesito algo para abrirla";
    setTimeout(() => {
      elemento.innerHTML = contenidoOriginal;
      if (oculto == "none") elemento.style.display = "none";
    }, 3000);
  }
}
