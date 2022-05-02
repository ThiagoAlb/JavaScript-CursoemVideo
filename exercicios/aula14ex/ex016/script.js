function contar () {
    var inicio = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var passa = window.document.getElementById('passo')
    var res = window.document.getElementById('res')

    for (var inicio = inicio; inicio <= fim; passa++) {
        res.innerHTML = `${passa}`
    }
}