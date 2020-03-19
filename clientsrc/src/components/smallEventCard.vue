<template>
  <div class="smallEventCard">
    <router-link :to="{ name: 'Events' }" class="nav-link">
      <div class="card">
        <img class="card-img-top" :src="eventProps.logo" alt />
        <div class="card-body">
          <h4 class="card-title">{{eventProps.title}}</h4>
          <p class="card-text">{{eventProps.eventDate | date}}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>


<script>
export default {
  name: "smallEventCard",
  props: ["eventProps"],
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
img {
  height: 20vh;
  width: 100%;
}

.card-title,
.card-text {
  text-align: center;
}

.nav-link {
  color: black;
}
</style>