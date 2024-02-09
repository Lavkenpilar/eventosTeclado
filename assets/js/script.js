
document.addEventListener ("keydown", (event)=>{
    if (event.key ==="a" || event.key ==="A") {
        agregarElemento ()
    } else if (event.key === "d" || event.key === "D"){
        eliminarElemento ()
    }

})
const agregarElemento = ()=>{
    const contenedor = document.getElementById ("contenedor")
    const nuevoElemento = document.createElement("div")
    nuevoElemento.textContent = "Elemento agregado"
    contenedor.appendChild (nuevoElemento)

}

const eliminarElemento = ()=>{
contenedor = document.getElementById ("contenedor")
const elementos = contenedor.querySelectorAll("div")
if (elementos.length > 0){
    contenedor.removeChild (elementos [elementos.length - 1])
}
}

