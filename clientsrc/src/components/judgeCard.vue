<template>
  <div class="judgeCard col-10 offset-1 col-md-6 col-lg-3">
    <div class="card">
      <div class="card-body">
        <img class="judgePic" :src="this.judgeProps.pic" alt="judge pic" />
        <h5 class="card-title mt-3">{{this.judgeProps.name}}</h5>
        <hr />
        <!-- <p>Judge Since: {{this.judgeProps.date | date}}</p> -->
        <p>Home: {{this.judgeProps.homeTown}}</p>
        <p>State: {{this.judgeProps.state}}</p>
        <p v-if="judgeProps.email.length > 1"><a :href="'mailto:'+this.judgeProps.email">Contact <i
              class="fa fa-envelope-open-o" aria-hidden="true"></i></a></p>
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
  .card {
    width: 20vw;
    color: black;
    text-shadow: 1px 1px white;
  }

  @media only screen and (max-width: 600px) {
    .card {
      width: auto;
      color: black;
      text-shadow: 1px 1px white;
    }
  }

  .judgePic {
    height: 25vh;
    width: 70%;
    border-radius: 15px;
    display: flex;
    justify-self: center;
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

  p {
    font-size: medium;
  }

  .buttonRow {
    margin-top: 2vh;
    display: flex;
    justify-content: space-evenly;
  }
</style>