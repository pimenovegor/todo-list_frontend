<template>
    <form @submit.prevent="onFormSubmit" class="card">
      <h4>Регистрация:</h4>
      <div class="form-field">
        <label for="email">Почта </label>
        <input v-model="email" class="message" type="text" required />
      </div>
      <div class="form-field">
        <label for="password">Пароль </label>
        <input v-model="password" class="message" type="text" required />
      </div>
      <button class="submit-btn" type="submit">Зарегистрироваться</button>
      <h4 v-if="err" class="err">Ошибка</h4>
      <div class="action-link">
        <span>Уже есть аккаунта? </span>
        <router-link to="/login">Войти</router-link>
      </div>
    </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "registration",
  data: () => ({
    email: "",
    password: "",
    err: false,
  }),
  async mounted() {},
  methods: {
    ...mapActions({
      onAuth: "auth/DO_REGISTER",
    }),

    async onFormSubmit() {
      const res = await this.onAuth({
        password: this.password.trim(),
        email: this.email.trim(),
      });
      res ? this.$router.push("/login") : (this.err = true);
      this.email = "";
      this.password = "";
    },
  },
};
</script>

<style scoped></style>
