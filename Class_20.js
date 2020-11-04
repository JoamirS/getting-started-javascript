function parouimpar(number) {
    if (number % 2 == 0) {
        return 'Par'
    } else {
        return 'Ímpar'
    }
}

var resultado = parouimpar(4)

console.log(`O resultado é ${resultado}`)