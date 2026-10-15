export {};
const somar = (a: number, b: number): number => a + b;
const ehMaiorDeIdade = (idade: number): boolean => idade >= 18;
const saudar = (nome: string, cidade = "Brasil"): string =>
  `Sou ${nome} de ${cidade}`;

console.log(somar(21, 33));
console.log(ehMaiorDeIdade(21));
console.log(saudar("Gabriel"));

type Produto = {
  nome: string;
  preco: number;
  emEstoque: boolean;
};

const produtos: Produto[] = [
  { nome: "Blusa", preco: 100, emEstoque: true },
  { nome: "Short", preco: 60, emEstoque: true },
  { nome: "Boné", preco: 30, emEstoque: false },
];

const calcularTotal = (produtos: Produto[]): number =>
  produtos.reduce((soma, produto) => soma + produto.preco, 0);

console.log(calcularTotal(produtos));

const nomesEmEstoque = (produtos: Produto[]): string[] =>
  produtos
    .filter((produto) => produto.emEstoque)
    .map((produto) => produto.nome);

console.log(nomesEmEstoque(produtos));

type StatusPedido = "pendente" | "pago" | "enviado";

const descreverStatus = (status: StatusPedido): string => {
  if (status === "pendente") {
    return "Aguardando pagamento";
  } else if (status === "pago") {
    return "Pagamento confirmado";
  } else {
    return "Pedido a caminho";
  }
};
console.log(descreverStatus("pendente"));
console.log(descreverStatus("pago"));
console.log(descreverStatus("enviado"));
