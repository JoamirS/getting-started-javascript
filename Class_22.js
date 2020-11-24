var inputUser = window.document.getElementById('inputNumero')
var list = document.querySelector('select#ID_analizeresult')
var result = document.querySelector('div#result')

var values = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(inputUser.value) && !inLista(inputUser.value, values)) {
        values.push(Number(inputUser.value))
        var item = document.createElement('option')
        item.text = `Valor ${inputUser.value} adicionado.`
        list.appendChild(item)
        result.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    inputUser.value = ''
    inputUser.focus()
}

function finalizar() {
    if (values.length == 0) {
        window.alert('Adicione valores para finalizar.')
    } else {
        var totalNumero = values.length
        var maior = values[0]
        var menor = values[0]
        var soma = 0
        var media = 0

        for(var posicao in values) {
            if (values[posicao] > maior)
                maior = values[posicao]
            if (values[posicao] < menor)
                menor = values[posicao]
            soma += values[posicao]
        }

        media = soma / totalNumero

        result.innerHTML = ''
        result.innerHTML += `<p> Ao todo, temos ${totalNumero} números cadastrados.<p>`
        result.innerHTML += `<p> O maior valor informado foi o ${maior}.<p>`
        result.innerHTML += `<p> O menor valor informado foi o ${menor}.<p>`
        result.innerHTML += `<p> A soma de todos os valores é ${soma}<p>`
        result.innerHTML += `<p> A média dos número é ${media}.<p>`
    }
}