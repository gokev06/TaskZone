const dropdown = document.getElementById('dropdown');
const mostrarFormButton = document.getElementById('mostrarForm');
const formAgregar = document.getElementById('formAgregar');
const nuevaOpcionInput = document.getElementById('nuevaOpcion');
const agregarButton = document.getElementById('agregar');
const contenidoDiv = document.getElementById('contenido');
const eliminarButton = document.getElementById('eliminar');

// Cargar opciones del localStorage al menú desplegable

const opcionesGuardadas = JSON.parse(localStorage.getItem('opciones')) || {};
for (const opcion in opcionesGuardadas) {
    const option = document.createElement('option');
    option.value = opcion;
    option.textContent = opcion;
    dropdown.appendChild(option);
        dropdown.style.width = '100px';
dropdown.style.height = '30px';
dropdown.style.background = 'white'; 

}



// Maneja el cambio en el menú desplegable
dropdown.addEventListener('change', () => {
    const selectedOption = dropdown.value;

    // Actualiza el contenido en función de la selección
    contenidoDiv.textContent = opcionesGuardadas[selectedOption];

});

// Maneja el clic en el botón "Mostrar Formulario"
mostrarFormButton.addEventListener('click', () => {
    formAgregar.style.display = 'block'; // Muestra el formulario
});

// Maneja el clic en el botón "Agregar"
agregarButton.addEventListener('click', () => {
    const nuevaOpcion = nuevaOpcionInput.value.trim();

    if (nuevaOpcion !== '') {
        // Agrega la nueva opción al menú desplegable
        const option = document.createElement('option');
        option.value = nuevaOpcion;
        option.textContent = nuevaOpcion;
        dropdown.appendChild(option);

        // Guarda el contenido correspondiente en el localStorage
        opcionesGuardadas[nuevaOpcion] = `Este es el contenido de ${nuevaOpcion}.`;
        localStorage.setItem('opciones', JSON.stringify(opcionesGuardadas));

        // Limpiar el campo de entrada
        nuevaOpcionInput.value = '';

        // Actualiza el contenido si la nueva opción es seleccionada
        if (dropdown.value === nuevaOpcion) {
            contenidoDiv.textContent = opcionesGuardadas[nuevaOpcion];
        }

        // Oculta el formulario después de agregar
        formAgregar.style.display = 'none';
    }
});

// Maneja el clic en el botón "Eliminar"
eliminarButton.addEventListener('click', () => {
    const selectedOption = dropdown.value;
    
    // Elimina la opción seleccionada del menú desplegable
    if (selectedOption) {
        dropdown.remove(dropdown.selectedIndex);
        
        // Elimina el contenido correspondiente del localStorage
        delete opcionesGuardadas[selectedOption];
        localStorage.setItem('opciones', JSON.stringify(opcionesGuardadas));
        
        // Limpia el contenido mostrado
        contenidoDiv.textContent = '';
    }
});
