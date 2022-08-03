
const pessoa = {
    nome:'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

//atribuição via desestruturação
//const { nome } = pessoa;

//forma normal
//const idade = pessoa.idade;
//console.log(nome, idade)

//const {
   // endereco: {rua: r, numero}} = pessoa;

    //atribui o valor de endereço a rua e de rua para r

//console.log(r)

//chamei tudo menos o nome - um elemento especifico
const {nome,...resto} = pessoa;

console.log(resto);