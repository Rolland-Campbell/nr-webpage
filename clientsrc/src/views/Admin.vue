<template>
  <div class="admin container-fluid">
    <div class="row eventRow">
      <div class="col-12 col-md-4 inputStyle">
        <h2 class="text-center">
          <u>Create a Calendar Event</u>
        </h2>
        <label for="title">
          <h5>Event Title</h5>
        </label>
        <input id="title" type="text" placeholder="Title" v-model="eventInfo.title" />
        <label for="date">
          <h5>Event Date</h5>
        </label>
        <input id="date" type="date" v-model="eventInfo.eventDate" />
        <label for="time">
          <h5>Event Time</h5>
        </label>
        <input id="time" type="time" v-model="eventInfo.eventTime" />
        <label for="desc">
          <h5>Description</h5>
        </label>
        <input
          id="desc"
          type="text"
          placeholder="Enter a short description"
          v-model="eventInfo.description"
        />
        <label for="loc">
          <h5>Event Location</h5>
        </label>
        <input id="loc" type="text" placeholder="Location" v-model="eventInfo.location" />
        <label for="link">
          <h5>Link to event webpage (if not ours)</h5>
        </label>
        <input id="link" type="text" placeholder="Link to event" v-model="eventInfo.link" />
        <button class="btn btn-success" @click="createEvent">Create Event</button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Admin",
  data() {
    return {
      eventInfo: {
        creator: this.$auth.user.email
      }
    };
  },
  computed: {},
  methods: {
    createEvent() {
      this.$store.dispatch("createEvent", this.eventInfo);
      this.eventInfo = {};
    }
  },
  components: {}
};
</script>


<style scoped>
.admin {
  background-image: url("../assets/adminbg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 92vh;
}

input {
  margin-bottom: 2vh;
}

.inputStyle {
  display: grid;
  padding: 13px;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.432);
}

.eventRow {
  display: initial;
}
</style>