
// import { conexionAPI } from "./conexionApi";

// const formulario = document.querySelector("[data-formulario]");

// async function crearProducto(evento){

//     evento.preventDefault();

//     const nombre= document.querySelector("[data-nombre]").value;
//     const precio= document.querySelector("[data-precio]").value;
//     const imagen= document.querySelector("[data-imagen]").value;


//     try{
//         await conexionAPI.enviarProducto(nombre,precio,imagen);
        
//     }
//     catch(e){
//         alert(e)
//     }


        
    
// }

// formulario.addEventListener("submit",evento => crearProducto(evento));



import { conexionApi } from "./conexionApi.js";  // Asegúrate de que el nombre y la ruta sean correctos

const formulario = document.querySelector("[data-formulario]");
const limpiarBtn = document.querySelector("[data-clean]");



async function crearProducto(evento) {
    evento.preventDefault();

    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    //Validacion URL imagen
    if (!isValidImageUrl(imagen)) {
        alert("Por favor, ingrese una URL de imagen válida.");
        return;
    }

    try {
        await conexionApi.enviarProducto(nombre, precio, imagen,);
        alert("Producto agregado correctamente");
    } catch (e) {
        alert(e.message);
    }
}

function limpiarCampos() {
    document.querySelector("[data-nombre]").value = "";
    document.querySelector("[data-precio]").value = "";
    document.querySelector("[data-imagen]").value = "";
}

function isValidImageUrl(url) {
    // Expresión regular para verificar si la URL termina con una extensión de imagen o contiene patrones de servicios de imágenes conocidos
    return /\.(jpeg|jpg|gif|png|webp)$/i.test(url) || /(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))/i.test(url);
}



formulario.addEventListener("submit", crearProducto);
limpiarBtn.addEventListener("click", limpiarCampos);