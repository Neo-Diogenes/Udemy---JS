//factory function
function criaPessoa(nome, sobrenome, a, p){
    return{
        nome, 
        sobrenome,
        //getter
        get nomeCompleto(){
            return `${nome} ${sobrenome}`
        }, 

        //setter
        
        set nomeCompleto(valor){
            console.log(valor);
        },

       fala(assunto){
            return `${this.nome} ${this.sobrenome} está falando ${assunto}`;
        },
        altura: a,
        peso: p,
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Luiz','Otávio', 1.8, 90)

p1.nomeCompleto = "Maria Oliveira"

console.log(p1.nomeCompleto)


console.log(p1.fala("coisas"))