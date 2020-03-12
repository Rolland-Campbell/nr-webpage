import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import router from "../router";

Vue.use(Vuex);

let baseUrl = location.host.includes("localhost")
  ? "http://localhost:3000/"
  : "/";

let api = Axios.create({
  baseURL: baseUrl + "api",
  timeout: 3000,
  withCredentials: true
});

export default new Vuex.Store({
  state: {
    profile: {},
    events: [],
    judges: []
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setEvents(state, data) {
      state.events = data;
    }
  },
  actions: {
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getEvents({ commit }) {
      try {
        let res = await api.get("events");
        commit("setEvents", res.data);
      } catch (error) {
        console.error(error)
      }
    },
    async createEvent({ commit }, data) {
      try {
        let res = await api.post("events", data);
      } catch (error) {
        console.error(error)
      }
    },
    async addJudge({ commit }, data) {
      try {
        let res = await api.post("judges", data);
      } catch (error) {
        console.error(error)
      }
    }
  }
});
