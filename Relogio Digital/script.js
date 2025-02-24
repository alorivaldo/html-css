let horas = document.getElementById("horas")
let minutos = document.getElementById("minutos")
let segundos = document.getElementById("segundos")

let relogio = setInterval(function time() {
    let dateToday = new Data()
    let hr = dateToday.getHours()
    let min = dateToday.getMinutes()
    let s = dateToday.getSeconds()

    if (hr < 10) hr = "0" + hr

    if (hr < 10) hr = "0" + hr

    if (hr < 10) hr = "0" + hr


    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;

})