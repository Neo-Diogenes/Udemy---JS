//filter // map // reduce

//retornar valores maiores que dez

// const numeros = [5, 50, 80, 1, 2, 3, 8, 9, 20];

// function callBackFilter(valor, indice, array){
//     if(valor>10){
//         return true;
//     } else {
//         return false;
//     }
// }

// const numerosFiltrados = numeros.filter(callBackFilter);

// console.log(numerosFiltrados)

// posso alterar e simplificar toda a condição acima
//ao invés de por verdadeiro e falso, posso retornar a própria condição
// const numeros = [5, 50, 80, 1, 2, 3, 8, 9, 20];

// function callBackFilter(valor){
//    return valor > 10;
// }

// const numerosFiltrados = numeros.filter(callBackFilter);

// console.log(numerosFiltrados);

//posso também, jogar a função dentro de filter, sendo uma função anonima, ou fazer arrow function

//simplificando ainda mais:

// const numerosFiltrados = numeros.filter(valor => valor > 10);

// console.log(numerosFiltrados);

//-------------------------------------------------------------------

//  const numeros = [5, 50, 80, 1, 2, 3, 8, 9, 20];

// function callBackFilter(valor, indice){
//     console.log(valor, indice)
//    return valor > 10;
// }

// const numerosFiltrados = numeros.filter(callBackFilter);

// console.log(numerosFiltrados);

//-------------------------------------------------------------------

//retorne pessoas com menos de 5 letras no nome ou mais - retorne as pessoas com mais de 50 anos - retorne as pessoas cujo nome termina com A

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);

const pessoasComMaisDeCinquentaAnos = pessoas.filter(function(obj){
    return obj.idade > 50
});

const nomeTerminaComA = pessoas.filter(function(obj){
    return obj.nome.endsWith('a');
});

// console.log(pessoasComNomeGrande);
// console.log(pessoasComMaisDeCinquentaAnos)

console.log(nomeTerminaComA)