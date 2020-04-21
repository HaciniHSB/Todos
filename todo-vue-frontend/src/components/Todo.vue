<template>
  <div v-bind:class="todoStyle" v-on:click="ValidateTodo" role="alert">
    <div id="left">
      <h6>{{ todo.name }}</h6>
    </div>
    <div id="rigth">
      <span
        class="badge badge-pill badge-success floatrigth"
        v-if="todo.state === 1"
        >Done</span
      >
      <span
        class="badge badge-pill badge-warning floatrigth"
        v-if="todo.state === 0"
        >Waiting</span
      >
      <font-awesome-icon
        id="delete"
        icon="trash-alt"
        v-on:click="DeleteTtoto"
      />
    </div>
    <div style="clear: both"></div>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: {
    todo: Object,
  },
  methods: {
    ValidateTodo: function() {
     this.$store.dispatch("ValidateTodo",this.todo);
    },

    DeleteTtoto: function() {
      this.$api
        .delete("/todo/DeleteTodo/" + this.todo.id)
        .then(() => {
            this.$store.dispatch("getAllTodos");
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },

  computed: {
    todoStyle: function() {
      return {
        "alert alert-success": this.todo.state === 1,
        "alert alert-warning": this.todo.state === 0,
      };
    },
  },
};
</script>

<style scoped>
#left,
#rigth {
  display: inline-block;
  height: 100%;
}
#rigth {
  float: right;
}
#delete {
  color: #495057;
  margin-left: 30px;
  padding-top: 1px;
}
</style>
