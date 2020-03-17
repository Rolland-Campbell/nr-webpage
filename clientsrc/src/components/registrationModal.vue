<template>
  <div class="regModal">
    <div
      class="modal fade"
      id="regModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Register for {{this.eventProps.title}}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <label for="#">Name:</label>
            <input id="name" type="text" v-model="athlete.name" />
            <label for="#class">Pick a class:</label>
            <select id="class" v-model="athlete.registeredClass">
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="Men's Lightweight">Men's Lightweight (200 lbs and under)</option>
              <option value="Pro">Pro</option>
              <option value="Masters 40-49">Masters 40-49</option>
              <option value="Masters 50-59">Masters 50-59</option>
              <option value="Masters 60+">Masters 60+</option>
              <option value="Women's Lightweight">Women's Lightweight</option>
              <option value="Women's Masters 40-49">Women's Masters 40-49</option>
              <option value="Women's Masters 50-59">Women's Masters 50-59</option>
              <option value="Women's Masters 60+">Women's Masters 60+</option>
            </select>
            <label for="#shirt">Select a Shirt Size</label>
            <select id="shirt" v-model="athlete.shirtSize">
              <option value="kids">Kids</option>
              <option value="xs">XS</option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
              <option value="2xl">2XL</option>
              <option value="3xl">3XL</option>
              <option value="4xl">4XL</option>
            </select>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="register">Register</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "RegModal",
  props: ["eventProps"],
  data() {
    return {
      athlete: {
        eventTitle: this.eventProps.title,
        eventDate: this.eventProps.eventDate
      }
    };
  },
  mounted() {},
  computed: {},
  methods: {
    register() {
      this.$store.dispatch("register", this.athlete);
      this.athlete = {};
    }
  },
  components: {}
};
</script>


<style scoped>
.modal-body {
  display: grid;
}

input,
select {
  margin-bottom: 3vh;
}
</style>