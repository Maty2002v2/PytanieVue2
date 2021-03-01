import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
    lol: 1
  },
  getters: {
    donetasksCompl: state => {
      return state.tasks.filter(task => task.wykonano == 'tak');
    }
  },
  mutations: {
    setTasks: (state, tasks) => state.tasks = tasks,
    lol: (state) => state.lol = 1,
  },
  actions: {
    fetchTasks({ commit }) {
      axios.get('http://localhost:3000/all')
        .then(res => commit('setTasks', res.data))
    },
    addTask({ commit }) {
      axios.post('http://localhost:3000')
        .then(res => commit('setTasks', res.data))
    },
    updatedTask({ commit }, task) {
      axios.put('http://localhost:3000', task)
        .then(res => console.log(res))
        commit('lol')
    },

  },
  modules: {
  }
})
