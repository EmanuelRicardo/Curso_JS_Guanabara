var agora = new Date()
var dia_da_sem = agora.getDay()

console.log(dia_da_sem)
switch(dia_da_sem){
    case 0:
        console.log('domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log(`Terça feira`)
        break
    case 3:
        console.log(`Quarta feira`)
        break
    case 4: 
        console.log('Quinta feira')
        break
    case 5:
        console.log(`Sexta feira`)
        break
    case 6:
        console.log(`Sábado`)
        break
    default:
        console.log (`[Erro] Dia invalido`)
}   