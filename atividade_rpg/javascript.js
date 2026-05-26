class personagem {
    constructor(nome, titulo, hp, mana, energia) {
        this.nome = nome;
        this.titulo = titulo;
        this.hp = hp;
        this.mana = mana;
        this.energia = energia;
    }
    hero_atacar(alvo, habilidade) {
        if (this.mana >= habilidade.custo
            && this.energia >= habilidade.energia) {
            alvo.hp = alvo.hp - habilidade.dano;
            // debitar mana
            if (habilidade.custo > 0) {
                this.mana -= habilidade.custo
                this.energia += 50;
            }
            // debitar energia
            if (habilidade.energia > 0) {
                this.energia = 0
            }
        } else {
            return "sem mana ou energia.";
        }
    }
}

class habilidade {
    constructor(id, nome, dano, custo, energia) {
        this.id = id;
        this.nome = nome;
        this.dano = dano;
        this.custo = custo;
        this.energia = energia;
    }
}
// instancia classes - criar objetos
let hero = new personagem("denji", "🪚 chainsaw", 100, 100, 0);
let boss = new personagem("reze", "🌼 ", 100, 0, 50);
// preencher os status
document.getElementById("nome-hero").textContent = hero.nome;
document.getElementById("titulo-hero").textContent = hero.titulo;

document.getElementById("nome-boss").textContent = boss.nome;
document.getElementById("titulo-boss").textContent = boss.titulo;
// criar habilidades
let containerBTn = document.getElementById("controles");
let listaHabilidades = [
    new habilidade(1, "⚔️ ataque", 4, 0, 0),
    new habilidade(2, "🪙 skill", 8, 10, 0),
    new habilidade(3, "💥supremo", 15, 0, 100)
];
listaHabilidades.forEach(hab => {
    let btn = document.createElement("button");//<button>
    btn.innerText = hab.nome;
    containerBTn.appendChild(btn);
    btn.classList.add("btn", "btn-outline-warning");
    btn.onclick = () => {
        hero.hero_atacar(boss, hab);
        atualizartela();
    }
});
const atualizartela = () => {
    document.getElementById("hp-boss").value = boss.hp;
}