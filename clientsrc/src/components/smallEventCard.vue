<template>
  <div class="smallEventCard">
    <div class="card">
      <img class="card-img-top" :src="eventProps.logo" alt />
      <div class="card-body">
        <h4 class="card-title">{{eventProps.title}}</h4>
        <p class="card-text">{{eventProps.eventDate | date}}</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "smallEventCard",
  props: ["eventProps"],
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>