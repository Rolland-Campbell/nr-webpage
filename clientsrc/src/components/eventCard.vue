<template>
  <div class="eventCard">
    <div class="card">
      <div class="card-body">
        <h2 class="card-title">{{this.eventProps.title}}</h2>
        <hr />
        <h3>Date: {{this.eventProps.eventDate}}</h3>
        <h4>Time: {{this.eventProps.eventTime}}</h4>
        <h4>{{this.eventProps.description}}</h4>
        <h4>Location: {{this.eventProps.location}}</h4>
        <h4>More Info: {{this.eventProps.link}}</h4>
        <div
          class="buttonRow"
          v-if="$auth.isAuthenticated && $auth.userInfo.app_metadata.role == 'admin'"
        >
          <button
            class="btn btn-warning"
            data-toggle="modal"
            :data-target="'#editModal'+ eventProps.id"
          >
            <i class="fa fa-pencil" aria-hidden="true"></i>
          </button>
          <eventEditModal :id="'editModal'+eventProps.id" :edit="eventProps" />
          <button class="btn btn-danger" @click="deleteEvent">
            <i class="fa fa-trash" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
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
    EventEditModal
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

.btn {
  border-radius: 50%;
  border-color: black;
  border-style: solid;
}

.buttonRow {
  margin-top: 2vh;
  display: flex;
  justify-content: space-evenly;
}

h3 {
  padding-bottom: 3vh;
}

h4 {
  padding-bottom: 3vh;
}
</style>