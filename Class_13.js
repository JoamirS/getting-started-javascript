function Verify() {
    var date = new Date()
    var yearCurrent = date.getFullYear()
    var formYear = document.getElementById('textYear')
    var result = document.querySelector('div#result')

    if (formYear.value.lenght == 0 || Number(formYear.value) > yearCurrent) {
        window.alert('Erro! Verifique os dados e tente novamente!')

    } else {
        var formSex = document.getElementsByName('radiosex')
        var age = yearCurrent - Number(formYear.value)
        var gender = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'picture')

        if (formSex[0].checked) {
            gender = 'Homem'
            if (age >= 0 && age < 10) {
                img.setAttribute('src', 'kid_man.png')
            } else if (age < 21) {
                img.setAttribute('src', 'young_man.png')
            } else if (age < 50) {
                img.setAttribute('src', 'adult_man.png')
            } else {
                img.setAttribute('src', 'old_man.png')
            }
        } else if (formSex[1].checked) {
            gender = 'Mulher'
            if (age >= 0 && age < 10) {
                img.setAttribute('src', 'kid_woman.png')
            } else if (age < 21) {
                img.setAttribute('src', 'young_woman.png')
            } else if (age < 50) {
                img.setAttribute('src', 'adult_woman.png')
            } else {
                img.setAttribute('src', 'old_woman.png')
            }
        }
        result.style.textAlign = 'center'
        result.innerHTML = `Detectamos ${gender} com ${age} anos.`
        result.append(img)
    }
}