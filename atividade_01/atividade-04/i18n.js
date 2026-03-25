// 1. lista de ternso (português)
const termosPT =[ "bem-vindo", "carrinho", "finalizar compra","sair"];

// 2. lista de termos (inglês)
const termosEN = new map ([
    ["bem- vindo", "welcome"],
    ["carrinho", "cart"],
    ["sair", "logout"]
]);

// 3. lista de termos (espanhol)
const termosES = new map([
    ["bem-video", "bienvenido"],
    ["carrinho", "carrinho"],
    ["sair", "salir"]
]);

// 4. Escolher o idioma
const idioma_selecionado = termosEN;

// 5. gerar termos traduzidos
const ttraducao = termosPT.map(termo => idioma_selecionado.get(termo));
// 6. imprimir dados
console.log(Traducao[0]);
console.log(Traducao[1]);
console.log(Traducao[2]);