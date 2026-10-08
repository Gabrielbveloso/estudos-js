const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const prepararCafe = async () => {
  console.log("Fervendo água...");
  await esperar(2000);
  console.log("Café pronto! ☕");
};

//prepararCafe();

//buscarUsuario(1);

const listarNomes = async () => {
  const resposta = await fetch("https://jsonplaceholder.typicode.com/users");
  const usuarios = await resposta.json();
  const nomes = usuarios.map((usuario) => usuario.name);
  console.log(nomes);
};

//listarNomes();

const buscarUsuario = async (id) => {
  try {
    const resposta = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
    );
    const { name, email } = await resposta.json();
    console.log(`${name} - ${email}`);
  } catch (erro) {
    console.log("Não foi possível buscar o usuário:", erro.message);
  }
};

buscarUsuario(1);
