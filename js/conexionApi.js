


async function listarProductos() {
    const conexion = await fetch("http://localhost:3001/productos");
    const conexionConvertida = await conexion.json();  
    return conexionConvertida;
}

async function enviarProducto(nombre, precio, imagen) {
    const conexion = await fetch("http://localhost:3001/productos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            nombre: nombre,
            precio: `$${precio}`,
            imagen: imagen
        })
    });
    const conexionConvertida = await conexion.json(); 

    if (!conexion.ok) {
        throw new Error("Ha ocurrido un error al subir el producto");
    }

    return conexionConvertida;
}


async function eliminarProducto(id) {
    const conexion = await fetch(`http://localhost:3001/productos/${id}`, {
        method: "DELETE",
    });

    if (!conexion.ok) {
        throw new Error("Ha ocurrido un error al eliminar el producto");
    }
}


export const conexionApi = {
    listarProductos,
    enviarProducto,
    eliminarProducto
};
