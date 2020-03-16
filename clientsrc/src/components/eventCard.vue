<template>
  <div class="eventCard">
    <div class="card">
      <div class="card-body">
        <img :src="this.eventProps.logo" alt="logo" />
        <h2 class="card-title">{{this.eventProps.title}}</h2>
        <hr />
        <h3>Date: {{this.eventProps.eventDate}}</h3>
        <h4>Time: {{this.eventProps.eventTime}}</h4>
        <h5>Registration Cost: {{this.eventProps.cost}}</h5>
        <h4>Event Information: {{this.eventProps.description}}</h4>
        <h4>Location: {{this.eventProps.location}}</h4>
        <h4>More Info: {{this.eventProps.link}}</h4>
        <button
          class="btn btn-info"
          data-toggle="modal"
          data-target="#regModal"
        >Register for this Event</button>
        <RegModal :eventProps="eventProps" />
        <div
          class="buttonRow"
          v-if="$auth.isAuthenticated && $auth.userInfo.app_metadata.role == 'admin'"
        >
          <button
            class="btn btnSm btn-warning"
            data-toggle="modal"
            :data-target="'#editModal'+ eventProps.id"
          >
            <i class="fa fa-pencil" aria-hidden="true"></i>
          </button>
          <eventEditModal :id="'editModal'+eventProps.id" :edit="eventProps" />
          <button class="btn btnSm btn-danger" @click="deleteEvent">
            <i class="fa fa-trash" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import RegModal from "../components/registrationModal";
import EventEditModal from "../components/editEventModal";
export default {
  name: "EventCard",
  props: ["eventProps"],
  data() {
    return {};
  },
  mounted() {
    return this.$store.state.events;
  },
  computed: {},
  methods: {
    deleteEvent() {
      this.$store.dispatch("deleteEvent", this.eventProps);
    }
  },
  components: {
    EventEditModal,
    RegModal
  }
};
</script>


<style scoped>
.card {
  background-color: rgba(255, 255, 255, 0.616);
  border-color: black;
  border-style: solid;
}

.card-body {
  text-align: center;
}

.btnSm {
  border-radius: 50%;
  border-color: black;
  border-style: solid;
}

.buttonRow {
  margin-top: 2vh;
  display: flex;
  justify-content: space-evenly;
}

h3,
h4,
h5 {
  padding-bottom: 3vh;
}

img {
  height: 20vh;
  width: 20vh;
  border-radius: 50%;
}
</style>