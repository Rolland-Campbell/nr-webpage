<template>
  <div class="eventCard">
    <div class="card">
      <div class="card-body">
        <h2 class="card-title">{{this.eventProps.title}}</h2>
        <hr />
        <h3>{{this.eventProps.eventDate}}</h3>
        <p>{{this.eventProps.eventTime}}</p>
        <p>{{this.eventProps.description}}</p>
        <p>{{this.eventProps.location}}</p>
        <p></p>
        <p>{{this.eventProps.link}}</p>
        <div
          class="buttonRow"
          v-if="$auth.isAuthenticated && $auth.userInfo.app_metadata.role == 'admin'"
        >
          <button class="btn btn-warning">
            <i class="fa fa-pencil" aria-hidden="true"></i>
          </button>
          <button class="btn btn-danger">
            <i class="fa fa-trash" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
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
  methods: {},
  components: {}
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

p {
  font-size: x-large;
}

.btn {
  border-radius: 50%;
  border-color: black;
  border-style: solid;
}

.buttonRow {
  display: flex;
  justify-content: space-evenly;
}
</style>