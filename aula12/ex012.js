var agora = new Date()
var hora = agora.getHours()
var horario = 23 
console.log (`Que horas são?!`)
console.log (`Agora são ${horario}h`)
if (horario < 12 && horario > 0){
    console.log (`BOM DIA!!!`)
} else {
    if (horario >= 12 && horario < 18){
        console.log (`BOA TARDE!!!`)
    } else {
        console.log (`BOA NOITE!!!`)
    }
}
