# Proyecto de Gestión de Productos - Alura Latam Challenge

Este proyecto ha sido desarrollado como parte del Challenge de Alura Latam, utilizando HTML, CSS, JavaScript y Node.js para la creación de una aplicación web que permite la gestión de productos. La aplicación se conecta a una API simulada con `json-server`, donde se almacenan los datos de los productos en un archivo `db.json`.

## Funcionalidades

1. **Agregar Productos (POST)**: La aplicación permite agregar nuevos productos mediante un formulario. Los datos ingresados se envían a la API utilizando el método `POST`.
2. **Listar Productos (GET)**: Los productos se obtienen desde la API almacenada en el archivo `db.json` utilizando el método `GET` y se muestran en una lista de tarjetas en la interfaz.
3. **Eliminar Productos (DELETE)**: Los productos se pueden eliminar de la lista haciendo clic en el icono de eliminar. Esto se realiza mediante el método `DELETE` en la API.

## Configuración del Entorno

Para ejecutar este proyecto y conectarlo a la API simulada, sigue los siguientes pasos:

1. Clona este repositorio en tu máquina local:
    ```sh
    git clone https://github.com/tu-usuario/nombre-del-repositorio.git
    cd nombre-del-repositorio
    ```

2. Instala `json-server` globalmente si no lo tienes instalado:
    ```sh
    npm install -g json-server
    ```

3. Inicia el servidor JSON desde el directorio del proyecto con el siguiente comando:
    ```sh
    npx json-server --watch db.json --port 3001
    ```

## Estructura del Proyecto

El proyecto está estructurado de la siguiente manera:

- **index.html**: Archivo principal de la interfaz de usuario.
- **styles.css**: Archivo de estilos CSS para la interfaz.
- **app.js**: Lógica principal de la aplicación en JavaScript.
- **conexionApi.js**: Módulo para manejar las solicitudes a la API (listar, agregar y eliminar productos).
- **db.json**: Archivo de base de datos que contiene los datos de los productos.

## Descripción de los Archivos JavaScript

### conexionApi.js

Este archivo contiene las funciones para interactuar con la API:

- `listarProductos()`: Obtiene todos los productos desde la API.
- `enviarProducto(nombre, precio, imagen)`: Envía un nuevo producto a la API.
- `eliminarProducto(id)`: Elimina un producto de la API utilizando su ID.

### app.js

Este archivo contiene la lógica para manejar los eventos de la interfaz de usuario, incluyendo:

- Crear y mostrar tarjetas de productos.
- Agregar nuevos productos mediante el formulario.
- Eliminar productos al hacer clic en el icono de eliminar.

## Uso de la Aplicación

1. **Agregar un Producto**: Completa el formulario con el nombre, precio y URL de la imagen del producto y haz clic en "Enviar". El producto se agregará a la lista y se almacenará en `db.json`.

2. **Listar Productos**: Los productos se listan automáticamente al cargar la página, obteniendo los datos desde la API.

3. **Eliminar un Producto**: Haz clic en el icono de eliminar en la tarjeta del producto que deseas eliminar. El producto se eliminará de la lista y de `db.json`.

## Notas

- Asegúrate de que el servidor JSON esté corriendo antes de interactuar con la aplicación.
- Si necesitas restablecer los datos, puedes editar o reemplazar el archivo `db.json` manualmente.
