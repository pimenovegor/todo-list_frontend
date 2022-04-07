<template>
  <div class="main-layout">
    <div class="menu-main">
      <a v-bind:class="{active: $route.name==='login'}" @click.prevent="onEntrance" href="">Вход</a>
      <a v-bind:class="{active: $route.name==='registration'}" @click.prevent="onRegist" href="">Регистрация</a>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "AuthLayout",
  methods:{
    onEntrance(){
      this.$router.push('/login');
    },
    onRegist(){
      this.$router.push('/registration');
    }
  }
};
</script>

<style scoped>
.active{
  color: #414141;
}
</style>

