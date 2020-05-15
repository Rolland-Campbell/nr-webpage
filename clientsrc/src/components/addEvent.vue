<template>
  <div class="col-12 col-md-4 inputStyle">
    <h2 class="text-center">
      <u>Create a Calendar Event</u>
    </h2>
    <label for="logo">
      <h5>Organization's Logo</h5>
    </label>
    <input id="logo" type="text" placeholder="Add a logo" v-model="eventInfo.logo" />
    <label for="#host">
      <h5>Hosting Organization</h5>
    </label>
    <input id="host" type="text" placeholder="Title" v-model="eventInfo.host" required />
    <label for="#title">
      <h5>Event Title</h5>
    </label>
    <input id="title" type="text" placeholder="Title" v-model="eventInfo.title" required />
    <label for="#date">
      <h5>Event Date</h5>
    </label>
    <input id="date" type="date" v-model="eventInfo.eventDate" required />
    <label for="#time">
      <h5>Event Time</h5>
    </label>
    <input id="time" type="time" v-model="eventInfo.eventTime" required />
    <label for="#cost">
      <h5>Registration Cost</h5>
    </label>
    <input id="cost" type="number" v-model="eventInfo.cost" required />
    <label for="#desc">
      <h5>Description</h5>
    </label>
    <input id="desc" type="text" placeholder="Enter a short description" v-model="eventInfo.description" required />
    <label for="#loc">
      <h5>Event Address</h5>
    </label>
    <input id="loc" type="text" placeholder="Street Address" v-model="eventInfo.location" />
    <label for="#link">
      <h5>Link to event webpage (if not ours)</h5>
    </label>
    <input id="link" type="text" placeholder="Link to event" v-model="eventInfo.link" />
    <button class="btn btn-success" @click="createEvent">Create Event</button>
  </div>
</template>


<script>
  export default {
    name: "AddEvent",
    data() {
      return {
        eventInfo: {
          creator: this.$auth.user.email,
          logo: ""
        }
      };
    },
    computed: {},
    methods: {
      createEvent() {
        if (this.eventInfo.logo == "") {
          this.eventInfo.logo =
            "https://ak3.picdn.net/shutterstock/videos/14389933/thumb/1.jpg";
          this.$store.dispatch("createEvent", this.eventInfo);
          this.eventInfo = {};
        }
        this.$store.dispatch("createEvent", this.eventInfo);
        this.eventInfo = {};
      }
    },
    components: {}
  };
</script>


<style scoped>
  input {
    margin-bottom: 2vh;
  }

  .inputStyle {
    margin: 10px;
    display: grid;
    padding: 13px;
    border-radius: 15px;
    background-color: rgba(255, 255, 255, 0.432);
  }

  .eventRow {
    display: initial;
  }
</style>