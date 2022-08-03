                       
const alunos = ['Luiz', 'Maria', 'João'];

alunos[0] = 'Eduardo';

console.log(alunos);
//mudei o nome só do indice zero que significava o luiz e agora Eduardo

console.log(alunos.length);
//para saber o tamanho do array


alunos[alunos.length] = 'Luiza';
//vai adicionando elementos no array
console.log(alunos);

alunos.push('Tania');
alunos.push('Fabio');

console.log(alunos)


//alunos.unshift(Fábio) adiciona no começo
//alunos.pop(); / remover um elmento do array
//delete alunos[1]; /nesse caso vai apagar o indice e deixar um espaço vazio
//(var.slice(indice, indice)) serve pra array tb,assim como string


console.log(typeof alunos);
console.log(alunos instanceof Array);