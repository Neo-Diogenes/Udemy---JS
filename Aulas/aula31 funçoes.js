
//function saudacao(nome) {
    
   // console.log(`Bom dia ${nome}`);
    //return 123;
//}

//saudacao('Luiz');

//const variavel = saudacao('Luiz');
//console.log(variavel);

//existe função que retornam e que não retornam valor




function soma(x,y) {
    const resultado = x + y;
    return resultado;

}

console.log(soma(2,3));


//console.log(soma('luiz',' danilo'))
//serve pra number e string

//não se lê mais nada abaixo de return, é onde acaba a função
//tudo o que está dento da função {} é intocável



const raiz = function (n){

    return n ** 0.5;
};


console.log(raiz(9))

//outra forma de criar função

//uma terceira forma seria arrow function => ex: const raiz = n => n ** 0.5;