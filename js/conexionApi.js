// async function listarProductos(){
//     const conexion = await fetch("http://localhost:3001/productos");
//     const conexionConvertida = conexion.json();

//     // console.log(conexionConvertida);
//     return conexionConvertida;
// }
// async function enviarProducto(nombre,precio,imagen){
//     const conexion = await fetch("http://localhost:3001/productos",{
//         method:"POST",
//         headers:{"Content-type":"application/json"},
//         body:JSON.stringify({
//             nombre:nombre,
//             precio:`$ ${precio}`,
//             imagen:imagen
//         })
//     })
//     const conexionConvertida= conexion.json();

//     if(!conexion.ok){
//         throw new Error("Ha ocurrido un error al subir el producto");
//     }

//     return conexionConvertida;
// }


// export const conexionApi={
//     listarProductos,enviarProducto
// }




async function listarProductos() {
    const conexion = await fetch("http://localhost:3001/productos");
    const conexionConvertida = await conexion.json();  // Asegurarse de usar await aquí
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
    const conexionConvertida = await conexion.json();  // Asegurarse de usar await aquí

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
