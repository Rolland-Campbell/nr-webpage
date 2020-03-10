<template>
  <div class="home containerf-fluid">
    <div class="row titleRow">
      <div
        class="col-10 col-md-8"
      >The Northern Rockies is a 501-(c)3 (81-4950693) charitable organization that strives to educate the communities in which we work about Scottish culture and the history of Scottish Highland Games. Our group of highly motivated volunteers help Scottish Festivals run Scottish Highland Games or Heavy Events around the world. We are based out of Boise Idaho, but have sister chapters in Oregon, Washington, Montana, and Alaska.</div>
    </div>

    <div class="row">
      <div class="col eventTitle">
        <b>Scottish Heavy Events</b>
        <h4>For more information on each event, click a card</h4>
      </div>
    </div>

    <div class="row cardRow">
      <!-- Card W4D-->
      <div class="card">
        <img class="card-img-top" src="../assets/scottishAmericanFlag.jpg" alt="SA Flag" />
        <div class="card-body">
          <h5 class="mb-0">
            <h5>Weight for Distance</h5>
          </h5>
        </div>
      </div>
      <!-- End Card -->
      <!-- Card WOB-->
      <div class="card">
        <img class="card-img-top" src="../assets/scottishAmericanFlag.jpg" alt="SA Flag" />
        <div class="card-body">
          <h5 class="mb-0">
            <h5>Weight Over Bar (WOB)</h5>
          </h5>
        </div>
      </div>
      <!-- End Card -->
      <!-- Card Hammers-->
      <div class="card">
        <img class="card-img-top" src="../assets/scottishAmericanFlag.jpg" alt="SA Flag" />
        <div class="card-body">
          <h5 class="mb-0">
            <h5>Scottish Hammers</h5>
          </h5>
        </div>
      </div>
      <!-- End Card -->
      <!-- Card Stones-->
      <div class="card">
        <img class="card-img-top" src="../assets/scottishAmericanFlag.jpg" alt="SA Flag" />
        <div class="card-body">
          <h5 class="mb-0">
            <h5>Braemar / Open Stone</h5>
          </h5>
        </div>
      </div>
      <!-- End Card -->
      <!-- Card Cabers-->
      <div class="card">
        <img class="card-img-top" src="../assets/scottishAmericanFlag.jpg" alt="SA Flag" />
        <div class="card-body">
          <h5 class="mb-0">
            <h5>Cabers</h5>
          </h5>
        </div>
      </div>
      <!-- End Card -->
      <!-- Card Sheaf-->
      <div class="card">
        <img class="card-img-top" src="../assets/scottishAmericanFlag.jpg" alt="SA Flag" />
        <div class="card-body">
          <h5 class="mb-0">
            <h5>Sheaf</h5>
          </h5>
        </div>
      </div>
      <!-- End Card -->
    </div>
  </div>
</template>


<script>
export default {
  name: "home",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
.home {
  background-image: url("../assets/scotlandHighlands.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 92vh;
  width: 100%;
  overflow: hidden;
  overflow-y: auto;
}

.titleRow {
  justify-content: center;
  margin-top: 3vh;
}

@media only screen and (max-width: 600px) {
  .titleRow {
    background-color: rgba(255, 255, 255, 0.473);
    padding: 5px;
    color: black;
    font-size: larger;
    text-shadow: 1px 1px white;
  }
}

.eventTitle {
  margin-top: 3vh;
  text-align: center;
  font-size: 4vh;
}

@media only screen and (max-width: 600px) {
  .eventTitle {
    color: white;
  }
}

.card {
  margin-top: 2vh;
  margin-bottom: 2vh;
  border-radius: 20px;
  opacity: 0.7;
}

.cardRow {
  justify-content: space-evenly;
}

.card-img-top {
  height: 30vh;
  width: 40vh;
  border-radius: 30px;
}

.card-body {
  text-align: center;
}
</style>