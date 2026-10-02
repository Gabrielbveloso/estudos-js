const ehPar = (n) => n % 2 === 0;
console.log(ehPar(2));

const multiplicar = (a,b) => a * b;
console.log(multiplicar(4,5));

const celsiusParaFahrenheit = (c) => c * 9 / 5 + 32;
console.log (celsiusParaFahrenheit(30));

const apresentar = (nome, cidade = "Brasil") => `Olá, sou ${nome} de ${cidade}!`
console.log(apresentar("Gabriel","Salvador"));