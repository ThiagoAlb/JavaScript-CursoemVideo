let valores = [1, 4, 6, 2, 7, 9, 8, 3, 5]


valores.sort()
console.log(valores)
/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
console.log(valores[6])
console.log(valores[7])
console.log(valores[8])
console.log(valores[9])
*/

/*
for (let posicao = 0; posicao < valores.length; posicao++) {
    console.log(`A posição ${posicao} tem o valor ${valores[posicao]}`)
}
*/

for (let posicao in valores) {
    console.log(`A posição ${posicao} tem o valor ${valores[posicao]}`)
}