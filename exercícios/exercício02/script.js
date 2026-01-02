function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert(`Verifique os anos e tente novamente`)

    } else{
        var fsex = document.getElementsByName('radiosex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'um Homem'
            if(idade <= 3){
                img.setAttribute('src', 'bebe.png')
            }else if (idade > 3 && idade <= 9){
                img.setAttribute('src', 'garoto4.png')
            }else if(idade >= 10 && idade < 14){
                img.setAttribute('src', 'garoto10.png')
            }else if (idade >= 14 && idade < 18){
                img.setAttribute('src', 'garoto14.png')
            }else if (idade >= 18 && idade <31){
                img.setAttribute('src', 'homem20.png')
            }else if (idade >= 31 && idade < 60){
                img.setAttribute('src', 'homem40.png')
            }else if(idade >= 60){
                img.setAttribute('src', 'homem60.png')
            }
                
        }else if (fsex[1].checked){
            genero = 'uma Mulher'
            if(idade <= 3){
                img.setAttribute('src', 'bebe.png')
            }else if (idade > 3 && idade <= 9){
                img.setAttribute('src','garota4.png')
            }else if(idade >= 10 && idade < 14){
                img.setAttribute('src', 'garota10.png')
            }else if (idade >= 14 && idade < 18){
                img.setAttribute('src', 'garota13.png')
            }else if (idade >= 18 && idade <31){
                img.setAttribute('src', 'mulher20.png')
            }else if (idade >= 31 && idade < 60){
                img.setAttribute('src','mulher30.png')
            }else if(idade >= 60){
                img.setAttribute('src','mulher60.png')
            }
        }
        res.innerHTML= `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}