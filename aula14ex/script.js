function contar(){
    var n_inicial = window.document.getElementById ('n_inicial').value
    var n_final = window.document.getElementById ('n_final').value
    var intervalo = window.document.getElementById ('intervalo').value
    var resposta = window.document.getElementById ('resposta')
    var calculo = ''

    if (n_inicial.length == 0 || n_final.length == 0){
        resposta.innerHTML = ("Impossivel contar. <br> Defina um número para o começo e outro para o final.")
    } else if (intervalo.length == 0){
        resposta.innerHTML = ("Impossivel contar. <br> Defina uma quantidade de passos.")
    } else if (intervalo == 0){
        window.alert ("Intervalo '0' é invalido, por isso consideraremos intervalo de um em um")
        var intervalo = 1
    }

    /*while (n_inicial <= n_final){
        var n_inicial = n_inicial + intervalo

    }*/
}