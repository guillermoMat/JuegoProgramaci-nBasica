//funcion que se ejectuta primero
//el escuchador de eventos que utiliza esta función
//se encuentra al final de todo
function cargarJuego(){
  //usamos la funcion para elegir un campeon
  //y a la vez, utilizamos otra funcion para elegir el campeon del enemigo
  let campeonSeleccionado=document.getElementById("opc-campeon")
  campeonSeleccionado.addEventListener("click",seleccionCampeon)

  //ocultamos la seccion de mensajes-juego
  //para mostrarlo solo cuando se selecciono un campeon
  var seccionCargarAtaque=document.getElementById("gameplay")
  seccionCargarAtaque.style.display="none"
  //para mostrar de nuevo esta seccion se realizara en

  //botones de ataques
  let botonFuego=document.getElementById("btn-fuego")
  botonFuego.addEventListener("click",ataqueDeFuego)
  let botonTierra=document.getElementById("btn-tierra")
  botonTierra.addEventListener("click",ataqueDeTierra)
  let botonAgua=document.getElementById("btn-agua")
  botonAgua.addEventListener("click",ataqueDeAgua)

  //boton para reiniciar el juego
  let botonReiniciar=document.getElementById("boton-reiniciar")
  botonReiniciar.addEventListener("click",reiniciarElJuego)

}

let ataqueJugador
let ataqueEnemigo
function ataqueDeFuego(){
  ataqueJugador="FUEGO"
  //alert("ATAQUE DE "+ataqueJugador)
  ataqueDelEnemigo()
}
function ataqueDeTierra(){
  ataqueJugador="TIERRA"
  //alert("ATAQUE DE "+ataqueJugador)
  ataqueDelEnemigo()
}
function ataqueDeAgua(){
  ataqueJugador="AGUA"
  //alert("ATAQUE DE "+ataqueJugador)

  ataqueDelEnemigo()
}

function ataqueDelEnemigo(){

  nroAtaque=nroAleatorio(1,3)
  if(nroAtaque==1){
    ataqueEnemigo="FUEGO"
    //alert("EL enemigo ataco con "+ataqueEnemigo)

  }else if(nroAtaque==2){
    ataqueEnemigo="TIERRA"
    //alert("EL enemigo ataco con "+ataqueEnemigo)
  }else if(nroAtaque==3){
    ataqueEnemigo="AGUA"
    //alert("EL enemigo ataco con "+ataqueEnemigo)
  }

  creacionMensajeAtaques()//el mensaje se muestra luego de que se selecciono un poder
}
let contMiVidas = 3;
let contVidasEnemigo = 3;

function creacionMensajeAtaques() {
    let quienGana;

    let idContMio = document.getElementById("vidas-jugador");
    let idContEnemigo = document.getElementById("vidas-enemigo");

    // Determinar el resultado del ataque
    if (ataqueJugador == ataqueEnemigo) {
        quienGana = "EMPATE";
    } else if (
        (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") ||
        (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") ||
        (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA")
    ) {
        quienGana = "GANASTE";
        contVidasEnemigo -= 1;
    } else {
        quienGana = "PERDISTE";
        contMiVidas -= 1;
    }

    // Crear un bloque contenedor para el ataque y el resultado
    let contenedorMensaje = document.createElement("div");

    let parrafoAtaques = document.createElement("p"); // Crear párrafo de ataques
    parrafoAtaques.innerHTML = "Atacaste con: " + ataqueJugador + " - El enemigo atacó con: " + ataqueEnemigo;

    let parrafoResultado = document.createElement("p"); // Crear párrafo de resultado
    parrafoResultado.innerHTML = "RESULTADO: " + quienGana;
    parrafoResultado.classList.add("resultado-resaltado"); // Agregar clase

    // Añadir los párrafos al contenedor
    contenedorMensaje.appendChild(parrafoAtaques);
    contenedorMensaje.appendChild(parrafoResultado);


    // Añadir el contenedor al div principal que muestra todos los mensajes
    let mensajesDiv = document.getElementById("mensajeAtaque");
    mensajesDiv.appendChild(contenedorMensaje);
    controlarVidas();

    // Actualizar las vidas
    idContMio.innerHTML = contMiVidas;
    idContEnemigo.innerHTML = contVidasEnemigo;

}

function controlarVidas(){
  if(contMiVidas==0){
    mensajeFinal("PERDISTE")

  }else if(contVidasEnemigo==0){
    mensajeFinal("GANASTE")
  }
}
function mensajeFinal(result){
  var parrafo=document.createElement("p")
  parrafo.innerHTML=result+" EL JUEGO."
  parrafo.classList.add("resultado-resaltado")

  var seccionMensajeFinal=document.getElementById("mensajeAtaque")
  seccionMensajeFinal.appendChild(parrafo)


  botonReiniciarJuego(seccionMensajeFinal); // Pasa el contenedor donde quieres agregar el botón


  //botones de ataques
  let botonFuego=document.getElementById("btn-fuego")
  botonFuego.disabled=true
  let botonTierra=document.getElementById("btn-tierra")
  botonTierra.disabled=true
  let botonAgua=document.getElementById("btn-agua")
  botonAgua.disabled=true

}

//Creacion boton reiniciar juego
function botonReiniciarJuego(contenedor){
  var btnReiniciar=document.createElement("button")
  btnReiniciar.innerHTML="Reiniciar juego"
  btnReiniciar.classList.add("boton-reiniciar")
  btnReiniciar.addEventListener("click",reiniciarElJuego)

  contenedor.appendChild(btnReiniciar);
}
//Funcion para reiniciar el juego
function reiniciarElJuego(){
  location.reload()

  //luego de reiniciar el juego, mostramos nuevamente la seccion para elegir el campeon
  let seccionElegirCampeon=document.getElementById("seleccion-campeon")
  seccionElegirCampeon.style.display="block"
}
function seleccionCampeon(){

  let miCampeon=document.getElementById("campeon-jg")
  let miCampeon_img=document.getElementById("campeon-jg-img")
  if(document.getElementById("naruto").checked){

    ///static/img/Naruto.jpg
    miCampeon.innerHTML="Naruto Uzumaki"
    miCampeon_img.src="/static/img/Naruto.jpg"

  }else if(document.getElementById("itachi").checked){

    miCampeon.innerHTML="Itachi Uchiha"
    ///static/img/Itachi.png
    miCampeon_img.src="/static/img/Itachi.png"

  }else if(document.getElementById("kakashi").checked){

    miCampeon.innerHTML="Kakashi Hatake"
    ///static/img/Kakashi.png
    miCampeon_img.src="/static/img/Kakashi.png"

  }else{
    alert("Elige una opc")
  }
  campeonEnemigo()
}
function nroAleatorio(min,max){
  return Math.floor(Math.random() * (max-min+1) +1)
}

function campeonEnemigo(){

  let enemigoCampeon=document.getElementById("campeon-enemigo")
  let enemigoCampeon_img=document.getElementById("campeon-enemigo-img")

  nroJg=nroAleatorio(1,3)
  if(nroJg==1){
    alert("EL enemigo es Kakuzu")
    enemigoCampeon.innerHTML="Kakuzu"
    ///static/img/Kakuzu.png
    enemigoCampeon_img.src="/static/img/Kakuzu.png"
  }else if(nroJg==2){
    alert("EL enemigo es Deidara")
    enemigoCampeon.innerHTML="Deidara"
    ///static/img/Deidara.png
    enemigoCampeon_img.src="/static/img/Deidara.png"
  }else if(nroJg==3){
    alert("EL enemigo es Pein")
    enemigoCampeon.innerHTML="Pein"
    ///static/img/Pein.png
    enemigoCampeon_img.src="/static/img/Pein.png"
  }

   //una vez que se cargo el juego, ocultamos la seccion de elegir campeon
   let seccionElegirCampeon=document.getElementById("seleccion-campeon")
   seccionElegirCampeon.style.display="none"

  //una vez que se selecciono el campeon enemigo mostrarlos los msj
  var seccionMensajeJuego=document.getElementById("gameplay")
  seccionMensajeJuego.style.display="flex"
}



//escuchador de eventos, iniciamos el juego
//funcion al principio de todo
window.addEventListener("load",cargarJuego)
