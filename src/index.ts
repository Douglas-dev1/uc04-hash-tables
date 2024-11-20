const tupla: [string, string, number, boolean] = [
  "Cezar Mezzalira",
  "cezar.mezzalira@gmail.com",
  34,
  true,
];

const tuplas : [string, string, number, boolean][] = [
  ["Douglas Felipe", "douglas@gmail.com", 34, true],
  ["felipe@gmail.com", "Felipe", 34, true],
]

const nome = tupla[1][0];

//Hash table

type Pessoa = {
  nome: string;
  email: string;
  idade: number;
  ativo: boolean;
  celular?: string;
};

const pessoas: Pessoa[] = [
  {
  nome: "Douglas Felipe",
  email: "douglas@gmail.com",
  idade: 27,
  ativo: true,
  },
  {
  nome: "Felipe Carlos",
  email: "felipe@gmail.com",
  idade: 27,
  ativo: true,
  }
]

for (const pessoa of pessoas){
  console.log(pessoa["email"])
}



type Produto = {
  id: number;
  nome: string;
  qtd: number;
  ativo: boolean;
  data: string;
};

const estoque : Produto[] = [
  {
    id: 138,
    nome: "Steam Deck",
    qtd: 3,
    ativo: true,
    data: "18/09/24"
  },
  {
    id: 713,
    nome: "PC MasterRace",
    qtd: 15,
    ativo: true,
    data: "29/01/24"
  },
  {
    id: 260,
    nome: "Nintendo Wii",
    qtd: 0,
    ativo: false,
    data: "30/08/24"
  },
  {
    id: 438,
    nome: "Nintendo Switch",
    qtd: 3,
    ativo: true,
    data: "13/05/24"
  },
  {
    id: 1690,
    nome: "Playstation 5 Pro",
    qtd: 12,
    ativo: true,
    data: "06/06/24"
  },
  {
    id: 1300,
    nome: "Xbox 360",
    qtd: 3,
    ativo: true,
    data: "27/09/24"
  },
  {
    id: 379,
    nome: "Playstation 5",
    qtd: 7,
    ativo: true,
    data: "15/04/24"
  },
  {
    id: 125,
    nome: "Xbox Series X",
    qtd: 8,
    ativo: true,
    data: "18/11/24"
  },
  {
    id: 698,
    nome: "Xbox Series S",
    qtd: 1,
    ativo: true,
    data: "07/08/24"
  },
  {
    id: 1467,
    nome: "Playstation 4",
    qtd: 2,
    ativo: true,
    data: "27/02/24"
  },
]

for (const estoques of estoque){
  console.log("Produto: " + estoques.nome)
  console.log("Status: " + estoques.ativo)
  console.log("Quantidade: " + estoques.qtd)
}
