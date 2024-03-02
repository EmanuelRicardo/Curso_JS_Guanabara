function contar(){
    var n_inicial = window.document.getElementById ('n_inicial').value
    var n_final = window.document.getElementById ('n_final').value
    var intervalo = window.document.getElementById ('intervalo').value
    var resposta = window.document.getElementById ('resposta')
    var numero_calculado = ''
    var numero_resposta = ''

    window.alert (`Inicial = ${n_inicial}`)
    window.alert (`Final = ${n_final}`)
    window.alert (`Intervalo = ${intervalo}`)
    if (n_inicial.length == 0 || n_final.length == 0){
        resposta.innerHTML = ("Impossivel contar. <br> Defina um número para o começo e outro para o final.")
    } else if (intervalo.length == 0){
        resposta.innerHTML = ("Impossivel contar. <br> Defina uma quantidade de passos.")
    } else if (intervalo == 0){
        window.alert ("Intervalo '0' é invalido, por isso consideraremos intervalo de um em um")
        var intervalo = 1
    } else if (n_inicial > n_final) {
        resposta.innerHTML = ("{ERRO} Numero inicial maior que numero final.")
    } else if (intervalo > n_final) {
        resposta.innerHTML = (`{ERRO} Número de passos não comportado. Observe:  ${intervalo} > ${n_final}`)
    } else {
        resposta.innerHTML = ('Agora foi')
    }
}


/*
        do {
            var numero_calculado = n_inicial 
            if (numero_calculado != n_inicial){
                var numero_resposta = n_inicial + '' + n_calculado
            }
            var numero_resposta = n_inicial + '' + n_calculado
            var numero_calculado =  numero_calculado + intervalo
        } while (numero_calculado <= n_final);
        */