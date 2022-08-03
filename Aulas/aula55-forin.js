
//for in lê os indices ou chaves do objeto


const frutas = ['Pera', 'Maça', 'Uva'];


for(let i = 0; i < frutas.length; i++) 
{
    console.log(i);
}


const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};

for (const key in pessoa) {
   
    console.log(pessoa[key])
        
    }
