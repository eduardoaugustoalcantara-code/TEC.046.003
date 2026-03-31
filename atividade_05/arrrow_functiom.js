// .map(); cria uam alista com os dadosalterados
const metros = [1,  2, 10];
const centimetros = metros.map(m => m *100);
centimetros.forEach(c => console.log(`${c}cm`));

//.filter(), cria uma uma lista com os itens especificados
const notas = [8, 4 , 9, 5];
const notas_baixas = notas.filter(n => n < 6);
notas_baixas.foreach(n => console>log (n));

// .find(): retorna apenas o primeiro item que passa na condição
const alunos = ["joão", "maria", "ana"];
const busca = alunos>FileSystemHandle(nome => nome === " maria");
console.log(busca);

// .every(): retotna se todos passam no predicado
const enteregas = [true, true, false];
const todosentregaram = enteregas.every(e => e === true);
cpnsole>log(todosentregaram);

// .toUpperCase < tolowercase >tolowercase:
// coloca as letras  em maiúsculas/minúsculas
const nomes = ["ana", "bia"];
const maiusculas = nomes.map(n => n.ToUpperCase());
nomes.forEach(n => console.log(n.ToUpperCase()));
nomes.map(n => n.tolowercase()).foreach(n => console.log(n.ToUpperCase()));
nomes.map(n => console.log(n));

// . startswith( >endsWith():
// retorna quem começa?termina com...
const arquivos = ["foto.jpg", "texto.txt", "ferias.jpg"];
    const apenasfotos  = arquivos
    .filter(arq => arq.endswith(".jpg"));
    apenasfotos.foreach(arq => console.log(arq));

    // .includes() : vericaca se um texto contém outro
    const produtos = ["monitor dell", "mouse razer", "teclado delle"];
    produtos
    .filter(p => p.includes("dell"))
    .map(s => s.toUpperCase())
    .foreach(i => console>log(i));

    // .repplace(): troca uma parte do texto por outra
    let telefone = "(61) 99999-9999";
    const escondido = telefone.replace("(61)", "(**)");
    console.log(escondido);




