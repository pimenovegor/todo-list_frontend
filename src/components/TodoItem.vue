<template>
  <div class="item">
    <div class="text">
      Название:
      {{ todoItem.title }}
    </div>
    <div class="text">
      Описание:
      {{ todoItem.description }}
    </div>
    <div class="checkbox">
      <label for="checkbox">сделано</label>
      <input
        class="checkbox-input"
        type="checkbox"
        :checked="todoItem.isDone"
        @input="
          patchTodo({ id: todoItem.id,
          isDone: !todoItem.isDone 
          })
        "
      />
      <label for="checkbox">важно</label>
      <input
        type="checkbox"
        :checked="todoItem.isFavourite"
        @input="
          patchTodo({
            id: todoItem.id,
            isFavourite: !todoItem.isFavourite,
          })
        "
      />
    </div>
    <button
      @click="deleteTodo({ id: todoItem.id })"
      class="submit"
      type="submit"
    >
      Удалить
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "TodoItem",
  props: {
    todoItem:{
      type: Object,
      default: ()=>({})
    },
  },
  methods: {
    ...mapActions({
      deleteTodo: "todo/DELETE_TODO",
      patchTodo: "todo/PATCH_TODO",
    }),
  },
};
</script>

<style scoped>
.item {
  margin: auto;
  display: flex;
  flex-direction: column;
  max-width: 90vh;
  font-family: "Trebuchet MS", "Lucida Sans";
  padding: 7px 20px;
  margin-bottom: 10px;
  border-radius: 5px;
  border-left: 10px solid #f05d22;
  box-shadow: 2px -2px 5px 0 rgba(0, 0, 0, 0.1),
    -2px -2px 5px 0 rgba(0, 0, 0, 0.1), 2px 2px 5px 0 rgba(0, 0, 0, 0.1),
    -2px 2px 5px 0 rgba(0, 0, 0, 0.1);
  font-size: 20px;
  letter-spacing: 2px;
  transition: 0.3s all linear;
}
.text {
  margin-top: 10px;
  word-wrap: break-word;
}
.submit {
  margin-top: 10px;
  min-height: 28px;
  align-self: flex-end;
  border: unset;
  background-color: #f05d22;
  color: rgb(229, 234, 238);
  border-radius: 5px;
}
.checkbox {
  margin-top: 10px;
}
.checkbox-input {
  margin-right: 25px;
}
button:active {
  background-color: #817d7d;
}
.item:nth-child(5n-3) {
  border-color: #8bc63e;
}
.item:nth-child(5n-3) button:active {
  background-color: #817d7d;
}
.item:nth-child(5n-3) .submit {
  background-color: #8bc63e;
}
.item:nth-child(5n-2) {
  border-color: #fcba30;
}
.item:nth-child(5n-2) button:active {
  background-color: #817d7d;
}
.item:nth-child(5n-2) .submit {
  background-color: #fcba30;
}
.item:nth-child(5n-1) {
  border-color: #1ccfc9;
}
.item:nth-child(5n-1) button:active {
  background-color: #817d7d;
}
.item:nth-child(5n-1) .submit {
  background-color: #1ccfc9;
}
.item:nth-child(5n) {
  border-color: #493224;
}
.item:nth-child(5n) button:active {
  background-color: #817d7d;
}
.item:nth-child(5n) .submit {
  background-color: #493224;
}
</style>
