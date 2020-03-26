<template>
  <div class="eventCard">
    <div class="card">
      <div class="text-center m-2">
        <img :src="this.eventProps.logo" alt="logo" />
      </div>
      <div class="card-body">
        <h5 class="card-title">{{this.eventProps.title}}</h5>
        <hr />
        <h5>
          <u>Date:</u>
          {{this.eventProps.eventDate | date}}
        </h5>
        <h5>
          <u>Time:</u>
          {{this.eventProps.eventTime}}
        </h5>
        <h5>
          <u>Host:</u>
          {{this.eventProps.host}}
        </h5>
        <h5>
          <u>Registration Cost:</u>
          ${{this.eventProps.cost}}
        </h5>
        <h5>
          <u>Location:</u>
          {{this.eventProps.location}}
        </h5>
        <h5>
          <u>Website:</u>&ensp;
          <a class="webLink" :href="'https://'+ this.eventProps.link">{{this.eventProps.link}}</a>
        </h5>
        <p>
          <a class="linkInfo" data-toggle="collapse" :href="'#collapseExample'+ this.eventProps._id" role="button"
            aria-expanded="false" aria-controls="collapseExample">
            <h5>
              <u>Event Information:</u>&ensp;
              <span class="smallText">(Click to open)</span>
            </h5>
          </a>
        </p>
        <div class="collapse" :id="'collapseExample'+ this.eventProps._id">
          <div class="card card-body mb-3">
            <h5>{{this.eventProps.description}}</h5>
          </div>
        </div>
        <div class="regButton">
          <RegModal :eventProps="eventProps" :id="eventProps._id" />
        </div>
        <div class="buttonRow" v-if="$auth.isAuthenticated && $auth.userInfo.app_metadata.role == 'admin'">
          <button class="btn btnSm btn-warning" data-toggle="modal" :data-target="'#editModal'+ eventProps.id">
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
    text-align: left;
  }

  .card-title {
    text-align: center;
  }

  .btnSm {
    border-radius: 50%;
    border-color: black;
    border-style: solid;
  }

  .regButton {
    display: flex;
    justify-content: center;
  }

  .buttonRow {
    margin-top: 2vh;
    display: flex;
    justify-content: space-evenly;
  }

  h5 {
    padding-bottom: 1vh;
  }

  img {
    height: 20vh;
    width: 20vh;
    border-radius: 15px;
    justify-content: center;
  }

  .linkInfo {
    color: black;
  }

  .smallText {
    font-size: small;
  }

  .webLink {
    color: black;
  }
</style>