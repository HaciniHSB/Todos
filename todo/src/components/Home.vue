<template>
  <div class="container-fluid">
    <h1>{{ msg }}</h1>
    <div class="row justify-content-center align-items-center">
      <div class="col-6">
        <AddTodo v-on:postTodo="getTodos()" />
      </div>
    </div>

    <div class="row justify-content-center align-items-center">
      <div class="col-5">
        <ul>
        <Todo v-for="todo in todos" :key="todo.id" v-bind:todo="todo" v-on:deleteTodo="getTodos()" />
      </ul>
      </div>
      
    </div>
  </div>
</template>

<script>
import AddTodo from "./AddTodo";
import Todo from "./Todo";
export default {
  name: "HelloWorld",
  data: function() {
    return {
      todos: null
    };
  },
  props: {
    msg: String
  },
  components: {
    AddTodo,
    Todo
  },
  methods: {
    getTodos: function() {
      this.$api
        .get("/todo/todos")
        .then(response => {
          this.todos = response.data;
        })
        .catch(error => {
          console.log(error);
        });
        
    }
  },
  beforeMount: function() {
    this.getTodos();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
