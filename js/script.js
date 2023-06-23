const abrirMenu = document.querySelector('.abrir-menu')
const cerrarMenu = document.querySelector('.cerrar-menu')
const nav = document.querySelector('.nav__alumno')

abrirMenu.addEventListener('click', () =>{
    nav.classList.add("visible")
})

cerrarMenu.addEventListener('click', () =>{
    nav.classList.remove("visible")
})