import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        login: true
    },
    mutations: {
        loginOn(state) {
            state.login = true
        },
        loginOut(state){
            state.login = false
        }
    },
    actions: {},
    modules: {}
})