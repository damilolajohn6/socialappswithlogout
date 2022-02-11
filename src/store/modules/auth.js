import { RepositoryFactory as Repo } from "../../repository/RepositoryFactory";
const PR = Repo.get('request');

const state = {
    user: JSON.parse(localStorage.getItem('user')),
    token: JSON.parse(localStorage.getItem('token')),
    reg: JSON.parse(localStorage.getItem('Reg_info'))
}

const getters = {
    getUser(state){
        return state.user = JSON.parse(localStorage.getItem('SM_user'));
    },
}

const mutations = {
    register(state, data) {
        state.reg = data;
    },
    users(state,data){
        state.user = data.user;
        state.token = data.token;
    },
    logout(state) {
        state.token = null;
        state.user = {};
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }
}

const actions = {
    async register({ commit }, credentials) {
        // console.log(credentials)
        const res = await PR.register(credentials)
            .catch(function (error) {


                // console.log(error.response)
                return error.response

            }); 

        commit('register', res);

        // console.log(res)
        return res;




    },
    async login({ commit }, credentials) {
        // console.log(credentials)
        const res = await PR.login(credentials)
            .catch(function (error) {


                // console.log(error.response)
                return error.response

            });

        if (res.user) {
            localStorage.setItem('token', JSON.stringify(res.token));
            localStorage.setItem('user', JSON.stringify(res.user));
            commit('users', res);
        }
        // console.log(res)
        return res;

     
        

    },
    logout({ commit }) {
        //console.log('alert')
        commit('logout');
        return true;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}