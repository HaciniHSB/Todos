import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    todos: [],
  },

  getters: {
    getTodos: (state) => (slef) => {
      slef.$api
        .get("/todo/todos")
        .then((response) => {
          state.todos = response.data;
          console.log("hhh");
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          return state.todos;
        });
    },
    test: (state) => (self) => {
      return getTodos(state, self);
    },
  },

  mutations: {
    todoscount(state) {
      state.todosless++;
    },
  },
});

function getTodos(state, self) {
  self.$api
    .get("/todo/todos")
    .then((response) => {
      state.todos = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}
