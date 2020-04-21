import Vue from "vue";
import Vuex from "vuex";
import {getAllTodos,ValidateTodo} from '../Repositories/TodoRepository'
Vue.use(Vuex);

export default new Vuex.Store({
  //-----------Configuration------//
  strict : true,
  //-----------States-------------// 
  state: {
    todos: [],
  },
  //-----------Getters-------------// 
  getters: {
    TodosCount: (state) => {
      return state.todos.filter(todo=>todo.state===0).length;
    },
  },
  //-----------Mutations-------------// 
  mutations: {
    injectTodos (state,payload)  {
      state.todos = payload;
      return state.todos;
    },
  },
   //-----------Actions-------------// 
   actions : {
     async getAllTodos (context) {
      context.commit('injectTodos',await getAllTodos());
     },
     async ValidateTodo (context,payload) {
      await ValidateTodo(payload).then( ()=>{
        context.dispatch('getAllTodos')
      }
      );
      
     }
   }
});
