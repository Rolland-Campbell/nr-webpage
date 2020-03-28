<template>
  <div class="events container-fluid">
    <div class="row titleRow">
      <h1>Events</h1>
    </div>
    <div class="row cardRow">
      <EventCards class="eventCards" v-for="event in events" :key="event._id" :eventProps="event" />
    </div>
  </div>
</template>


<script>
  import EventCards from "../components/eventCard";
  export default {
    name: "Events",
    data() {
      return {};
    },
    mounted() {
      return this.$store.dispatch("getEvents");
    },
    computed: {
      events() {
        return this.$store.state.events;
      }
    },
    methods: {},
    components: {
      EventCards
    }
  };
</script>


<style scoped>
  .events {
    background-image: url("../assets/eventsbg.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 90svh;
    width: 100%;
    overflow: hidden;
    overflow-y: auto;
  }

  @media only screen and (max-width: 600px) {
    .events {
      background-image: url("../assets/eventsbg.jpg");
      background-position: center;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      height: 92vh;
      overflow: hidden;
      overflow-y: auto;
    }
  }

  .titleRow {
    color: white;
    text-shadow: 1px 1px black;
    justify-content: center;
  }

  .cardRow {
    display: flex;
    justify-content: space-evenly;
  }

  .eventCards {
    margin: 10px;
    width: 25vw;
  }

  @media only screen and (max-width: 600px) {
    .eventCards {
      margin: 10px;
      width: 100%;
    }
  }
</style>