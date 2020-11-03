function tabuada () {
    var numero = document.getElementById('txtn')
    var tab = document.getElementById('seltab')

    if (numero.value.length == 0){
        window.alert('Por favor, digite um número')
    } else {
        var numberConst = Number(numero.value)
        var counter = 1
        tab.innerHTML = ''

        while (counter <= 10){
            var item = document.createElement('option')
            item.text = `${numberConst} x ${counter} = ${numberConst * counter}`
            item.value = `tab${counter}`
            tab.appendChild(item)
            counter++
        }
    }
}