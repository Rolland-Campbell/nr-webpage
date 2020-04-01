<template>
  <div class="cardStyle col-12">
    <div class="col-2 imgStyle">
      <img :src="this.eventProps.logo" alt="logo">
    </div>
    <div class="col-4 eventInfo">
      <h3>{{this.eventProps.title}}</h3>
      <h3><u>Date</u>: {{this.eventProps.eventDate | date}}</h3>
      <h3><u>Time</u>: {{this.eventProps.eventTime}}</h3>
      <h3><u>Host</u>: {{this.eventProps.host}}</h3>
      <h3><u>Registration Cost:</u> ${{this.eventProps.cost}}</h3>
      <h3><u>Location:</u> {{this.eventProps.location}}</h3>
      <h3><u>Website:</u>&ensp; <a class="webLink" :href="'https://'+ this.eventProps.link">{{this.eventProps.link}}</a>
      </h3>
      <a class="webLink" data-toggle="collapse" :href="'#collapseExample'+ this.eventProps._id" role="button"
        aria-expanded="false" aria-controls="collapseExample">
        <h3>
          <u>Event Information:</u>&ensp;
          <span class="smallText">(Click to open)</span>
        </h3>
      </a>
      <div class="collapse" :id="'collapseExample'+ this.eventProps._id">
        <div class="card card-body mb-3" tabindex="2">
          <h5>{{this.eventProps.description}}</h5>
        </div>
      </div>
    </div>
    <div class="col-4">
      test2
    </div>
    <div class="col-2">
      test
    </div>
  </div>
</template>
<script>
  export default {
    name: 'EventCards',
    props: ["eventProps"],
    data() {
      return {};
    },
    methods: {}
  };
</script>
<style>
  .cardStyle {
    height: 40vh;
    margin-bottom: 2vh;
    display: flex;
  }

  .imgStyle {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.294);
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }

  .eventInfo {
    display: grid;
    align-content: center;
    background-color: rgba(255, 255, 255, 0.294);
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    text-shadow: 1px 1px white;
    overflow-y: hidden;
  }

  img {
    height: 90%;
    width: 90%;
    border-radius: 20px;
  }

  .webLink {
    color: black;
  }
</style>