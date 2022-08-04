
//IIFE - Immediatly invoked function expression

(function(){

const sobrenome = 'Miranda';
function criaNome(nome){
    return nome + ' ' + sobrenome;
}

function falaNome(){
console.log(criaNome('Luiz'))

}

falaNome()

})()


// imprime o resultado e nao a função em si

// var result = (function () {
//     var nome = "Felipe";
//     return nome;
// })();

// console.log(result)