const numeros = [5, 12, 8, 21, 3, 16];

const produtos = [
  { nome: "Camiseta", preco: 50, emEstoque: true },
  { nome: "Tênis", preco: 300, emEstoque: false },
  { nome: "Boné", preco: 40, emEstoque: true },
  { nome: "Mochila", preco: 150, emEstoque: true },
];

const multiplicadosPor10 = numeros.map((n) => n * 10);
console.log(multiplicadosPor10);

const maioresQue10 = numeros.filter((n) => n > 10);
console.log(maioresQue10);

const ehpar = (n) => n % 2 === 0;
const primeiroPar = numeros.find(ehpar);
console.log(primeiroPar);

const nomes = produtos.map((p) => p.nome);
console.log(nomes);

const produtosEmEstoque = produtos.filter((e) => e.emEstoque);
console.log(produtosEmEstoque);

const bone = produtos.find((produto) => produto.nome === "Boné");
console.log(bone);

const produtosAte100 = produtos.filter((produto) => produto.preco <= 100);
console.log(produtosAte100);
