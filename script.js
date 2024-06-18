function descargarPagina() {
    var zip = new JSZip();

    // Obtener el contenido actualizado de todos los elementos editables
    var titulo = document.getElementById('titulo').innerText;
    var menu = document.getElementById('menu').innerHTML;
    var acerca = document.getElementById('acerca').innerHTML;
    var servicios = document.getElementById('servicios').innerHTML;
    var contacto = document.getElementById('contacto').innerHTML;

    // Generar el contenido HTML actualizado
    var htmlContent = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${titulo}</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        /* Estilos específicos que pueden requerir modificación */
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            padding: 0;
            position: relative;
            min-height: 100vh;
        }

        header {
            background-color: #333;
            color: #fff;
            padding: 10px 0;
            text-align: center;
        }

        h1 {
            font-size: 2em;
        }

        nav {
            text-align: center;
            margin-bottom: 20px;
        }

        nav a {
            text-decoration: none;
            color: #fff;
            margin: 0 10px;
            display: inline-block;
            padding: 5px 10px;
            border-radius: 5px;
            background-color: #007bff;
        }

        nav a:hover {
            background-color: #0056b3;
        }

        section {
            margin-bottom: 20px;
        }

        footer {
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 10px 0;
            position: fixed;
            bottom: 0;
            width: 100%;
        }
    </style>
</head>
<body>
    <header>
        <h1>${titulo}</h1>
        <nav>${menu}</nav>
    </header>

    <section id="acerca">${acerca}</section>

    <section id="servicios">${servicios}</section>

    <section id="contacto">${contacto}</section>

    <footer>
        <p>&copy; 2024 Mi Empresa - Todos los derechos reservados</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>`;

    // Agregar archivos al zip
    zip.file("index.html", htmlContent);
    zip.file("styles.css", `/* Aquí van los estilos CSS de tu página */`);
    zip.file("script.js", `// Aquí va el script JavaScript de tu página`);

    // Generar el archivo zip y descargarlo
    zip.generateAsync({ type: "blob" }).then(function (content) {
        // Crear elemento <a> para descargar el archivo zip
        var a = document.createElement('a');
        a.href = URL.createObjectURL(content);
        a.download = "mi-sitio-web.zip";
        a.click();

        // Restaurar la edición de los elementos en la página original
        document.getElementById('titulo').setAttribute('contenteditable', 'true');
        document.getElementById('menu').setAttribute('contenteditable', 'true');
        document.getElementById('acerca').setAttribute('contenteditable', 'true');
        document.getElementById('servicios').setAttribute('contenteditable', 'true');
        document.getElementById('contacto').setAttribute('contenteditable', 'true');
    });

    // Deshabilitar la edición de todos los elementos en la página original
    document.getElementById('titulo').removeAttribute('contenteditable');
    document.getElementById('menu').removeAttribute('contenteditable');
    document.getElementById('acerca').removeAttribute('contenteditable');
    document.getElementById('servicios').removeAttribute('contenteditable');
    document.getElementById('contacto').removeAttribute('contenteditable');
}
