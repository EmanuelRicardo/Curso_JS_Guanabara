function fatorial (n) {
    var fat = 1
    for (var contador = n; contador > 1; contador--) {
        fat *= contador
    }
    return fat
}

var resultado = fatorial (5)
console.log (`${resultado}`)
// 5! = 5x4x3x2x1 = 120