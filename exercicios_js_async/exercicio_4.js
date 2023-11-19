
function consoleAtrasado2(mensagem, atraso) {
    setTimeout(() => { console.log(mensagem) }, atraso)
}
console.log("Olá")
consoleAtrasado2("Teste", 10000)
console.log("Bye")