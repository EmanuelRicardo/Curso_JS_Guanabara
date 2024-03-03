function contar(){
    var n_inicial = window.document.getElementById ('n_inicial').value
    var n_final = window.document.getElementById ('n_final').value
    var intervalo = window.document.getElementById ('intervalo').value
    var resposta = window.document.getElementById ('resposta')
    var n_calculado = ''
    var n_resposta = ''
    var n_next = ''
    var n_prev = ''

    if (n_inicial.length == 0 || n_final.length == 0 || intervalo.length == 0){
        resposta.innerHTML = ("Impossivel contar. <br> Defina um valor para cada uma das opções")
    } else if (intervalo == 0){
        window.alert ("Intervalo '0' é invalido, por isso consideraremos intervalo de um em um")
        var intervalo = 1
    } else {
        
        resposta.innerHTML = ''
        var i = Number(n_inicial)
        var f = Number(n_final)
        var p = Number(intervalo)

        if (i < f){
            //crescente
            for (var c = i; c <= f; c += p)
            resposta.innerHTML += ` ${c} `
        } else if (i > f){
            //decrescente
            for (var c = i; c >= f; c-= p)
            resposta.innerHTML += ` ${c} `
        }
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