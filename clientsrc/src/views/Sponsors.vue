<template>
  <div class="sponsorPage">
    <div class="row">
      <div class="col-10 offset-1 topText">
        <h5>The Northern Rockies is a 501-(c)3 (81-4950693) charitable organization. We rely on charitable
          sponsors to keep events running throughout the year. Tax receipts can be issued for all donations. We are
          always
          looking for assitance in creating new events, and making the events we run better for the specatators and
          athletes alike.</h5>
      </div>
    </div>
    <div class="row topRow">
      <div class="col-3">
        <div class="card">
          <img class="card-img-top" src="../assets/platinum.jpg" alt="">
          <div class="card-body">
            <h4 class="card-title">Platinum Sponsors</h4>
            <p class="card-text">Text</p>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="card">
          <img class="card-img-top" src="../assets/gold.jpg" alt="">
          <div class="card-body">
            <h4 class="card-title">Gold Sponsors</h4>
            <p class="card-text">Text</p>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="card">
          <img class="card-img-top" src="../assets/silver.jpg" alt="">
          <div class="card-body">
            <h4 class="card-title">Silver Sponsors</h4>
            <p class="card-text">Text</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Sponsors',
    data() {
      return {};
    },
    methods: {}
  };
</script>
<style>
  .sponsorPage {
    height: 90vh;
    background-image: url("../assets/sponsorbg.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
    overflow: hidden;
    overflow-y: auto;
  }

  .topText {
    margin-top: 10vh;
    padding: 10px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.5);
    color: black;
    text-shadow: 1px 1px white;
    text-align: center;
  }

  .topRow {
    padding-top: 10vh;
    justify-content: center;
  }

  .card-img-top {
    height: 30vh;
    width: 100%;
    align-self: center;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  .card-title,
  .card-text {
    text-align: center;
  }

  .card {
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    color: white;
    text-shadow: 1px 1px black;
  }
</style>