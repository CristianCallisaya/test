import {http} from './http_service';

export function createDocente(data){
    return http().post('/docentes',data);
}

export function loadDocente(carrera,page){
    return http().get(`filtroDocente?carrera=${carrera}&page=${page}`);
}
export function loadDocentes(id){
    return http().get(`getCarreraDocente/${id}`);
}
export function loadDocenteSearch(carrera,search){
    return http().get(`filtroDocente?carrera=${carrera}&search=${search}`);
}
export function loadDocenteInactivosSearch(search){
    return http().get(`docentesInactivados?search=${search}`);
}
export function loadDocentesInactivos(page){
    return http().get(`docentesInactivados?page=${page}`);
}
export function desactivarDocente(id){
    return http().put(`desactivarDocente/${id}`);
}
export function activarDocente(id){
    return http().put(`activarDocente/${id}`);
}

export function updateDocente(id, data){
    return http().post(`docentes/${id}`,data);
}
export function getHistorialDocente(id){
    return http().get(`getHistorialDocente${id}`);
}
//filtros paneles
export function filtroDocentePrimerPanel(id){
    return http().get(`filtroDocentePrimerPanel/${id}`);
}
export function filtroDocenteSegundoPanel(id){
    return http().get(`filtroDocenteSegundoPanel${id}`);
}
export function filtroDocenteTercerPanel(id){
    return http().get(`filtroDocenteTercerPanel${id}`);
}