var botao1 = window.document.getElementById('botao1') 
botao1.addEventListener ('click', verificar)

function verificar () {
    var nascimento = window.document.getElementById ('nascimento')
    var resposta = window.document.getElementById ('resposta')
    resposta.innerHTML (`${nascimento.value}`)
}