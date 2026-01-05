let numeros = []
 let res = document.getElementById('txtres')
 let analise1 = document.getElementById('res1')
 let analise2 = document.getElementById('res2')
 let analise3 = document.getElementById('res3')
 let analise4 = document.getElementById('res4')
 let analise5 = document.getElementById('res5')
 let maior = 0
 let soma = 0
 let media = 0
function Adicionar(){
    addnum = document.getElementById("txtnum")
    var menor = numeros[0]
    if(numeros.indexOf(addnum.value) == -1){
    numeros.push(addnum.value)
    soma = soma + Number(addnum.value)
    media = soma/numeros.length
    let item = document.createElement('option')
    item.text = `O valor ${addnum.value} foi adicionado na posição ${numeros.indexOf(addnum.value)} `
    res.appendChild(item)
    analise1.innerHTML = ''
    analise2.innerHTML = ''
    analise3.innerHTML = ''
    analise4.innerHTML = ''
    analise5.innerHTML = ''
 }else{
    window.alert('Numero ja cadastrado')
 }
 addnum.value = ''
 addnum.focus()

}

function Analise(){
    if(numeros.length == 0 ){
        window.alert('nenhum numero cadastrado') 
     }else{ 
    let menor = Math.min(...numeros)
    let maior = Math.max(...numeros)
    analise1.innerHTML = `Foram cadastrados ${numeros.length} numeros`
    analise2.innerHTML = `O maior valor cadastrado foi ${maior}`
    analise3.innerHTML = `O menor valor cadastrado foi ${menor}`
    analise4.innerHTML = `A soma dos valores digitados é ${soma}`
    analise5.innerHTML = `A média dos valores digitados é ${media}`

 }
}
