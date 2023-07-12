const abrirMenu = document.querySelector('.abrir-menu')
const cerrarMenu = document.querySelector('.cerrar-menu')
const nav = document.querySelector('.nav__alumno')
const table = document.querySelector('.table__pag')

abrirMenu.addEventListener('click', () =>{
    nav.classList.add("visible")
    table.classList.add("none")
})

cerrarMenu.addEventListener('click', () =>{
    nav.classList.remove("visible")
    table.classList.remove("none")
})