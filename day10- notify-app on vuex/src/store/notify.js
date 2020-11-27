
import loadMore from '../assets/js/loadMore.js'
import axios from 'axios'

export default{
    state: {
        messages: [],
        messagesMain: []
    },
    mutations: {
        setMessage (state, payload) {
            state.messages = payload
        },
        setMessageMain (state, payload) {
            state.messagesMain = payload
        },
        loadMessages(state, payload) {
            state.messages = [...state.messages, ...payload]
        }
    },
    actions: {
        setMessage({commit}, payload) {
            commit('setMessage', payload)
        },
        setMessageMain({commit}, payload) {
            commit('setMessageMain', payload)
        },
        loadMessages({commit, getters}){
            let res = getters.getMessageFilter
            commit('loadMessages', loadMore(res))
        },
        getNotify({commit}){
            
            axios
              .get('https://tocode.ru/static/c/vue-pro/notifyApi.php')
              .then(response=>{
                let res = response.data.notify,
                  messages= [],
                  messagesMain= [];
      
                  //filter
                  for(let i=0; i<res.length; i++){
                    if(res[i].main) messages.push(res[i])
                      else messagesMain.push(res[i])
                  }
                  this.dispatch('setMessage', messages)
                  this.dispatch('setMessageMain', messagesMain)
     
              })
              
          }
        
        
    },
    getters: {
        getMessage(state){
            return state.messages
        },
        getMessageFilter(state){
            return state.messagesMain.filter(mes => {
                return mes.main ===false
            })
        },
        getMessageMain(state){
            return state.messagesMain
        }
    },
}