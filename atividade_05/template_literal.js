// let e const 
const nomejogador = "alex";
let pontos = 0;
pontos = pontos + 10 ;
pontos = pontos +10;
pontos += 50;
console.log(nomejogador, "tem", pontos, "pontos");

// template literal
const preco = 100;
const desconto = 20;
console.log(`o produto custo r$ ${preco - desconto}
    com desconto.`)
const nomealuno = "antonio";
const disciplina = "matemática";
let nota1 = 8;
let nota2 = 5;
const resultado =`
--- boletim escolar ---
alunos: ${nomealuno}
disciplina:  ${disciplina}
status: ${((nota1+nota2)/2) >= 7 ? 'aprovado' : 'reprovado'}`
console.log(resultado);
