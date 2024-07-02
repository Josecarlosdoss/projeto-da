function contar() {

            let ini = window.getElementById('txti')
            let fim = window.getElementById('txtf')
            let passo = window.getElementById('txtp')
            let res = window.getElementById('res')
            
            if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
                res.innerHTML = 'impossivel contar!'
            } else {
                res.innerHTML = 'contando: <br>'
                
                let i = Number(ini.value)
                let f = Number(fim.value)
                let p = Number(passo.value)
                
                 if (p <= 0) {
                     window.alert('Passo invalido! Considerando passo 1')
                     p = 1
            }
              if (i < f) {
                //contagem crescente
                 for(let c = i; c <= f; c += p) {
                        res.innerHTML += ` ${c} \u{1F449}`
                }
            } else {
                    //contagem regressiva
                    for(let c = i; c >= f; c -= p) {
                            res.innerHTML += ` ${c} \u{1F449}`
                    }
            }    res.innerHTML += ` \u{1F3C1}`

      }
}
