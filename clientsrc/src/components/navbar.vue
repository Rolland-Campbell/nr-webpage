<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" :to="{ name: 'Home' }">Northern Rockies</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" :class="{ active: $route.name == 'Home' }">
          <router-link :to="{ name: 'Home' }" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item" :class="{ active: $route.name == 'Events' }">
          <router-link :to="{ name: 'Events' }" class="nav-link">Events</router-link>
        </li>
        <li class="nav-item" :class="{ active: $route.name == 'Classes' }">
          <router-link :to="{ name: 'Classes' }" class="nav-link">Throwing Classes</router-link>
        <li class="nav-item" :class="{ active: $route.name == 'Judges' }">
          <router-link :to="{ name: 'Judges' }" class="nav-link">Judges / ADs</router-link>
        </li>
        <li class="nav-item" :class="{ active: $route.name == 'Contact' }">
          <router-link :to="{ name: 'Contact' }" class="nav-link">Support Staff</router-link>
        </li>
        <li class="nav-item" :class="{ active: $route.name == 'Practices' }">
          <router-link :to="{ name: 'Practices' }" class="nav-link">Practices</router-link>
        </li>
        <li class="nav-item" :class="{ active: $route.name == 'Sponsors' }">
          <router-link :to="{ name: 'Sponsors' }" class="nav-link"><b class="sponsor">Become a Sponsor</b></router-link>
        </li>
        <li class="nav-item" v-if="$auth.isAuthenticated && $auth.userInfo.app_metadata.role == 'admin'"
          :class="{ active: $route.name == 'Admin' }">
          <router-link class="nav-link" :to="{ name: 'Admin' }">Admin</router-link>
        </li>
      </ul>
      <span class="navbar-text">
        <button class="btn btn-success" @click="login" v-if="!$auth.isAuthenticated">Admin Login</button>
        <button class="btn btn-danger" @click="logout" v-else>logout</button>
      </span>
    </div>
  </nav>
</template>

<script>
  import axios from "axios";
  import { getUserData } from "@bcwdev/auth0-vue";
  export default {
    name: "Navbar",
    methods: {
      async login() {
        await this.$auth.loginWithPopup();
        this.$store.dispatch("setBearer", this.$auth.bearer);
        console.log("this.$auth.user: ");
        console.log(this.$auth.user);
        console.log(this.$auth.userInfo);
        this.$store.dispatch("getProfile");
      },
      async logout() {
        this.$store.dispatch("resetBearer");
        await this.$auth.logout({ returnTo: window.location.origin });
      }
    }
  };
</script>

<style>
  .logoSize {
    height: 8vh;
    width: 10vw;
  }

  .sponsor {
    color: Red;
  }
</style>