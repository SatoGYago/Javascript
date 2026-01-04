function contar(){

let inicio = document.getElementById('txtinicio')
let fim = document.getElementById('txtfim')
let passo = document.getElementById('txtpasso')

 if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    window.alert('Por favor preencha todos os dados corretamente')}else{
        res.innerHTML = `Contando... : `
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p == 0){
            window.alert('Numero de passos invalido!')
        }else{
        for (let c = i; c <= f; c += p) {
            res.innerHTML += ` 👉 ${c}`


        }
    }

}

}
    


