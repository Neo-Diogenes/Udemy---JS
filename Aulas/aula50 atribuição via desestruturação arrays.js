

//let a = 'A';
//let b = 'b';
//let c = 'c'; 

//const numeros = [1,2,3];

//[a,b,c] = numeros;

//console.log(a,b,c)
/////////////////////////////////////////////////////////////
              
               //0 1 2 3 4 5 6 7 8
//const numeros = [1,2,3,4,5,6,7,8,9];

//const [primeiroNumero, segundoNumero,...resto] = numeros;
//o que for depois dos ... vai ser o restante da variavel
//console.log(primeiroNumero, segundoNumero, ...resto); 

/////////////////////////////////////////////////////////////

           //     0 1 2   0 1 2   0 1 2
           //       0       1       2
const numeros = [[1,2,3],[4,5,6],[7,8,9]];

console.log(numeros[1][2]);

//formas mais abreviadas de conseguir um grupo específico:

const [lista1, lista2, lista3] = numeros;
console.log(lista3)