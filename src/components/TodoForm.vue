<template>
  <div class="create-field">
    <input v-model="title" class="message" placeholder="Название" />
    <input v-model="description" class="message desc" placeholder="Описание" />
    <input type="checkbox" class="checkbox" v-model="isFavourite" />
    <label for="checkbox" class="checkbox">важно</label>
    <button @click="onCreateTodo" class="submit-btn" type="submit">
      Отправить
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    title: "",
    description: "",
    isFavourite: false,
  }),
  methods: {
    ...mapActions({
      createTodo: "todo/CREATE_TODO",
    }),
    async onCreateTodo() {
      await this.createTodo({
        title: this.title,
        description: this.description,
        isFavourite: this.isFavourite,
      });
      this.$emit("view-btn", false)
    },
  },
};
</script>

<style scoped>
.create-field {
  display: flex;
  flex-direction: column;
  font-family: "Trebuchet MS", "Lucida Sans";
  font-size: 20px;
  padding: 15px 20px;
  border-radius: 5px;
  letter-spacing: 2px;
  transition: 0.3s all linear;
  box-shadow: 2px -2px 5px 0 rgba(0, 0, 0, 0.1),
    -2px -2px 5px 0 rgba(0, 0, 0, 0.1), 2px 2px 5px 0 rgba(0, 0, 0, 0.1),
    -2px 2px 5px 0 rgba(0, 0, 0, 0.1);
}
.create-field input {
  margin-top: 15px;
}
.checkbox {
  margin: auto;
}
.desc {
  height: 6vh;
}
</style>
