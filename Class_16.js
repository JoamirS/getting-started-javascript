function contar() {
    var inicio = document.getElementById('textinicio')
    var fim = document.getElementById('textfim')
    var passo = document.getElementById('textpasso')
    var result = document.getElementById('result')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[Erro] Faltam dados!')
    } else {
        result.innerHTML = 'Contando: <br>'
        var inicio = Number(inicio.value)
        var fim = Number(fim.value)
        var passo = Number(passo.value)
        
        if (passo <= 0) {
            window.alert('Passo inválido')
            passo = 1
        }

        if (inicio < fim){
            for (var i = inicio; i <= fim; i += passo) {
                result.innerHTML += `${i} `
            }
        } else {
            for (var i = inicio; i >= fim; i -= passo){
                result.innerHTML += `${i} `
            }
        }
    }
}