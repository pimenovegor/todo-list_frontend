import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import todo from "./modules/todo";
import user from "./modules/user";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    todo,
    user,
  },
});
