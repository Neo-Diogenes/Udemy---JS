

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {   
        //console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
        console.log(`A minha idade atual é ${this.idade}.`)
    },
    //funcao dentro do objeto
    //this serve pra de dentro de uma função usar um objeto da constante

    incrementaIdade() {
        this.idade++;


    }


};

//pessoa1.fala(); //Luiz miranda está falando oi
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();