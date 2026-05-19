class personagem{
    constructor(nome, titulo, hp, mana, energia) {
        this.nome = nome;
        this.titulo = titulo;
        this.hp = hp;
        this.mana = mana;
        this.energia = energia;
    }
}
class hablidade {
    constructor(id, nome, dano, custo, energia) {
        this.id = id;
        this.nome = nome;
        this.dano = dano;
        this.custo = custo;
        this.energia = energia;
    }
}
// instancia classes - criar objetos
let hero = new personagem("r-01","🤖 robô", 100,100,0);
let boss = new personagem("azog","👾 huamano",100,0,50);
// preencher os status
document.getElementById("nome-hero").textContent = hero.nome;
document.getElementById("titulo-hero").textContent = hero.titulo;

document.getElementById("nome-boss").textContent = boss.nome;
document.getElementById("titulo-boss").textContent = boss.titulo;
// criar habilidades
let listaHabilidades = [
    new habilidades(1, "⚔️ ataque", 4,0,0),
    new habilidades(2, "🪙 skill", 8,10, 0),
    new habilidades(3, "💥supremo", 15,0,100)
]