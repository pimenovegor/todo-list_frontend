import http from "./config";

export default {
  actions: {
    DO_REGISTER: async (context, { password, email }) => {
      try {
        const res = await http.post("/auth/registration", {
          password,
          email,
        });
        return res;
      } catch (error) {
        console.log({ error });
      }
    },
    DO_LOGIN: async (context, { password, email }) => {
      try {
        const res = await http.post("/auth/login", {
          password,
          email,
        });
        const { accessToken } = res.data;
        localStorage.accessToken = accessToken;
        return accessToken;
      } catch (error) {
        console.error({ error });
      }
    },
    LOGOUT: async () => {
        try {
          await http.post(
            "/users/logout",{},
            {
              headers: {
                "Content-Type": "application/json",
                token: localStorage.accessToken,
              },
            }
          );
          localStorage.removeItem("accessToken");
        } catch (error) {
          console.error({ error });
        }
      },
  },
  namespaced: true,
};
