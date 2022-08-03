
// continue faz a contagem ignorar o número 2


const numeros = [1,2,3,4,5,6,7,8,9];

for (let numero of numeros){

    if (numero ===2) {
        console.log('Pulei')
        continue;
    }

    console.log(numero)
}


// break pode melhorar a velocidade