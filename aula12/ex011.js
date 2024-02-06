var idade = 65
if(idade < 16){
    console.log(`Com ${idade} anos de idade AINDA NÃO PODE VOTAR`)
}else {
    if (idade < 18 || idade >= 65){
        console.log (`Com ${idade} anos de idade o VOTO É OPCIONAL`)
    } else {
        console.log (`Com ${idade} anos de idade o VOTO É OBRIGATORIO`)
    }
}