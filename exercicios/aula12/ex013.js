var agora = new Date()
var diaSemana = agora.getDay()

/*
    Para o JavaScript, quando chamar getDay() não vai vir o nome do dia, mas sim o número que será equivalente a um dia especifico exemplificado na tabela abaixo:
        0 = Domingo
        1 = Segunda
        2 = Terça
        3 = Quarta
        4 = Quinta
        5 = Sexta
        6 = Sábado
*/

console.log(diaSemana)

switch(diaSemana) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERROR] Dia inválido!')
        break
}