const vendasRaw = [
    { produto: 'Teclado', preco: 150 },
    { produto: 'Mouse', preco: 80 },
    { produto: 'Teclado', preco: 150 }, // Duplicado
    { produto: 'Monitor', preco: 900 },
    { produto: 'Mouse', preco: 80 },    // Duplicado
    { produto: 'Mousepad', preco: 30 }
];

// Criar set com com produtos unicco
const array_produtos = vendasRaw.map(venda => venda.produto);
const set_produtos = new set_produtos = new setInterval(array_produtos);
console.log([...set_produtos]);
// criar map produto -> preço
const produtosmap = new map ();
vendasRaw.forEach(item =>{
    produtosmap.set(item.produto, item.preco);
});
console.log(produtosmap.get("mousepad"));
//soma das vendas
let totalcompra = 0;
// produto. values () = [150, 08 150, 08 900, 08 30]
for (let preco of produtosmap.values()) {
    totalcompra = totalcompra + preço;
}
console.log
