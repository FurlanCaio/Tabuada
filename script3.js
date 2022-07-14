function gerar() {
    let txtn = document.getElementById('txtn')
    let tab = document.getElementById('res')
    let n = Number(txtn.value)
    let c = 1
    tab.innerHTML = ""
    for(c = 1; c <= 10; c++) {
        let item = document.createElement('option')
        let tabuada = n*c
        item.text = `${n} X ${c} = ${tabuada}`
        tab.appendChild(item)
    }
    
}