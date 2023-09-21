procesoColumn.addEventListener('dragover', e => {
    e.preventDefault();
    const task = document.querySelector('.dragging');
    if (task) {
        // Permitir mover la tarea a la columna "En Proceso"
        procesoColumn.appendChild(task);
        task.classList.remove('programada'); // Eliminar la clase "programada"
        task.classList.add('en-proceso'); // Agregar la clase "en-proceso"
    }
});

finalizadasColumn.addEventListener('dragover', e => {
    e.preventDefault();
    const task = document.querySelector('.dragging');
    if (task && task.classList.contains('en-proceso')) {
        // Permitir mover la tarea a la columna "Finalizadas" solo si está en "En Proceso"
        finalizadasColumn.appendChild(task);
        task.classList.remove('en-proceso'); // Eliminar la clase "en-proceso"
        task.classList.add('finalizada'); // Agregar la clase "finalizada"
    }
 });