
function zeroA (num) {
    return num >= 10 ? num: `0${num}`;
}


function formataData (data) {
    const dia = zeroA(data.getDate());
    const mes = zeroA(data.getMonth  () +1);
    const ano = zeroA(data.getFullYear ());
    const hora = zeroA(data.getHours());
    const min = zeroA(data.getMinutes());
    const seg = zeroA(data.getSeconds());

    return `${dia}/${mes}/${ano}/${hora}:${min}:${seg}`;
}


const data = new Date();


const dataBrasil = formataData(data);
console.log(dataBrasil);