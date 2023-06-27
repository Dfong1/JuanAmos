const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

let currentDate = new Date();
let currentDay = currentDate.getDate();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();


const dates = document.getElementById('dates')
const mesActual = document.getElementById('mes-actual')
const año = document.getElementById('año-actual')

const mesSiguiente = document.getElementById('mes-siguiente')
const mesAnterior = document.getElementById('mes-anterior')

mesActual.textContent = meses[currentMonth]
año.textContent = currentYear.toString()

writeMonths(currentMonth)

mesAnterior.addEventListener('click', () =>{
    lastMonth()
})

mesSiguiente.addEventListener('click', () =>{
    nextMonth()
})

function writeMonths(mesActual){

    for(let i = diaUno(); i > 0; i--){
        dates.innerHTML += `
        <div class="dias_mesAnterior">${getTotalDays(currentMonth-1)-(i-1)}</div>
        `
    }

    for(let i = 1; i<= getTotalDays(mesActual); i++){
        if(i === currentDay){
        dates.innerHTML += 
        `
        <div class="container__hoy">
        <div class="calendar__date calendar__item hoy">${i}</div>
        </div>
        `
        }
        else{
            dates.innerHTML += 
            `
            <div class="calendar__date calendar__item">${i}</div>
            `   
        }
    }
}


function isLeap(){
    return((currentYear % 100 != 0 && currentYear % 4 == 0) ||  (currentYear % 400 == 0))
}

console.log(diaUno())

function diaUno(){
    let primer = new Date(currentYear, currentMonth, 1)
    return ((primer.getDay()-1) === -1) ? 6 : primer.getDay()-1;
}

function getTotalDays(mesActual){
    if(mesActual == -1) mesActual = 11

    if(mesActual == 0 || mesActual == 2 || mesActual == 4 || mesActual == 6 || mesActual == 7 || mesActual == 9
        || mesActual == 11){
            return 31;
        }
    if(mesActual == 3 || mesActual == 5 || mesActual == 8 || mesActual == 10){
        return 30;
    }

    return isLeap() ? 29:28

}

function lastMonth(){
    if(currentMonth !== 0){
        currentMonth--
    }
    else{
        currentMonth = 11
        currentYear--
    }
    setNewDay()
}

function nextMonth(){
    if(currentMonth !== 11){
        currentMonth++
    }
    else{
        currentMonth = 0
        currentYear++
    }
    setNewDay()
}

function setNewDay(){
    currentDate.setFullYear(currentYear,currentMonth, currentDay)
    mesActual.textContent = meses[currentMonth]
    año.textContent = currentYear.toString()

    dates.textContent = ''
    writeMonths(currentMonth)
}