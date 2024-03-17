var local_resposta = window.document.getElementById ('local_resposta')
var colecao_numeros = []

function add_numero (){
    // Pegar os números digitados, colocar no aray e mandar em forma de alerta no site
    var numero_fornecido = window.document.getElementById ('numero_fornecido').value
    
    colecao_numeros.push(numero_fornecido)
    window.alert (colecao_numeros)

    var opcoes = window.document.createElement('option')
    var contador_array = 0
    while (contador_array < colecao_numeros.length){
        opcoes.text = `O número é: ${colecao_numeros[contador_array]}`
        local_resposta.appendChild(opcoes)
        contador_array++
    }
    
    
}






