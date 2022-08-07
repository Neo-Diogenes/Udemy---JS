//sempre inicia o nome com letra maiscula
// função fabrica - > objetos
// constutoras -> pessoa (new)

// diferente da factory function nao uso as virgulas dentro do objeto pra separar

function Pessoa(nome, sobrenome){

    //atributos ou métodos privados

    const ID = 123456;         //so vai existir aqui dentro, pois usei const ou let //existe na factory function tb
     const metodoInterno = function(){

     }; //só existe aqui


    //atributos ou métodos públicos 
    this.nome = nome;
    this.sobrenome = sobrenome;
// isso equivale a Pessoa.nome // Pessoa.sobrenome

    this.metodo = () =>{
        console.log(this.nome + ' : sou um método')
    }


}

const p1 = new Pessoa('Luiz', "OTÁVIO")
const p2 = new Pessoa('Maria', "Oliveira")

console.log(p1.nome)

p2.metodo()