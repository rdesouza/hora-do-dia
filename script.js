var msg = document.getElementById( 'msg')
var img = document.getElementById('imagem')
var data = new Date()

var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`

function carregar(){
    if(hora >= 0  && hora <12){
        img.src = 'manha.png'
        document.body.style.background = '#c3e8f1'

    }else if(hora >12 && hora <=18){
        img.src = 'tarde.png'
        document.body.style.background = '#fea468'
        
    }else{
        img.src = 'noite.png'
        document.body.style.background ='#00101d'

    }
}