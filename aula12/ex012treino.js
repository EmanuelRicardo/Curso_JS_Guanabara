console.log (`Vamos verificar o horario de ir pra academia`)
var horario_academia = 02
if ((horario_academia > 5 && horario_academia < 12) || (horario_academia >= 14 && horario_academia < 22 )){
    console.log (`Neste horario de ${horario_academia}h, a academia está aberta.`)
} else {
    console.log (`Neste horario de ${horario_academia}h a academia está fechada :(`)
}