function carregar(){
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('img')
    var data = new Date()
    var hora = 
    //var hora = data.getHours()
    msg.innerHTML = `<strong>Agora são ${hora} horas.</strong>`
    if (hora > 0 && hora < 12){
        foto.src = ('manha.png')
    } else if (hora < 18){
        foto.src = ('tarde.png')
    } else {
        foto.src = ('noite.png')
    }
}
        