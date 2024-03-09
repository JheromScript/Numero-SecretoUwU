let numeroSecreto = 0;
let numeroIntento = 0;
let listaNSorteado = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${numeroIntento} ${(numeroIntento === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        //el usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p',`El numero secreto es menor`);
        }
        else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        numeroIntento++;
        limpiarCaja();
    }
    return;
}
function condicionesIniciales(){

    asignarTextoElemento("h1", "Juego del numero secreto!");
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = numeroRandom();
    numeroIntento = 1;
}

function limpiarCaja(){
    document.getElementById('valorUsuario').value = ' ';  
}

function numeroRandom(){

    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

        console.log(numeroGenerado);
        console.log(listaNSorteado);
    if(listaNSorteado.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros');
    }else {
        if (listaNSorteado.includes(numeroGenerado)) {
            return numeroRandom();
        } else {
            listaNSorteado.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
    
}

condicionesIniciales();
