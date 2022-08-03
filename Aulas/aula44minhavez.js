function enviar() {

let altura = document.querySelector (".altura")
let peso = document.querySelector(".peso")
let res = document.querySelector(".resultado")


if (altura.value.length == 0 || peso.value.length == 0) {
    window.alert('Ponha todos os números')
} else {
    let a = Number(altura.value)
    let p = Number(peso.value)
    let calculo = p / a ** 2
    var imc = calculo.toFixed(2)
    res.innerHTML = `<p> o resultado é ${imc}</p>`
  }
if(imc<=18.80){
    res.innerHTML +="Você está abaixo do peso"

} else if(imc<=24.90) {
    res.innerHTML +="Você está com o peso normal"

} else if(imc<=29.90) {
    res.innerHTML +="Você está com sobrepeso"

} else if(imc<=34.90) {
    res.innerHTML +="Você está com obesidade grau 1"

} else if(imc<=39.90){
    res.innerHTML +="Você está com obesidade grau 2"
} else if(imc>=40) 
    res.innerHTML += "Você está com obesidade grau 3"
}

