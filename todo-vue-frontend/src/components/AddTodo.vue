<template>
  <div class="input-group mb-3">
    <input
      type="text"
      class="form-control"
      placeholder="Todo..."
      aria-label="Recipient's username"
      aria-describedby="button-addon2"
      text="lol"
      v-model="todoName"
      @keydown.enter="postTodo"
    />
    <div class="input-group-append">
      <button
        class="btn btn-primary"
        type="button"
        id="button-addon2"
        v-on:click="postTodo"
      >
        Add
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddTodo",
  data: function() {
    return {
      todoName: null,
      processing: false,
    };
  },
  methods: {
    postTodo: function() {
      if (this.todoName !== null) {
        this.$api
          .post("/todo/todo", {
            Name: this.todoName,
          })
          .then((response) => {
            console.log(response);
            this.$store.dispatch("getAllTodos");
          })
          .catch(function(error) {
            console.log(error);
          })
          .finally(() => console.log("OK"));

        this.todoName = null;
      }
    },
  },
};
</script>
