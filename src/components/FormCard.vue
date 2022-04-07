<template>
  <div class="base-card">
    <input v-model="name" class="message" placeholder="Ваше имя" />
    <input v-model="email" class="message" placeholder="Ваша почта" />
    <button
      @click="updateUser({ name, email })"
      class="submit-btn"
      type="submit"
    >
      Отправить
    </button>
    <button @click="changePass = true" class="chg-btn" type="submit">
      Изменить пароль
    </button>
    <window v-if="changePass" @close="changePass = false">
      <div class="chg-field">
        <h4 v-if="err === true" class="err">Пароли не совпадают</h4>
        <input
          v-model="newPass"
          class="message"
          type="text"
          placeholder="Введите новый пароль"
        />
        <input
          v-model="reapPass"
          class="message ms2"
          type="text"
          placeholder="Повторите пароль"
        />
        <button @click="updatePassword" class="submit-btn">Изменить</button>
      </div>
    </window>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "FormCard",
  data: () => ({
    changePass: false,
    newPass: "",
    reapPass: "",
    err: false,
  }),
  methods: {
    ...mapActions({
      updateUser: "user/UPDATE_USER",
    }),
    async updatePassword() {
      if (this.newPass === this.reapPass) {
        await this.updateUser({
          password: this.newPass,
        });
        this.changePass = false;
      } else {
        this.err = true;
      }
    },
  },
};
</script>

<style scoped>
.base-card {
  grid-template-rows: 30px 30px 70px auto;
  grid-row-gap: 8px;
}
::placeholder {
  color: rgb(59, 59, 59);
}
.chg-btn {
  align-self: end;
  justify-self: end;
  padding: 8px;
  border: unset;
  background-color: rgb(226, 70, 70);
  border-radius: 4px;
  color: rgb(255, 251, 251);
}
.chg-btn:active {
  background-color: #161616;
}
.chg-field {
  margin: auto;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 12px;
  padding: 15px;
}
.chg-field .ms2 {
  margin-top: 10px;
}
</style>
