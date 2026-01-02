function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var sdc = ""
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas!`
    if(hora > 5 && hora < 12){
        //Bom Dia
        imagem.src = 'Amanhecer01.png'
        document.body.style.background = '#DBD46F'
    }else if(hora >= 12 && hora < 18){
        //Boa tarde
        imagem.src = 'tarde.png'
        document.body.style.background = '#DB6348'
    }else {
        //Boa noite
        imagem.src = 'noite.png'
        document.body.style.background = '#3128DB'
    }
}
