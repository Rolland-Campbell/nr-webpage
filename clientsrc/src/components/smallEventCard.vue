<template>
  <div class="smallEventCard">
    <router-link :to="{ name: 'Events' }" class="nav-link">
      <div class="card">
        <img class="card-img-top" :src="eventProps.logo" alt />
        <div class="card-body">
          <p class="card-title">{{eventProps.title}}</p>
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
    height: 12vh;
    width: 100%;
  }

  @media only screen and (max-width: 600px) {
    img {
      padding: 0px;
    }
  }

  .card {
    background-color: white;
    width: 15vw;
  }

  @media only screen and (max-width: 600px) {
    .card {
      width: 55vw;
    }
  }

  .card-title,
  .card-text {
    text-align: center;
  }

  .nav-link {
    color: black;
  }
</style>