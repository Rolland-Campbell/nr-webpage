<template>
  <div class="practices">
    <div class="row titleRow">
      <h1 class="text-center">Heavy Events Practice</h1>
      <div class="col-6">
        <img class="locPic" src="../assets/practiceLocation.jpg" alt="practice location" />
      </div>
    </div>
    <div class="row textRow">
      <div class="col-8">
        <p>We hold proactice at McDevitt's Park on the corner of McMillan Rd and Eagle Rd. Practices are organized with trainers on site to help you start your experience, and to help seasoned athletes become better. We try and run practices every weekend from April - October. Practice will not be held on event weekends. If you are interested in starting or would like to know when practices will be. Register for our group notifications to recieve text messages.</p>
      </div>
    </div>
    <div class="row buttonRow">
      <button
        class="btn btn-warning"
        data-toggle="modal"
        data-target="#textModal"
      >Add me to the text message group</button>
      <TextModal />
    </div>
  </div>
</template>


<script>
import TextModal from "../components/textModal";
export default {
  name: "Practices",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {
    TextModal
  }
};
</script>


<style scoped>
.practices {
  height: 92vh;
  background-image: url("../assets/practicebg.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
}

.titleRow {
  display: grid;
  justify-content: center;
  color: white;
  text-shadow: 1px 1px black;
}

.locPic {
  height: 40vh;
}

p {
  color: white;
  text-shadow: 1px 1px black;
}

.textRow {
  justify-content: center;
  margin-top: 5vh;
  font-size: x-large;
}

.buttonRow {
  justify-content: center;
  height: 8vh;
}
</style>