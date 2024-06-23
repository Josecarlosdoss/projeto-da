   function carregar() {

            var msg = window.document.getElementById('msg')
            
            var img = window.document.getElementById('image')
            
            var data = new Date()
            
            var hora = data.getHours()
            
            msg.innerHTML = `agora são ${hora} hora.`
            
            if (hora >= 0 && hora < 12) {
                //Bom dia!
                img.src = 'foto-manha.jpg'
                document.body.style.background = '#D8C7A3'
            } else if (hora >= 12 && hora <= 18) {
                //Boa tarde!
                img.src = 'foto-tarde.jpg'
                document.body.style.background = '#B96A52'
                
            } else {
                //Boa noite!
                img.src = 'foto-noite.jpg'
                document.body.style.background = '#0367A6'
            }

}

        
