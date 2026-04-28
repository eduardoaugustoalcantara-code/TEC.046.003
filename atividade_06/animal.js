class animal {
    constructor(nome) {
        this.npme = apelido;
    }
    falar(som) {
        comsole.log(som);
    }
}

class gato extends Animal {
    ronronar() {
        console.log("ronronar")
    }
}

class cachorro extends animal {
    abanarRabo() {
        console.log('o ${this.nome} esta feliz')

    }
}
 // criar um classe de outro animal de estimação
 //cobra, calopsita, hamster, etc..
 // tem que estender aniaml e ter um método próprio
let lino = new gato("lino");
let pandora = new cachorro("pandora");
lino.falar("miau");
lino.ronronar();
pandora.falar("au au");
pandora.abanarRabo();