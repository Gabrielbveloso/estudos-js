const classificarIdade = (idade) => {
  if (idade < 12) {
    return "Criança";
  } else if (idade < 18) {
    return "Adolescente";
  } else if (idade < 60) {
    return "Adulto";
  } else {
    return "Iudoso";
  }
};

console.log(classificarIdade(5)); // Criança
console.log(classificarIdade(15)); // Adolescente
console.log(classificarIdade(30)); // Adulto
console.log(classificarIdade(70)); // Idoso

const podeDirigir = (idade, temCarteira) => idade >= 18 && temCarteira;

console.log(podeDirigir(18, true));
console.log(podeDirigir(20, false));
console.log(podeDirigir(16, true));

const ehFimDeSemana = (dia) => dia === "Sabado" || dia === "Domingo";

console.log(ehFimDeSemana("Sabado"));
console.log(ehFimDeSemana("Segunda"));
console.log(ehFimDeSemana("Domingo"));

const statusPagamento = (pago) => (pago ? "Pago" : "Pendente");
console.log(statusPagamento(true)); // Pago
console.log(statusPagamento(false)); // Pendente

const statusLampada = (ativo) => (ativo ? "Ligado" : "Desligado");
console.log(statusLampada(true));
console.log(statusLampada(false));
