<template>
  <div class="base-card">
    <img src="@/assets/Img/images.jpg" alt="Avatar" class="img" />
    <h4 v-if="user.name!=='Name'">Имя: {{ user.name }}</h4>
    <p v-else class="err">Вы не указали имя</p>
    <h4>Почта: {{ user.email }}</h4>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "InfoCard",
  created() {
    this.fetchUser();
  },
  computed: {
    ...mapState({
      user: (state) => state.user.userData,
    }),
  },
  methods: {
    ...mapActions({
      fetchUser: "user/FETCH_USER",
    }),
  },
};
</script>

<style scoped>
.base-card{
  grid-template-rows: auto 20px 20px;
  grid-row-gap: 10px;
}
.img{
  max-width: 250px;
}
</style>
