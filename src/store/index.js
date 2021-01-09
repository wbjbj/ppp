import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        messages: []
    },
    mutations: {
        addMessages(state, val) {
            state.messages = state.messages.concat(val)
        },
        updateMessage(state, val) {
            state.messages[val.index] = val.message
        },
        removeMessage(state, index) {
            state.messages.splice(index, 1)
        },
        changePosition(state, val) {
            state.messages[val.index].positionX = val.positionX
            state.messages[val.index].positionY = val.positionY
        }
    },
    actions: {},
    modules: {}
})