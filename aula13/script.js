function verificar () {
    var data = new Date()
    var ano_atual = data.getFullYear()
    var nascimento_usuario = window.document.getElementById ('nascimento').value
    var resposta = window.document.getElementById ('resposta')
    window.alert (`${ano_atual}`)
    window.alert (`${nascimento_usuario}`)
    if (nascimento_usuario.length == 0 || nascimento_usuario > ano_atual){
        window.alert ('Tem algo de errado, tente novamente.')
    } else {
        var sexo_escolhido = window.document.getElementsByName('sexo')
        var idade = ano_atual - nascimento_usuario
        var genero = ''
        if (sexo_escolhido[0].checked){
            genero = 'homem'     
        } else if (sexo_escolhido[1].checked) {
            genero = 'Mulher'
        }
        resposta.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos de idade.`
    }
}