function calculadora (a, b, f) {
    return f(a, b);
}

function soma(a, b) {
    return a+b;
}

function subtrai(a, b) {
    return a-b;
}

console.log(calculadora(31, 12, soma));
console.log(calculadora(11, 25, subtrai));