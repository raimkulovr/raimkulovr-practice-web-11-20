import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        notes: [
            {
              title: '1st Note',
              descr: 'Description for 1st note',
              date: new Date(Date.now()).toLocaleString(),
              priority: 'ordinary'
            },
            {
              title: '2nd Note',
              descr: 'Description for 2nd note',
              date: new Date(Date.now()).toLocaleString(),
              priority: 'medium'
            },
            {
              title: '3rd Note',
              descr: 'Description for 3rd note',
              date: new Date(Date.now()).toLocaleString(),
              priority: 'important'
            }
        ]
    },
    mutations: {
        addNote (state, note) {
            state.notes.push(note)
        }
    },
    actions: {
        addNote({commit}, note){
            commit('addNote', note)                   
        },
        
    },
    getters: {
        getNotes(state){
            return state.notes

        }
    },
})