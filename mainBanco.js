table = [];

transf = [];

nums = [];

bank = ["Original", "Bradesco", "BB"];

metod = ["TED", "DOC", "PIX"];

type = ["interbancária", "intrabancária"];

cont = 5;

cont2 = 20;


function randomNum(x, y) {
  return Math.random() * x + y;
}

function descript(saldo, valorTransf, limiteTransf) {
  if (valorTransf > limiteTransf) {
    return "Limite atingido";
  } else if (saldo < valorTransf) {
    return "Saldo insuficiente";
  } else {
    return "Aprovado";
  }
}

while (cont > 0) {
  let conta = {
    Numero: Math.floor(randomNum(100, 1)),
    Saldo: randomNum(10000, 0).toFixed(2),
    LimiteTransf: randomNum(50000, 1000).toFixed(2),
    Historico: [],
    Banco: bank[Math.floor(randomNum(3, 0))],
    TransfRecebidas: 0,
    TransfEfetuadas: 0,
    TransfNegadas: 0,
  };
  cont--;
  table.push(conta);
  nums.push(conta.Número);
}

while (cont2 > 0) {
  let contaOrigem = Math.floor(randomNum(5, 0));
  let contaDestino = Math.floor(randomNum(5, 0));
  
  if (contaOrigem != contaDestino) {
    contaOrigem = table[contaOrigem];
    contaDestino = table[contaDestino];

    let transferencia = {
      Meio: metod[Math.floor(randomNum(3, 0))],
      Tipo: type[Math.floor(randomNum(2, 0))],
      Valor: randomNum(50000, 1000).toFixed(2),
      Origem: contaOrigem.Numero,
      Destino: contaDestino.Numero
    };

  
    transferencia.Descricao = descript(contaOrigem.Saldo, transferencia.Valor, contaOrigem.LimiteTransf)
    cont2--;
    contaOrigem.Historico.push(transferencia)
    contaDestino.Historico.push(transferencia)


    if (transferencia.Descricao == 'Aprovado') {
      contaOrigem.TransfEfetuadas += 1
      contaDestino.TransfRecebidas += 1
    } else {
      contaOrigem.TransfNegadas += 1
    }
    
    transf.push(transferencia);
  } else {
    continue
  }

}

console.table(table);
console.table(transf);