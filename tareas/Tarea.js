const addButton = document.getElementById('agregarTarea'); // Obtener el botón "Añadir Tarea"

const pendientesColumn = document.getElementById('pendientes'); // Obtener la columna "Pendientes"

const procesoColumn = document.getElementById('proceso'); // Obtener la columna "En Proceso"

const finalizadasColumn = document.getElementById('finalizadas'); // Obtener la columna "Finalizadas"

addButton.addEventListener('click', () => {
    // Crear una nueva tarea
    const newTask = document.createElement('div');
    newTask.classList.add('task', 'programada');
    newTask.draggable = true;

    const statusBar = document.createElement('div');
    statusBar.classList.add('status-bar');

    const taskContent = document.createElement('p');
    taskContent.classList.add('tex');
    taskContent.textContent = 'Nueva Tarea';

    
    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('cajaEliminarEditar');

    const papeleraButton = document.createElement('button');
    papeleraButton.id = 'papelera';
    papeleraButton.innerHTML = '<img src="img/papelera-de-reciclaje.png" alt="papelera">';
    
    // Agrega un evento clic al botón de papelera para eliminar la tarea
    papeleraButton.addEventListener('click', () => {
        // Eliminar la tarea de su columna actual
        if (newTask.parentNode === pendientesColumn) {
            pendientesColumn.removeChild(newTask);
        } else if (newTask.parentNode === procesoColumn) {
            procesoColumn.removeChild(newTask);
        } else if (newTask.parentNode === finalizadasColumn) {
            finalizadasColumn.removeChild(newTask);
        }
    });

    const notaButton = document.createElement('button');
    notaButton.classList.add('nota'); // Agrega la clase "nota" al botón
    notaButton.innerHTML = '<img src="img/nota.png" alt="nota">';
    
    //Agrega un evento clic al botón de notas para habilitar la edición del texto de la tarea
    notaButton.addEventListener('click', () => {
        const editableContent = document.createElement('textarea');
        editableContent.value = taskContent.textContent;

        // Escuchar el evento "blur" para guardar los cambios cuando se pierde el foco
        editableContent.addEventListener('blur', () => {
            // Actualizar el contenido de la tarea con el nuevo texto
            taskContent.textContent = editableContent.value;
            editableContent.parentNode.replaceChild(taskContent, editableContent);
        });

        // Reemplazar el contenido de la tarea con el área de texto editable
        taskContent.parentNode.replaceChild(editableContent, taskContent);
        editableContent.focus(); // Enfocar el área de texto editable
    });

    buttonsContainer.appendChild(papeleraButton);
    buttonsContainer.appendChild(notaButton);

    newTask.appendChild(statusBar);
    newTask.appendChild(taskContent);
    newTask.appendChild(buttonsContainer);

    // Agregar la nueva tarea a la columna "Pendientes"
    pendientesColumn.appendChild(newTask);

    // Agregar un evento dragstart para permitir que la tarea se mueva
    newTask.addEventListener('dragstart', () => {
        newTask.classList.add('dragging');
    });

    newTask.addEventListener('dragend', () => {
        newTask.classList.remove('dragging');
    });
});


