<template>
    <form @submit.prevent="onFormSubmit" class="card">
      <h4>Вход:</h4>
      <div class="form-field">
        <label for="email">Почта</label>
        <input v-model="email" class="message" type="text" required />
      </div>
      <div class="form-field">
        <label for="password">Пароль</label>
        <input v-model="password" class="message" type="text" required />
      </div>
      <button class="submit-btn" type="submit">Войти</button>
      <h4 v-if="err" class="err">Неправильная почта или пароль</h4>
      <div class="action-link">
        <span>Нет аккаунта? </span>
        <router-link to="/registration">Зарегистрироваться</router-link>
      </div>
    </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "login",
  data: () => ({
    email: "",
    password: "",
    err: false,
  }),
  async mounted() {},
  methods: {
    ...mapActions({
      doLogin: "auth/DO_LOGIN",
    }),
    async onFormSubmit() {
      const res = await this.doLogin({
        password: this.password.trim(),
        email: this.email.trim(),
      });
      res ? this.$router.push("/") : (this.err = true);
      this.email = "";
      this.password = "";
    },
  },
};
</script>

<style scoped></style>
