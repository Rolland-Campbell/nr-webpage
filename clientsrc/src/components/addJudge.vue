<template>
  <div class="col-12 col-md-4 addJudge">
    <h2 class="text-center">
      <u>Add a Judge</u>
    </h2>
    <label for="name">
      <h5>Judge Name</h5>
    </label>
    <input id="name" type="text" placeholder="Judge's Name" v-model="judgeInfo.name" />
    <label for="date">
      <h5>Date of Certification</h5>
    </label>
    <input id="date" type="date" v-model="judgeInfo.date" />
    <label for="home">
      <h5>Home Town</h5>
    </label>
    <input id="home" type="text" placeholder="Home town" v-model="judgeInfo.homeTown" />
    <label for="pic">
      <h5>Judge Picture</h5>
    </label>
    <input id="pic" type="text" placeholder="link to judge's picture" v-model="judgeInfo.pic" />
    <div class="buffer"></div>
    <button class="btn btn-success" @click="addJudge">Add Judge</button>
  </div>
</template>


<script>
export default {
  name: "AddJudge",
  data() {
    return {
      judgeInfo: {}
    };
  },
  computed: {},
  methods: {
    addJudge() {
      this.$store.dispatch("addJudge", this.judgeInfo);
      this.judgeInfo = {};
    }
  },
  components: {}
};
</script>


<style scoped>
.addJudge {
  margin: 10px;
  display: grid;
  padding: 13px;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.432);
}

input {
  margin-bottom: 2vh;
}

.buffer {
  height: 18vh;
}

@media only screen and (max-width: 600px) {
  .buffer {
    height: 3vh;
  }
}
</style>