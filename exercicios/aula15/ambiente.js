let num = [5, 8, 2, 9, 3]

let ultimoNumero = num.length
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} elementos`)
console.log(`O primeiro valor do array é ${num[0]}`)
console.log(`O último valor do array é ${num[ultimoNumero]}`)

let posicao = num.indexOf(3)

if (posicao == -1) {
    console.log('O valor não foi encontrado') 
} else {
    console.log(`O valor está na posição ${posicao}`)
}
