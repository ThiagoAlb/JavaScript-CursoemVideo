function contar () {
    var inicio = window.document.getElementById('txtinicio')
    var fim = window.document.getElementById('txtfim')
    var passa = window.document.getElementById('txtpasso')
    var res = window.document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passa.value.lenght == 0) {
        res.innerHTML = `Não é possível contar!`
        window.alert(`[ERRO] Faltam dados!`)
        
    } else {
        res.innerHTML = `Contando: <br>`
    }

    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passa.value)
    if (p <= 0) {
        window.alert('Passo inválido! Considerando Passo = 1')
        p = 1
    }
    if (i < f) {
        //Vai contar de maneira crescente
        for (var c = i; c <= f ; c = c + p) {
            res.innerHTML += ` ${c} \u{27A1}`
        }
    } else {
        //Vai contar de forma decrescente
        for(let c = i; c >= f; c -= p)
        res.innerHTML += ` ${c} \u{1F449} ` 
    }
    res.innerHTML += `\u{1F3C1}`
    
}
