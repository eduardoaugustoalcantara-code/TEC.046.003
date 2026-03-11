// 1. funtion Expression - Valor Base
const calcularValorBase = function(horas, precoHora) {
    return horas * precoHora;
}
//2. arrow funtion - Adicionar Taxa Fixa
const adicionartaxa = (valor) => valor + 2.00
// 3 . function delcaration _ Exibir Recibo
function emitirRecibo(totalfinal) {
    console.log("--- ESTACIONAMENTO ----")
     console.log("Total a pagar: R$" + totalfinal.tofixed(2))
}
// 4 . Execução
let valorbruto = calcularValorBase(3, 10);
let valorcomtaxa = adicionartaxa(valorbruto);
emitirRecibo(valorcomtaxa);                        
