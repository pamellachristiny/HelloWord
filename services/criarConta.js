const Conta = require('../models/contaBancaria');

function criarConta(dados){
    const novaConta = new Conta(dados.saldo, dados.titular);
    
    novaConta.depositar(1000);
    novaConta.sacar(200);

    return novaConta.exibirSaldo();
}

module.exports = criarConta;