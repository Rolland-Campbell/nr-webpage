import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Auth0Plugin, onAuth } from "@bcwdev/auth0-vue";
import { domain, clientId, audience } from "./authConfig";


Vue.use(Auth0Plugin, {
  domain,
  clientId,
  audience,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});

Vue.filter("date", val => {
  try {
    let date = new Date(val)
    return date.toLocaleDateString("en-US", { month: "numeric", day: "numeric", year: "numeric" })
  } catch (error) {
    console.error(error)
  }
})

new Vue({
  router,
  store,
  render: function (h) {
    return h(App);
  }
}).$mount("#app");
