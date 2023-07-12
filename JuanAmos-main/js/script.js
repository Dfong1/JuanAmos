const abrirMenu = document.querySelector('.abrir-menu')
const cerrarMenu = document.querySelector('.cerrar-menu')
const nav = document.querySelector('.nav__alumno')
const form = document.querySelector('.card')

abrirMenu.addEventListener('click', () =>{
    nav.classList.add("visible")
    form.classList.add("none")
})

cerrarMenu.addEventListener('click', () =>{
    nav.classList.remove("visible")
    form.classList.remove("none")
})