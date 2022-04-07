import http from "./config";

export default {
  state: {
    todoList: [],
    search:"",
  },
  getters: {
    sortedTodo(state){
      const sortFav = [...state.todoList].sort((a)=> a.isFavourite ? 1 : -1);
      return sortFav.sort((a)=>a.isDone ? 1 : -1);
    },
    searchTodo(state, getters){
      return getters.sortedTodo.filter(todo=> todo.title.includes(state.search.trim())) 
    }
  },
  mutations: {
    setTodo: (state, todo) => {
      state.todoList = todo;
    },
    pushTodo: (state, todo) => {
      state.todoList.push(todo);
    },
    setSearch:(state, search)=>{
      state.search=search
    }
  },
  actions: {
    FETCH_TODO: async ({ commit }) => {
      try {
        const res = await http.get("/todos", {
          headers: {
            "Content-Type": "application/json",
            token: localStorage.accessToken,
          },
        });
        commit("setTodo", res.data?.todos || []);
      } catch (error) {
        console.error({ error });
      }
    },
    CREATE_TODO: async (context, { title, isFavourite, description }) => {
      try {
        const res = await http.post(
          "/todos",
          {
            title,
            isFavourite,
            description,
          },
          {
            headers: {
              "Content-Type": "application/json",
              token: localStorage.accessToken,
            },
          }
        );
        context.commit("pushTodo", res?.data ?? {});
      } catch (error) {
        console.error({ error });
      }
    },
    PATCH_TODO: async (context,{ id, isDone, isFavourite }) => {
      try {
        await http.patch(
          "/todos/" + id,
          { isDone, isFavourite },
          {
            headers: {
              "Content-Type": "application/json",
              token: localStorage.accessToken,
            },
          }
        );
        context.dispatch("FETCH_TODO");
      } catch (error) {
        console.error({ error });
      }
    },
    DELETE_TODO: async (context, { id }) => {
      try {
        await http.delete("/todos/" + id, {
          headers: {
            "Content-Type": "application/json",
            token: localStorage.accessToken,
          },
        });
        context.dispatch("FETCH_TODO");
      } catch (error) {
        console.error({ error });
      }
    },
  },
  namespaced: true,
};
