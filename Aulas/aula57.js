
const paragrafos = document.querySelector('.paragrafos');

const titulo = document.querySelectorAll('.t')

const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body)
const backgroundColorBody = estilosBody.backgroundColor;

console.log(backgroundColorBody);

for(let p of ps){
   p.style.backgroundColor = backgroundColorBody;
   p.style.color = '#FFFFFF'
}

for(let t of titulo){
    t.style.backgroundColor = '#8a2be2';
    t.style.color = '#FFFFFF'
}

//só foi possível como queryselectorALL