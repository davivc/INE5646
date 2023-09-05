function haOnzeDigitos(cpf) {
    //---- edite aqui para a validação do exercício 9a
    const regex = /[0-9]/g;
    found = cpf.match(regex);
    console.log(found)
    if (found != null) if (found.length == 11) return true
    return false
}

function todosOsOnzeDigitosSaoNumeros(cpf) {
    //---- edite aqui para a validação do exercício 9b
    return haOnzeDigitos(cpf)
}

function osOnzeNumerosSaoDiferentes(cpf) {
    //---- edite aqui para a validação do exercício 9c
    const regex = /(.)(\1)*/g;
    found = cpf.match(regex);
    console.log(found)
    if (found != null) if (found.length == 1) return false
    return true
}

function oPrimeiroDigitoVerificadorEhValido(cpf) {
    //---- edite aqui para a validação do exercício 9d

    allValues = cpf.split("")
    console.log(allValues)
    soma = 0
    j = 0
    for (i = 10;  i > 1; i--) {
        soma += allValues[j] * i
        j++
    }
    resto = (soma*10)%11
    if (resto == 10) resto = 0
    console.log(resto)
    console.log(allValues[j])
    if (allValues[j] == resto) return true 
    return false
}

function oSegundoDigitoVerificadorEhValido(cpf) {
    //---- edite aqui para a validação do exercício 9e
    allValues = cpf.split("")
    console.log(allValues)
    soma = 0
    j = 0
    for (i = 11;  i > 1; i--) {
        soma += allValues[j] * i
        j++
    }
    resto = (soma*10)%11
    if (resto == 10) resto = 0
    console.log(resto)
    console.log(allValues[j])
    if (allValues[j] == resto) return true 
    return false

    return false
}





//------------------- Não edite abaixo ----------------------------
function validarCPF(validacao, cpf) {
    switch (validacao) {
        case "onzeDigitos": return haOnzeDigitos(cpf)
        case "onzeSaoNumeros": return todosOsOnzeDigitosSaoNumeros(cpf) && validarCPF("onzeDigitos", cpf)
        case "naoSaoTodosIguais": return osOnzeNumerosSaoDiferentes(cpf) && validarCPF("onzeSaoNumeros", cpf)
        case "verificador10": return oPrimeiroDigitoVerificadorEhValido(cpf) && validarCPF("naoSaoTodosIguais", cpf)
        case "verificador11": return oSegundoDigitoVerificadorEhValido(cpf) && validarCPF("verificador10", cpf)

        default:
            console.error(validacao+" é um botão desconhecido...")
            return false
    }
}


function tratadorDeCliqueExercicio9(nomeDoBotao) {
    const cpf = document.getElementById("textCPF").value

    const validacao = (nomeDoBotao === "validade") ? "verificador11": nomeDoBotao
    const valido = validarCPF(validacao, cpf)
    const validoString = valido ? "valido": "inválido"
    const validadeMensagem = "O CPF informado ("+cpf+") é "+ validoString
    console.log(validadeMensagem)

    if (nomeDoBotao !== "validade") {
        let divResultado = document.getElementById(validacao);
        divResultado.textContent = validoString
        divResultado.setAttribute("class", valido ? "divValidadeValido": "divValidadeInvalido")    
    } else {
        window.alert(validadeMensagem)
    }

    
}