class ContaBancaria {
    constructor(saldo, titular) {
        this.saldo = saldo;
        this.titular = titular;
    }

depositar(valor){
    this.saldo += valor;
}    

sacar(valor){
    if (valor > this.saldo) {
        console.log("Saldo insuficiente para saque.");
    } else {
        this.saldo -= valor;
    }
}

exibirSaldo(){
    console.log(`Saldo atual: R$ ${this.saldo.toFixed(2)}`);
}

}

module.exports = ContaBancaria;
