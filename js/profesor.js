class profesores{
    constructor(/*id*/ nombre, apellidoP, apellidoM, numero, correo){
        /*this.id = id*/
        this.nombre = nombre
        this.apellidoP = apellidoP
        this.apellidoM = apellidoM
        this.numero = numero
        this.correo = correo
    }
}

const profes = []

const formCreate = document.getElementById('form-profesor')
const nombreProf = document.getElementById('nombre-prof')
const apellidoPProf = document.getElementById('apellidoP')
const apellidoMProf = document.getElementById('apellidoM')
const numeroProf = document.getElementById('numero-prof')
const correoProf = document.getElementById('correo-prof')
const tableProf = document.querySelector('.tbody-prof')

formCreate.addEventListener('submit', (e) =>{
    e.preventDefault()

    const profe = new profesores(nombreProf.value, apellidoPProf.value, apellidoMProf.value, numeroProf.value, correoProf.value)

    profes.push(profe)
    if(nombreProf.value == "" || apellidoPProf.value == "" || apellidoMProf.value == "" || numeroProf.value == "" 
    || correoProf.value == ""){
        alert("Ingrese todos los datos")
    }
    else{
    tableProf.innerHTML += `
    <tr>
        <td>${nombreProf.value}</td>
        <td>${apellidoPProf.value}</td>
        <td>${apellidoMProf.value}</td>
        <td>${numeroProf.value}</td>
        <td>${correoProf.value}</td>
    </tr>
    `
}
})

console.log(profes)


