function gerar(){
    var n_escolhido = window.document.getElementById ('n_escolhido').value
    var tabuada_area = window.document.getElementById ('tabuada_area')

    if (n_escolhido.length == 0){
        window.alert (`[ERRO] Faltou escolher um número para a tabuada`)
    } else {
        contador = 1
        while (contador <= 10){
            var resultado = n_escolhido * contador
            contador ++
            tabuada_area.innerHTML += ` ${resultado} `
        }
    }
}

