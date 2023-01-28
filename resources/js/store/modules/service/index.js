import * as auth from '../../../services/auth_service'
const state = {
    apiURL: 'http://localhost:8000/api',
        serverPath: 'http://localhost:8000'
},
mutations = {
    authenticate(state, payload) {
        state.isLoggedIn = auth.isLoggedIn();
        if (state.isLoggedIn) {
            state.profile = payload;
        } else {
            state.profile = {};
        }
    }
},
actions = {
    authenticate(context, payload) {
        context.commit('authenticate', payload);
    }
}

export default {
    state,
    mutations,
    actions
}