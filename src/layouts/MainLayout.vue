<template>
  <div class="main-layout">
    <div class="menu-main">
      <a v-bind:class="{active: this.$route.name==='info'}" @click="onInfo">Инфо</a>
      <a v-bind:class="{active: this.$route.name==='home'}" @click="onHome">Список дел</a>
      <a @click="onLogoutClicked">Выйти</a>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "MainLayout",
  methods: {
    ...mapActions({
      onLogout: "auth/LOGOUT"
    }),
    async onLogoutClicked() {
        await this.onLogout();
        this.$router.push("/login");    
    },
    onInfo() {
      this.$router.push("/info");
    },
    onHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.active{
  color: #414141;
}
</style>

