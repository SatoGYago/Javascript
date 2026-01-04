function tabuada(){
    let tab = document.getElementById('txtn')
    let res = document.getElementById('txtres')

    if(tab.value.length == 0){
        window.alert('Por favor digite um numero')
    }else{
        res.innerHTML= ''
        let n = Number(tab.value)
        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            res.appendChild(item)
        }
    }
}