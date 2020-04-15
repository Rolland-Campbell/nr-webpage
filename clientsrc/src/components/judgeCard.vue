<template>
  <div class="judgeCard col-10 offset-1 col-md-6 col-lg-3">
    <div class="card">
      <div class="card-body">
        <img class="judgePic" :src="this.judgeProps.pic" alt="judge pic" />
        <h4 class="card-title">{{this.judgeProps.name}}</h4>
        <hr />
        <h5>Judge Since: {{this.judgeProps.date}}</h5>
        <h5>Home Town: {{this.judgeProps.homeTown}}</h5>
        <h5><a :href="'mailto:'+this.judgeProps.email">Contact {{this.judgeProps.name}}</a></h5>
        <div class="buttonRow" v-if="$auth.isAuthenticated && $auth.userInfo.app_metadata.role == 'admin'">
          <button class="btn btn-warning" data-toggle="modal" :data-target="'#editModal'+ judgeProps.id">
            <i class="fa fa-pencil" aria-hidden="true"></i>
          </button>
          <judgeEditModal :id="'editModal'+ judgeProps.id" :edit="judgeProps" />
          <button class="btn btn-danger">
            <i class="fa fa-trash" aria-hidden="true" @click="deleteJudge"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import JudgeEditModal from "../components/judgeEditModal";
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
    components: {
      JudgeEditModal
    }
  };
</script>


<style scoped>
  .judgePic {
    height: 30vh;
    width: 70%;
    border-radius: 15px;
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

  a {
    color: black;
  }

  .buttonRow {
    margin-top: 2vh;
    display: flex;
    justify-content: space-evenly;
  }
</style>