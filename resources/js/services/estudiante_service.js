import {http} from './http_service';

export function getEstudiantes()
{
    return http().get('/getEstudiantes')
}
export function createEstudiante(data){
    return http().post('/estudiantes',data);
}
export function loadEstudiante(id){
    return http().get(`getCarreraEstudiante/${id}`);
}
export function getHistorialEstudiante(id){
    return http().get(`getHistorialEstudiante/${id}`)
}
export function loadEstudiantes(carrera,page){
    return http().get(`filtroEstudianteDash?carrera=${carrera}&page=${page}`);
}
export function loadEstudianteSearch(search){
    return http().get(`estudiantes?search=${search}`);
}
export function loadEstudianteInactivos(page){
    return http().get(`estudiantesInactivos?page=${page}`);
}
export function loadEstudianteInactivosSearch(search){
    return http().get(`estudiantesInactivos?search=${search}`);
}
export function desactivarEstudiante(id){
    return http().put(`desactivar/${id}`);
}
export function activarEstudiante(id){
    return http().put(`activar/${id}`);
}
export function updateEstudiante(id, data){
    return http().post(`estudiantes/${id}`,data);
}
export function loadMore(nextPage) {
    return http().get(`estudiantes?page=${nextPage}`);
}

export function observacion(data){
    return http().post('/observaciones', data)
}
//asignaciones
export function getEstudianteAsignacion(id){
    return http().get(`getEstudianteAsignacion/${id}`);
}
//solicitud
export function getEstudianteSolicitud(id){
    return http().get(`getEstudianteSolicitud/${id}`)
}

export function getEstudiantesP1(id){
    return http().get(`getEstudiantesP1/${id}`);
}
//panel 2

export function getEstudiantesP2(id){
    return http().get(`getEstudiantesP2/${id}`);
}

export function getEstudiantesp3(id){
    return http().get(`getEstudiantesp3/${id}`)
}

//dashboard filtro
export function filtroEstudianteDash(carrera,search) {
    return http().get(`filtroEstudianteDash/?carrera=${carrera}&search=${search}`);
}

