<template>
  <div class="judgeCard col-10 offset-1 col-md-6 col-lg-3">
    <div class="card">
      <div class="card-body">
        <img class="judgePic" :src="this.judgeProps.pic" alt="judge pic" />
        <h2 class="card-title">{{this.judgeProps.name}}</h2>
        <hr />
        <h5>Judge Since: {{this.judgeProps.date}}</h5>
        <h5>Home Town: {{this.judgeProps.homeTown}}</h5>
        <div
          class="buttonRow"
          v-if="$auth.isAuthenticated && $auth.userInfo.app_metadata.role == 'admin'"
        >
          <button class="btn btn-warning">
            <i class="fa fa-pencil" aria-hidden="true"></i>
          </button>
          <button class="btn btn-danger">
            <i class="fa fa-trash" aria-hidden="true" @click="deleteJudge"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "JudgeCard",
  props: ["judgeProps"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    deleteJudge() {
      this.$store.dispatch("deleteJudge", this.judgeProps);
    }
  },
  components: {}
};
</script>


<style scoped>
.judgePic {
  height: 30vh;
  width: 100%;
}
.card {
  background-color: rgba(255, 255, 255, 0.616);
  border-color: black;
  border-style: solid;
}

.card-body {
  text-align: center;
}

.btn {
  border-radius: 50%;
  border-color: black;
  border-style: solid;
}

.buttonRow {
  margin-top: 2vh;
  display: flex;
  justify-content: space-evenly;
}
</style>