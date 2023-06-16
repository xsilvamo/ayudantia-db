const url = 'http://localhost:3000/proyecto/';
const contenedor = document.querySelector('tbody');
let resultados = '';

const modalProyecto = new bootstrap.Modal(document.getElementById('modalCrud'));
const formProyecto = document.querySelector('form');
const Id_proyecto = document.getElementById('id_proyecto');
const Nombre = document.getElementById('nombre');
const Metraje = document.getElementById('metraje');
const Comuna = document.getElementById('comuna');
const Tipo = document.getElementById('tipo');

var opcion = '';

botonCrear.addEventListener('click', () => {
    Nombre.value = '';
    Metraje.value = '';
    Comuna.value = '';
    Tipo.value = '';
    Id_proyecto.value = '';
    modalProyecto.show();
    opcion = 'crear';
});

const mostrar = (proyectos) => {
    proyectos.forEach(proyecto => {
        resultados += 
        `<tr>
            <td>${proyecto.id_proyecto}</td>
            <td>${proyecto.nombre}</td>
            <td>${proyecto.metraje}</td>
            <td>${proyecto.comuna}</td>
            <td>${proyecto.tipo}</td>
            <td class="text-center"><a class="btnEditar btn btn-primary">Editar</a><a class="btnBorrar btn btn-danger">Borrar</a></td>
        </tr>`
    })
    contenedor.innerHTML = resultados;
}

// Procedimiento Mostrar
fetch(url)
    .then(res => res.json())
    .then(data => mostrar(data))
    .catch(error => console.log(error));



