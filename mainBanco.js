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

function descript(a, b, c) {
  if (b > c) {
    return "Limite atingido";
  } else if (a < b) {
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
    Histórico: "",
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
  let transferência = {
    Meio: metod[Math.floor(randomNum(3, 0))],
    Tipo: type[Math.floor(randomNum(2, 0))],
    Valor: randomNum(50000, 1000).toFixed(2),
    Origem: nums[Math.floor(randomNum(5, 0))],
    Destino: nums[Math.floor(randomNum(5, 0))],
    Descrição: descript(conta.Saldo, transferência.Valor, conta.LimiteTransf),
  };
  cont2--;
  transf.push(transferência);
}

console.table(table);
console.table(transferência);
