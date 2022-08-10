//a cada vez que é chamada, envia um valor diferente

function* geradora1(){
    yield 'Valor 1';
    
    yield 'Valor 2'

    yield 'Valor 3'

}

// const g1 = geradora1();
// console.log(g1.next().value)

// //o done: false quer dizer que o código não parou
// console.log(g1.next().value)

// console.log(g1.next().value)

// console.log(g1.next().done)


function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4(){
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

//posos usar o for...of
// posso chamar uma geradora dentro de outra, desde que com yield*
//return encerra a função
//posso por funções no yield
const g4 = geradora4()

for(g of g4){
    console.log(g)
}