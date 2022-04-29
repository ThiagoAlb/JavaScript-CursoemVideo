function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'criança-menino.jpg')
                img.style.width = '250px'
                img.style.borderRadius = '300px'
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem-homem.jpg')
                img.style.width = '250px'
                img.style.borderRadius = '300px'
            } else if (idade < 50) {
                img.setAttribute('src', 'homem-adulto.jpg')
                img.style.width = '250px'
                img.style.borderRadius = '300px'
            } else {
                img.setAttribute('src', 'homem-velho.jpg')
                img.style.width = '250px'
                img.style.borderRadius = '300px'
            }

        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'criança-menina.jpg')
                img.style.width = '250px'
                img.style.borderRadius = '300px'
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem-mulher.jpg')
                img.style.width = '250px'
                img.style.borderRadius = '300px'
            } else if (idade < 50) {
                img.setAttribute('src', 'mulher-adult.jpg')
                img.style.width = '250px'
                img.style.borderRadius = '300px'
            } else {
                img.setAttribute('src', 'mulher-velha.jpg')
                img.style.width = '250px'
                img.style.borderRadius = '300px'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}