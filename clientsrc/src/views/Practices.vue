<template>
  <div class="practices">
    <div class="row titleRow">
      <h1 class="text-center">Heavy Events Practice</h1>
    </div>
    <div class="col-10 offset-1">
      <img class="locPic" src="../assets/practiceLocation.jpg" alt="practice location" />
    </div>
    <div class="row textRow">
      <div class="col-10">
        <p>We hold practice at McDevitt's Park on the corner of McMillan Rd and Eagle Rd. Practices are organized with
          trainers on site to help you start your experience, and to help seasoned athletes become better. We try and
          run practices every weekend from April - October. Practice will not be held on event weekends. If you are
          interested in starting or would like to know when practices will be. Register for our group notifications to
          recieve text messages.</p>
      </div>
    </div>
    <div class="row buttonRow">
      <button class="btn btn-warning" data-toggle="modal" data-target="#textModal">Add me to the text message
        group</button>
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
    height: 90vh;
    background-image: url("../assets/practicebg.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
    overflow: hidden;
    overflow-y: auto;
  }

  .titleRow {
    display: grid;
    justify-content: center;
    color: white;
    text-shadow: 1px 1px black;
    padding: 10px;
  }

  .locPic {
    height: 50vh;
    width: 100%;
  }

  @media only screen and (max-width: 600px) {
    .locPic {
      width: 100%;
      height: 30vh;
      padding: 10px;
    }
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