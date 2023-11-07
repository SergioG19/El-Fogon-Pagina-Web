# El Fogón - Página Web

Este proyecto es una pequeña landing page para un restaurante que incluye animaciones CSS para un aspecto elegante. Además, cuenta con una sección de contacto que se conecta con el backend a través de la API definida en el archivo `api.js`.

## Instrucciones de Instalación

1. Instala todas las dependencias utilizando el siguiente comando:
    ```bash
    npm install
    ```

2. Ejecuta el servidor con el siguiente comando para mantenerlo iniciado durante el desarrollo:
    bash
    npm run dev

## Estructura del Proyecto

/
|-- backend/
|   |-- src/
|       |-- controllers/
|           |-- contact.js
|       |-- models/
|           |-- contact.js
|       |-- routes/
|           |-- contact.js
|       |-- app.js
|       |-- database.js
|       |-- server.js
|   |-- package.json
|   |-- package-lock.json
|   |-- .env
|-- index.html
|-- api.js
|-- style.css
|-- script.js
|-- README.md

- backend/: Contiene los archivos del servidor backend, como controladores, modelos y rutas.
- index.html: Archivo principal de la landing page.
- api.js: Archivo que define la interfaz para la comunicación con el backend.
- style.css: Archivo de estilos para la página web.
- script.js: Archivo de scripts para funcionalidades adicionales en el lado del cliente.

## Uso

Una vez que el servidor esté en funcionamiento, accede a la landing page para experimentar las animaciones y asegurarte de que la sección de contacto funcione correctamente.

## Contribución

Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un fork del proyecto.
2. Crea una rama para tu nueva característica (`git checkout -b nueva-caracteristica`).
3. Realiza los cambios y haz commit (`git commit -am 'Añade nueva característica'`).
4. Haz push a la rama (`git push origin nueva-caracteristica`).
5. Abre una solicitud de extracción.
