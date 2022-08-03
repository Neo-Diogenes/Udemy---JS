//declaração de função

function falaOi(){
console.log('oie')}

falaOi()

//expressão de função
var x = function(y) {
    return y * 10;
}

console.log(x(140))

//arrow function

const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};

funcaoArrow()

//dentro de um objeto

const obj = {
    falar() {
        console.log('Estou dentro de um objeto')
    }
};

obj.falar()