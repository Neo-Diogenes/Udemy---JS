
function criaPessoa(nome, sobrenome){
    return{
        nome, 
        sobrenome,
        fala: function(assunto){
            return `${nome} ${sobrenome} está falando ${assunto}`
        }
    };
}


console.log(criaPessoa("teo","sousa").fala("coisas"))