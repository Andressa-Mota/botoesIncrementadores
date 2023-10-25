let botao= document.querySelector('.b1'); //trazendo os botões criados no html
let botao2= document.querySelector('.b2'); //trazendo os botões criados no html
let botao3= document.querySelector('.b3'); //trazendo os botões criados no html
let primeiraLabel= document.querySelector('#primeiraLabel'); //trazendo a label criada no html
let segundaLabel= document.querySelector('#segundaLabel'); //trazendo a label criada no html
let label = document.createElement('label'); //criando a label de soma

let contadores={
    1:0,
    2:0
}
let soma=0;

//adicionando o evento que captura o click
botao.addEventListener('click', function(){
    //1° parâmetro identifica, 2° parâmetro diz onde mostrar
    incrementaContador(1, primeiraLabel);
});

botao2.addEventListener('click', function(){
    //1° parâmetro identifica, 2° parâmetro diz onde mostrar
    incrementaContador(2, segundaLabel);
});

botao3.addEventListener('click', somar);

function incrementaContador(contId, label) {
    contadores[contId]++;
    label.innerHTML =   contadores[contId];
    console.log(label);//apenas pra exibir no console
}

function somar(){
    soma=contadores[1]+contadores[2];
    label.innerHTML = soma;
    document.body.appendChild(label); //adicionando a label no html
}

/*
----------------DUAS FUNÇÕES INICIAIS--------------------
function incrementaN1() {
   // alert("HELLO WOLRD!")
   cont1++;
   primeiraLabel.innerHTML = cont1; //adicionando valor na label 
    console.log(label); //mostar valor na label
    //document.body.appendChild(label);
}
function  incrementaN2() {
    // alert("HELLO WOLRD!")
    cont2++;
    segundaLabel.innerHTML = cont2;
     
     console.log(label);
     //document.body.appendChild(label);
 }
 ---------------------------------------------------------------
*/
