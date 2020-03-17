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
    judges: [],
    activeRegister: {}
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setEvents(state, data) {
      state.events = data;
    },
    setJudges(state, data) {
      state.judges = data;
    },
    setActiveReg(state, data) {
      state.activeRegister = data;
    }
  },
  actions: {
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    register({ commit }, data) {
      commit("setActiveReg", data)
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
    async getJudges({ commit }) {
      try {
        let res = await api.get("judges");
        commit("setJudges", res.data);
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
    async editEvent({ commit }, data) {
      try {
        let res = await api.put("/events/" + data.id, data)
      } catch (error) {
        console.error(error)
      }
    },
    async deleteEvent({ commit }, data) {
      try {
        let res = await api.delete("/events/" + data.id)
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
    },
    async editJudge({ commit }, data) {
      try {
        let res = await api.put("/judges/" + data.id, data)
      } catch (error) {
        console.error(error)
      }
    },
    async deleteJudge({ commit }, data) {
      try {
        let res = await api.delete("/judges/" + data.id)
      } catch (error) {
        console.error(error)
      }
    },
    async textRequest({ commit }, data) {
      try {
        let res = await api.post("textGroup", data)
      } catch (error) {
        console.error(error)
      }
    }
  }
});
