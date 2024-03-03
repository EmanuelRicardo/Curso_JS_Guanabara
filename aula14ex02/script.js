function gerar(){
    var n_escolhido = window.document.getElementById ('n_escolhido').value
    var tabuada_area = window.document.getElementById ('tabuada_area')

    if (n_escolhido.length == 0){
        window.alert (`[ERRO] Faltou escolher um número para a tabuada`)
    } else {
        contador = 1
        tabuada_area.innerHTML = " "
        while (contador <= 10){
            let item = document.createElement ('option')
            item.innerHTML = `${n_escolhido} * ${contador} = ${n_escolhido*contador}`
            tabuada_area.appendChild(item)
            contador ++
        }
    }
}

