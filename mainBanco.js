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
    Número: Math.floor(randomNum(100, 1)),
    Saldo: randomNum(10000, 0).toFixed(2),
    LimiteTransf: randomNum(50000, 1000).toFixed(2),
    Historico: "",
    Banco: bank[Math.floor(randomNum(3, 0))],
    TransfRecebidas: 0,
    TransfEfetuadas: 0,
    TransfNegadas: 0,
  };
  cont--;
  table.push(conta);
  nums.push(conta.Número);
}
console.log(table)
while (cont2 > 0) {
  let contaOrigem = table[nums[Math.floor(randomNum(5, 0))]];
  let contaDestino = table[nums[Math.floor(randomNum(5, 0))]];
  if (contaOrigem == contaDestino) {
    continue
  }

  let transferencia = {
    Meio: metod[Math.floor(randomNum(3, 0))],
    Tipo: type[Math.floor(randomNum(2, 0))],
    Valor: randomNum(50000, 1000).toFixed(2),
    Origem: contaOrigem,
    Destino: contaDestino
  };

  transferencia.Descrição = descript(transferencia.Origem.Saldo, transferencia.Valor, transferencia.Origem.LimiteTransf)
  cont2--;
  
  console.log(transferencia)
  transf.push(transferencia);
}

console.table(table);
console.table(transf);
