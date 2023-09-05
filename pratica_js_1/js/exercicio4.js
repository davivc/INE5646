//atualize esta função
function checkIntervalo(pVal) {
    console.log('Número informado: ' + pVal) 
    if (pVal >= 30 & pVal <= 50) {
        console.log(pVal + ' está no intervalo [30,50]')
    }
    else if (pVal >= 60 & pVal <= 100) {
        console.log(pVal + ' está no intervalo [60,100]')
    }
    else {
        console.log('O número informado não está em nenhum dos dois intervalos.')
    }
}

function Exercicio4() {

    let numero1 = window.prompt("Insira o primeiro número: ")
    let numero2 = window.prompt("Insira o segundo número: ")

    checkIntervalo(numero1)
    checkIntervalo(numero2)
}