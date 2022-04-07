import http from "./config";

export default {
  state: {
    userData: {},
  },
  mutations: {
    setUser(state, user) {
      state.userData = user;
    },
  },
  actions: {
    FETCH_USER: async (context) => {
      try {
        const res = await http.get("/users", {
          headers: {
            "Content-Type": "application/json",
            token: localStorage.accessToken,
          },
        });
        context.commit("setUser", res?.data ?? {});
      } catch (error) {
        console.log({ error });
      }
    },
    UPDATE_USER: async (context, { name, email, password }) => {
      try {
        name ? name : (name = context.state.userData.name);
        email ? email : (email = context.state.userData.email);
        password ? password : (password = context.state.userData.password);

        await http.patch(
          "/users",
          {
            name,
            password,
            email,
          },
          {
            headers: {
              "Content-Type": "application/json",
              token: localStorage.accessToken,
            },
          }
        );
        context.dispatch("FETCH_USER");
      } catch (error) {
        console.log({ error });
      }
    },
  },
  namespaced: true,
};
