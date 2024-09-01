let tareas = [];

function agregarTarea() {
    let nombre = prompt("Ingrese el nombre de la tarea:");
    let descripcion = prompt("Ingrese la descripción de la tarea:");
    let prioridad = prompt("Ingrese la prioridad de la tarea (baja, media, alta):");
    
    let nuevaTarea = {
        nombre: nombre,
        descripcion: descripcion,
        prioridad: prioridad,
        completada: false
    };
    tareas.push(nuevaTarea);
    console.log("Tarea agregada.");
}

function tareaCompleta() {
    let nombre = prompt("Ingrese el nombre de la tarea a marcar como completada:");
    let tarea = tareas.find(tarea => tarea.nombre === nombre);
    if (tarea) {
        tarea.completada = true;
        console.log(`Tarea "${nombre}" completada.`);
    } else {
        console.log(`Tarea "${nombre}" no encontrada.`);
    }
}

function buscarPorEstado() {
    let completadas = tareas.filter(tarea => tarea.completada === true);
    console.log("Tareas completadas:");
    completadas.forEach(tarea => console.log(`${tarea.nombre} - ${tarea.descripcion} - Prioridad: ${tarea.prioridad}`));
}

function buscarPorPrioridad() {
    let prioridad = prompt("Ingrese la prioridad para filtrar las tareas (baja, media, alta):");
    let filtradas = tareas.filter(tarea => tarea.prioridad === prioridad);
    console.log(`Tareas con prioridad "${prioridad}":`);
    filtradas.forEach(tarea => console.log(`${tarea.nombre} - ${tarea.descripcion} - Completada: ${tarea.completada}`));
}

function buscarPorNombre() {
    let nombre = prompt("Ingrese el nombre de la tarea a buscar:");
    let tarea = tareas.find(tarea => tarea.nombre === nombre);
    if (tarea) {
        console.log(`${tarea.nombre} - ${tarea.descripcion} - Prioridad: ${tarea.prioridad} - Completada: ${tarea.completada}`);
    } else {
        console.log(`Tarea "${nombre}" no encontrada.`);
    }
}

function listarTareas() {
    if (tareas.length === 0) {
        console.log("No hay tareas.");
        return;
    }
    console.log("Todas las tareas:");
    tareas.forEach(tarea => {
        console.log(`${tarea.nombre} - ${tarea.descripcion} - Prioridad: ${tarea.prioridad} - Completada: ${tarea.completada}`);
    });
}

function nombresDeTareas() {
    let nombres = tareas.map(tarea => tarea.nombre);
    console.log("Nombres de las tareas:");
    console.log(nombres);
}

function menu() {
    let opcion;
    do {
        opcion = prompt(`Seleccione una opción:
        1. Agregar tarea
        2. Marcar tarea como completada
        3. Buscar tareas completadas
        4. Buscar tareas por prioridad
        5. Buscar tarea por nombre
        6. Listar todas las tareas
        7. Obtener nombres de tareas
        8. Salir`);

        switch (opcion) {
            case '1':
                agregarTarea();
                break;
            case '2':
                tareaCompleta();
                break;
            case '3':
                buscarPorEstado();
                break;
            case '4':
                buscarPorPrioridad();
                break;
            case '5':
                buscarPorNombre();
                break;
            case '6':
                listarTareas();
                break;
            case '7':
                nombresDeTareas();
                break;
            case '8':
                console.log("Nos vemos!");
                break;
            default:
                console.log("Opcion no valida.");
                break;
        }
    } while (opcion !== '8');
}

menu();