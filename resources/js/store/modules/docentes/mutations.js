import * as mutations from '../../mutation-types';

export default {
    [mutations.SET_DOCENTE](state, data){
        state.docentes = data;
    },
    [mutations.SET_DOCENTE_P1](state, data){
        state.docenteP1 = data;
    },
}