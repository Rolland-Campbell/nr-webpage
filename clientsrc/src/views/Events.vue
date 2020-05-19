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
  import EventCards from "../components/eventCards";
  export default {
    name: "Events",
    data() {
      return {}
    },
    mounted() {
      return this.$store.dispatch("getEvents");
    },
    computed: {
      events() {
        return this.$store.state.events.filter(e => {
          let timeMs = Date.parse(e.eventDate);
          return timeMs >= this.today;
        });
      },
      today() {
        return this.$store.state.today;
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
    height: 90vh;
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

  @media only screen and (max-width: 768px) {
    .events {
      height: 95vh;
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
    height: 100%;
    margin-left: 2vw;
    margin-right: 2vw;
  }
</style>