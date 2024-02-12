
let numeroSecreto = 0;
let intentos=0;
let listaNumeroSecreto=[];
let numeroMaximo= 10;

function asignarTextoElemento(elemento,texto){
    let elementoHtml= document.querySelector(elemento);
    elementoHtml.innerHTML=texto;
    return;
}

 asignarTextoElemento( 'h1','Juego del número secreto');
 asignarTextoElemento( 'p','Coloca un número del 1 al 10');

 function  verificarIntento(){

    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value );
   
    if (numeroSecreto === numeroUsuario){
        asignarTextoElemento('p',`Acertaste el número en ${intentos}  ${(intentos === 1)? 'vez' : 'veces'} `)

        document.getElementById("reiniciar").removeAttribute("disabled");
    }else  {

        if((numeroUsuario> numeroSecreto)){
            asignarTextoElemento('p','El número secreto es menor')

        }else{
            asignarTextoElemento('p','El número secreto es mayor')
        }
   intentos++;
   limpiarCaja();

    }
    return;
}


function limpiarCaja(){

    document.querySelector('#valorUsuario').value='';

}

function generarNumeroSecreto() {
 let numerogenerado =  Math.floor(Math.random()*numeroMaximo) + 1;

console.log(numerogenerado);
console.log(listaNumeroSecreto);

if(listaNumeroSecreto.length===numeroMaximo){
    asignarTextoElemento( 'p','Ya se sortearon todos los  números posibles');

}else{

  if(listaNumeroSecreto.includes(numerogenerado)){
    return generarNumeroSecreto();

  }else{
    listaNumeroSecreto.push(numerogenerado);
    
    return numerogenerado;
  }
}
}

function condicionInicial(){

    asignarTextoElemento( 'h1','Juego del número secreto');
    asignarTextoElemento( 'p','Coloca un número del 1 al 10');
    document.getElementById("reiniciar").setAttribute("disabled","true");

    numeroSecreto = generarNumeroSecreto();

    intentos=1;

}

function reiniciarJuego(){
//La caja debe de estar vacía

 limpiarCaja();
//Iniciar textos asignados
//Número secreto debe modificarse
condicionInicial();

//botón nuevo juego se deshabilite


}

condicionInicial();


console.log(numeroSecreto);

