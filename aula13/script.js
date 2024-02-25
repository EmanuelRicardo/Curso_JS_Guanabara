function verificar () {
    var data = new Date()
    var ano_atual = data.getFullYear()
    var nascimento_usuario = window.document.getElementById ('nascimento').value
    var resposta = window.document.getElementById ('resposta')
    if (nascimento_usuario.length == 0 || nascimento_usuario > ano_atual){
        window.alert ('Tem algo de errado, tente novamente.')
    } else {
        var sexo_escolhido = window.document.getElementsByName('sexo')
        var idade = ano_atual - nascimento_usuario
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        // Com isso aqui em cima é como se eu tivesse criado uma tag html de id = "foto", só que ela não aparece e só vai ser utilizada quando eu solicitar. 
        if (sexo_escolhido[0].checked){
            genero = 'homem'
            if (idade < 12 && idade > 0){
                img.setAttribute ('src', 'imagens/bebe_homem.jpg')
            } else if (idade < 18){
                img.setAttribute ('src', 'imagens/jovem_homem.jpg')
            } else if (idade < 65){
                img.setAttribute ('src', 'imagens/homem_adulto.jpg')
            } else {
                img.setAttribute ('src', 'imagens/homem_velho.jpg')
            }
        } else if (sexo_escolhido[1].checked) {
            genero = 'Mulher'
            if (idade < 12 && idade > 0){
                img.setAttribute('src', 'imagens/bebe_mulher.jpg')
            } else if (idade < 18){
                img.setAttribute ('src', 'imagens/jovem_mulher.jpg')
            } else if (idade < 65){
                img.setAttribute('src', 'imagens/mulher_adulta.jpg')
            } else {
                img.setAttribute('src', 'imagens/mulher_velha.jpg')
            }
        }
        resposta.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos de idade.`
        resposta.appendChild(img)
    }
}