function verificar() {
        var data = new Date()
        var ano = data.getFullYear()
        var fano = document.getElementById('txtano')
        var res = document.querySelector('div#res')
        
        if (fano.value.leght == 0 || Number(fano.value) > ano) {
            window.alert('[ERRO] Verificar os dados e tente novamente')
        
        } else {
                var fsex = document.getElementsByName('radsex')
                var idade = ano - Number(fano.value)
                
                var genero = ' '
                var img = document.createElement('img')
                img.setAttribute('id' , 'foto')
                
                if (fsex[0].checked) {
                    genero = 'Homem'
                    if (idade >= 0 && idade < 10) {
                        //criança
                        img.setAttribute('src' , 'crianca-homem.jpg')
                    } else if (idade < 21) {
                        //jovem
                        img.setAttribute('src' , 'jovem-homem.jpg')
                    } else if (idade < 50) {
                        //adulto
                        img.setAttribute('src' , 'adulto-homem.jpg')
                    } else {
                        //idoso
                        img.setAttribute('src' , 'idoso-homem.jpg')
                    }
                } else if (fsex[1].checked) {
                    genero = 'Mulher'
                    if (idade >= 0 && idade < 10) {
                        //criança
                        img.setAttribute('src' , 'crianca-mulher.jpg')
                    } else if (idade < 21) {
                        //jovem
                        img.setAttribute('src' , 'jovem-mulher.jpg')
                    } else if (idade < 50) {
                        //adulto
                        img.setAttribute('src' , 'adulto-mulher.jpg')
                    } else {
                        //idoso
                        img.setAttribute('src' , 'idoso-mulher.jpg')
                    }
                }
                res.style.textAlign = 'center'
                res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
                res.appendChild(img)
        
        }
}
