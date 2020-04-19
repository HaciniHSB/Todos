import Vue from "vue";
import Vuex from "vuex";
import axios from "./axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    todos: [],
  },
  getters: {
    getCount: (state) => {
      return state.count + 9;
    },
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    getAllTodos: (state) => {
      axios
        .get("/todo/todos")
        .then((response) => {
          state.todos = response.data;
          console.log(state.todos);
        })
        .catch((error) => {
          console.log(error);
        });
      return state.todos;
    },
  },
});
