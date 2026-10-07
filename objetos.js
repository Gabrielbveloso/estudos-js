const usuario = { nome: "Gabriel", idade: 25, cidade: "Salvador" };

const carrinho = [
  { nome: "Camiseta", preco: 50, quantidade: 2 },
  { nome: "Tênis", preco: 300, quantidade: 1 },
  { nome: "Boné", preco: 40, quantidade: 3 },
];

const { nome, cidade } = usuario;
console.log(`${nome} mora em ${cidade}`);

const apresentarUsuario = ({ nome, idade }) => `${nome} tem ${idade} anos`;
console.log(apresentarUsuario(usuario));

const usuarioAtualizado = { ...usuario, idade: 26 };
console.log(usuarioAtualizado);
console.log(usuario);

const quantidadeItens = carrinho.reduce(
  (soma, produto) => soma + produto.quantidade,
  0,
);
console.log(quantidadeItens);

const valorTotal = carrinho.reduce(
  (soma, produto) => soma + produto.preco * produto.quantidade,
  0,
);
console.log(valorTotal);
