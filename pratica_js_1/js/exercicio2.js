function tratadorDeCliqueExercicio2() {
    // atualize esta função para
    // exibir um alerta com a hora 
    // atual no seguinte formato:
    // Horário: 8 PM : 40m : 28s
    console.log('adicionar código na função tratadorDeCliqueExercicio2() em ./js/exercicio2.js')

    let myDate = new Date();
    alert(myDate.toLocaleString('en-US', { hour: 'numeric', hour12: true }) + " : " + myDate.getMinutes() + "m : " + myDate.getSeconds() + "s")
}