document.addEventListener('DOMContentLoaded', function() {
    // Datos de ejemplo para los equipos de fútbol, incluyendo las rutas de las imágenes de los logos
    const equipos = [
        { nombre: "Independiente", pais: "Argentina", entrenador: "Carlos Tévez", logo: "fotos escudos/independiente.jpeg", copas: 18},
        { nombre: "Boca Juniors", pais: "Argentina", entrenador: "Diego Martínez", logo: "fotos escudos/boca.jpeg", copas: 13},
        { nombre: "River Plate", pais: "Argentina", entrenador: "Martín Demichelis", logo: "fotos escudos/river.jpeg", copas: 12},
        { nombre: "Racing Club", pais: "Argentina", entrenador: "Gustavo Costas", logo: "fotos escudos/racing.jpeg", copas: 9},
        { nombre: "San Lorenzo", pais: "Argentina", entrenador: "Eduardo Coudet", logo: "fotos escudos/san lorenzo.jpeg", copas: 6},
        { nombre: "Vélez Sarsfield", pais: "Argentina", entrenador: "Mauricio Pellegrino", logo: "fotos escudos/velez.jpeg", copas: 5},
        { nombre: "Rosario Central", pais: "Argentina", entrenador: "Leonardo Astrada", logo: "fotos escudos/rosario.jpeg", copas: 4},
        { nombre: "Newell's Old Boys", pais: "Argentina", entrenador: "Diego Dabove", logo: "fotos escudos/newells.jpeg", copas: 6},
        { nombre: "Estudiantes", pais: "Argentina", entrenador: "Pablo Guede", logo: "fotos escudos/estudiantes.jpeg", copas: 5},
        { nombre: "Lanús", pais: "Argentina", entrenador: "Luis Zubeldía", logo: "fotos escudos/lanus.jpeg", copas: 3},
        { nombre: "Banfield", pais: "Argentina", entrenador: "Julio Falcioni", logo: "fotos escudos/banfield.jpeg", copas: 1},
        { nombre: "Gimnasia y Esgrima La Plata", pais: "Argentina", entrenador: "Leandro Somoza", logo: "fotos escudos/gimnasia.jpeg", copas: 2}
        // Agrega más equipos según sea necesario
    ];

        // Crear una tabla HTML
        const tablaEquipos = document.createElement('table');
        tablaEquipos.classList.add('table'); // Agregar la clase 'table' de Bootstrap a la tabla
    
        // Crear la sección de encabezado de la tabla
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        const headers = ['Foto del Logo', 'Equipo', 'País', 'Entrenador', 'Copas']; // Títulos de las columnas
    
        // Crear celdas de encabezado para cada título de columna
        headers.forEach(headerText => {
            const th = document.createElement('th');
            th.textContent = headerText;
            headerRow.appendChild(th);
        });
    
        // Agregar la fila de encabezado a la sección de encabezado de la tabla
        thead.appendChild(headerRow);
        tablaEquipos.appendChild(thead);
    
        // Crear la sección de cuerpo de la tabla
        const tbody = document.createElement('tbody');
    
        // Iterar sobre cada equipo y crear una fila en la tabla para cada uno
        equipos.forEach((equipo, index) => {
            const row = document.createElement('tr'); // Crear una nueva fila
    
            // Crear celda para la imagen del logo
            const imgCell = document.createElement('td');
            const img = document.createElement('img');
            img.src = equipo.logo; // Establecer la ruta de la imagen del logo
            img.alt = equipo.nombre; // Establecer el texto alternativo de la imagen
            img.width = 100; // Establecer el ancho de la imagen
            img.height = 100; // Establecer la altura de la imagen
            imgCell.appendChild(img); // Agregar la imagen a la celda
            row.appendChild(imgCell); // Agregar la celda a la fila
    
            // Crear celdas para el nombre del equipo, país, entrenador y copas
            const equipoData = [equipo.nombre, equipo.pais, equipo.entrenador, equipo.copas];
            equipoData.forEach(text => {
                const td = document.createElement('td');
                td.textContent = text; // Establecer el texto de la celda
                row.appendChild(td); // Agregar la celda a la fila
            });
    
            // Agregar la fila a la sección de cuerpo de la tabla
            tbody.appendChild(row);
        });
    
        // Agregar la sección de cuerpo de la tabla a la tabla
        tablaEquipos.appendChild(tbody);
    
        // Obtener el contenedor donde se agregará la tabla y agregar la tabla al contenedor
        const container = document.querySelector('.container');
        container.appendChild(tablaEquipos);
    });