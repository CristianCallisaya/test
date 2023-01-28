import * as actions from '../../action-types';
import * as mutations from '../../mutation-types';

export default {

    [actions.GET_DOCENTE]({ commit }, data){
        commit(mutations.SET_DOCENTE, data);
    },
    [actions.GET_DOCENTE_P1]({ commit }, data){
        commit(mutations.SET_DOCENTE_P1, data);
    },

}
