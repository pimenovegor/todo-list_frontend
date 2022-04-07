<template>
  <div class="content">
    <div v-bind:class="{empty:!todoList[0]}" class="features">
      <h3 v-if="!todoList[0]" class="warr" >Список заданий пуст</h3>
      <button @click="createBtn=true" class="btn">Создать</button>
      <input v-if="todoList[0]" v-model="search" type="text" class="message" placeholder="Поиск">
      <window v-if="createBtn" @close="createBtn=false" >
        <TodoForm @view-btn="createBtn=false" class="todo-form" />
      </window>
    </div>
    <div class="todo-list">
      <TodoItem
        v-for="todoItem in sortTodo"
        :key="todoItem.id"
        :todoItem="todoItem"
      />
    </div>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem.vue";
import TodoForm from "@/components/TodoForm.vue";
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

export default {
  name: "home",
  components: {
    TodoItem,
    TodoForm,
  },
  data: () => ({
    createBtn: false,
    search:""
  }),
  created() {
    this.fetchTodoList();
  },
  computed: {
    ...mapGetters({
      sortTodo: "todo/searchTodo",
    }),
    ...mapState({
      todoList: (state)=>state.todo.todoList
    })
  },
  watch:{
    search(){
      this.setSearch(this.search)
    }
  },
  methods: {
    ...mapActions({
      fetchTodoList: "todo/FETCH_TODO",
    }),
    ...mapMutations({
      setSearch: "todo/setSearch"
    })
  },
};
</script>

<style scoped>
h3 {
  color: rgb(91, 92, 94);
  text-align: center;
}
.content {
  margin-top: 50px;
  width: 95%;
}
.todo-list {
  margin-top: 20px;
}
.features{
  width: 95%;
  margin: auto;
  max-width: 93vh;
  display: flex;
  justify-content: space-between;
}
.empty{
  flex-direction: column;
  align-items: center;
}
.dialog {
  position: fixed;
  display: flex;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}
.todo-form {
  width: 80%;
  max-width: 80vh;
  margin: auto;
  background-color: white;
  border-radius: 12px;
  padding: 15px;
}
.btn{
  min-height: 23px;
  border: 1px rgb(201, 197, 197) solid;
  background-color: rgb(243, 243, 243);
  border-radius: 4px;
  color: rgb(59, 59, 59)
}
::placeholder{
  color: rgb(59, 59, 59);
}
.btn:active{
  background-color: #817d7d;
}
.warr{
  color: rgb(199, 20, 20);
}

</style>
