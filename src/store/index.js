import { createStore } from "vuex";

const store = createStore({
  state: {
    isLoggedIn: false,
    userName: null,
    token: null,
  },
  mutations: {
    login(state, data) {
      state.isLoggedIn = true;
      state.userName = data.user;
      state.token = data.token;
      localStorage.setItem("user", JSON.stringify(data.user));
    },
    logout(state) {
      state.isLoggedIn = false;
      state.userName = null;
      state.token = null;
      localStorage.removeItem("user");
    },
  },
  getters: {
    isLoggedIn: (state) => state.isLoggedIn,
    user: (state) => state.userName,
    token: (state) => state.token,
  },

  modules: {},
});

export default store;
