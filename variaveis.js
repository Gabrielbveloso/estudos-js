if (true) {
    var a = 1;
    let b = 2;
    const c = 3;
}
console.log(a); // Output: 1
console.log(b); // Output: ReferenceError: b is not defined 

const nome = "Ana";
console.log(nome); // Ana

// nome = "Bia"; // Erro! const não pode ser reatribuída