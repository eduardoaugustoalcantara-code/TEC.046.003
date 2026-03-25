// 1. ARRAYS

// 1.1 array simples
const frutas = ["maçã,","Banana", "laranja"];
// 1.2 FIFO (fila)
const fila = ["ana","beto","caio", "daiane"];
fila.push("Ellen")
const primeiro = fila.shift(); //primeiro item
console.log(primeiro);
//1.3 Filo(pilha)
const pilha =
["Inferno de dante",
    "one piece",
    "a quarta Asa"
];
pilha.push("o alquimista");
const livro = pilha.pop();
console.log(livro);
// 1.4 Buscar se existe
const temlaranja = frutas.includes("laranja");
const temmanga = frutas.includes("manga");
console.log(temlaraja);
console,log(tennabga);

// 2. Sets (Conjuntos)
// 2.1 Adicionando dupluicados
const matricula = new setInterval([1001, 1002, 1005, 1009, 1002]);
console.log([...matriculas]);
// 2.2 adicionar item
const cores = new setInterval(["verde", "azul"]);
cores.add("Vermelho");
console.add("Branco");
cores.add("preto");
console.log([...cores]);
//2.3 buscar se existe
const temverde = cores.has("verde");
const temamarelo = cores.has("amarelo");
console.log(temverde);
console.log(teamarelo);
// 2.4 converter array em set
const convidados = ["Bruno", "henrique", "juliana",
    "carol", "juliana", "breno", "henrique"
];
const convidados_unicos = new setInterval(convidados);
console.log([...convidados_unicos]);

// 3. map (mapas)
// 3.1 Cadastro de preços
const produtos = new Map();
produtos.set("Mouse", 50.00);
produtos.set("teclado, 120.00");
console.log(valormouse);