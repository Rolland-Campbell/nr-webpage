import Vue from "vue";
import VueRouter from "vue-router";
// @ts-ignore
import Home from "../views/Home.vue";
// @ts-ignore
import Profile from "../views/Profile.vue";
// @ts-ignore
import Events from "../views/Events.vue";
// @ts-ignore
import Admin from "../views/Admin.vue";
// @ts-ignore
import Contact from "../views/Contact.vue";
// @ts-ignore
import Judges from "../views/Judges.vue";
import { authGuard } from "@bcwdev/auth0-vue";

// @ts-ignore
import Practices from "../views/Practices.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    beforeEnter: authGuard
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    beforeEnter: authGuard
  },
  {
    path: "/events",
    name: "Events",
    component: Events,
  },
  {
    path: "/judges",
    name: "Judges",
    component: Judges,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/practices",
    name: "Practices",
    component: Practices,
  },
];

const router = new VueRouter({
  routes
});

export default router;
