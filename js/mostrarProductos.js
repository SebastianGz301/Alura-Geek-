



import { conexionApi } from "./conexionApi.js";  

const productos = document.querySelector("[data-productos]");

function crearCard(id,nombre, precio, imagen) {
    const producto = document.createElement("div");
    producto.className = "card_producto";
    producto.innerHTML = `
        <img class="img_producto" src="${imagen}" alt="imagen Producto">
        <p class="descripcion">${nombre}</p>
        <p class="precio">${precio}</p>
        <img class="delete_icon" src="/assets/Vector.svg" alt="Delete" data-delete="${id}">`;


        const deleteIcon = producto.querySelector("[data-delete]");
        deleteIcon.addEventListener("click", async () => {
            try {
                await conexionApi.eliminarProducto(id);
                producto.remove();
            } catch (error) {
                alert("ERROR no se pudo eliminar el producto");
            }
        });


    
    return producto;
}

async function listarProductos() {
    try {
        const listAPI = await conexionApi.listarProductos();
        listAPI.forEach(producto => productos.appendChild(crearCard(producto.id,producto.nombre, producto.precio, producto.imagen)));
    } catch (error) {
        alert("ERROR no se pudo conectar con la API");
    }
}




listarProductos();
