function load() {
    var message = window.document.getElementById('message')
    var picture = window.document.getElementById('picture')
    var date = new Date()
    var hourNow = date.getHours()
    message.innerHTML = `Agora são ${hourNow} horas.`

    if (hourNow >= 0 && hourNow < 12) {
        picture.src = 'Class_12_Morning.png'
        document.body.style.background = '#0367A6'

    } else if (hourNow >= 12 && hourNow < 18) {
        picture.src = 'Class_12_Afternoon.png'
        document.body.style.background = '#F26E22'

    } else {
        picture.src = 'Class_12_night.png'
        document.body.style.background = '#0DF205'
    }
}