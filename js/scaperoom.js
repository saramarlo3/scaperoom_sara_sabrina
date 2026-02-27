
document.addEventListener('wheel', function (e) {
  if (e.ctrlKey) {
    e.preventDefault();
  }
}, { passive: false });

let tieneLlaveBanio = false;
let estaAbiertoElBanio = false; 

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
document.getElementById("llaveBanio").style.display = "none";
document.getElementById("barra").style.display = "none";
document.getElementById("ventanaBanio").style.display = "none";
document.getElementById("flechaClase").style.display = "none";
document.getElementById("puertaBanio1").style.display = "none";
document.getElementById("puertaBanio2").style.display = "none";










//Escena 1, clase
function inicio() {
  document.getElementById("principal").style.backgroundImage = "url(img/Escena1.png)";
  document.getElementById("pizarra").style.display = "block";
  document.getElementById("papel").style.display = "block";
  document.getElementById("corcho").style.display = "block";
  document.getElementById("puertaBanio").style.display = "none";
  document.getElementById("puerta1").style.display = "none";
  document.getElementById("puerta2").style.display = "none";
  document.getElementById("flecha1").style.display = "none";
  document.getElementById("flechaClase").style.display = "none";
  document.getElementById("parrafo1").style.display = "none";
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

  document.getElementById("flecha1").style.display = "block";
   document.getElementById("llaveBanio").style.display = "none";

  document.getElementById("barra").style.display = "none";
  document.getElementById("ventanaBanio").style.display = "none";
  document.getElementById("puertaBanio1").style.display = "none";
document.getElementById("puertaBanio2").style.display = "none";





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
  document.getElementById("principal").style.backgroundImage = "url(img/departamento.png)"
  document.getElementById("puertaIT").style.display = "none";
  document.getElementById("flecha2").style.display = "none";
  document.getElementById("ventanaIT").style.display = "none";
  const elemento = document.getElementById("parrafo1");
  let oculto = document.getElementById("parrafo1").style.display;
  document.getElementById("parrafo1").style.display = "block";
  document.getElementById("barra").style.display = "block";

  const contenidoOriginal = elemento.innerHTML;
  elemento.innerHTML = "Buscaré algo que me sirva de ayuda";
  setTimeout(() => {
    elemento.innerHTML = contenidoOriginal;
    if (oculto == "none") {
      document.getElementById("parrafo1").style.display = "none";
    }
  }, 3000);

  document.getElementById("llaveBanio").style.display = "block";
  document.getElementById("flecha3").style.display = "block";

}



function cogerLlave() {
  document.getElementById("slot1").style.backgroundImage = "url('img/llave.png')";
  document.getElementById("llaveBanio").style.display = "none";
  tieneLlaveBanio = true;  
}


function cogerBarra() {
 document.getElementById("slot2").style.backgroundImage ="url('../img/barra\ con\ color\ sin\ fondo.png')";
  document.getElementById("barra").style.display = "none";



}

 function EscenaBanio(){
  document.getElementById("principal").style.backgroundImage = "url(img/Escena4.png)"
document.getElementById("puertaBanio").style.display = "none";
document.getElementById("puerta1").style.display = "none";
document.getElementById("puerta2").style.display = "none";
document.getElementById("flecha1").style.display = "none";
document.getElementById("flecha4").style.display = "block";
document.getElementById("flechaClase").style.display = "none";
document.getElementById("ventanaBanio").style.display = "block";
document.getElementById("puertaBanio1").style.display = "block";
document.getElementById("puertaBanio2").style.display = "block";






 }

 





 }
