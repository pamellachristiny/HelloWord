const criarConta = require('./services/criarConta');

const saldoFinal = criarConta ({
    saldo: 3000,
    titular: 'João Silva'
});

console.log(saldoFinal);