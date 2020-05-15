<template>
  <div class="judges container-fluid">
    <div class="row titleRow">
      <h1>Heavy Athletics Judges and Athletics Directors</h1>
    </div>
    <div class="row cardRow">
      <JudgeCards class="judgeCards" v-for="judge in judges" :key="judge._id" :judgeProps="judge" />
    </div>
  </div>
</template>


<script>
  import JudgeCards from "../components/judgeCard";
  export default {
    name: "Judges",
    data() {
      return {};
    },
    mounted() {
      return this.$store.dispatch("getJudges");
    },
    computed: {
      judges() {
        return this.$store.state.judges;
      }
    },
    methods: {},
    components: {
      JudgeCards
    }
  };
</script>


<style scoped>
  .judges {
    background-image: url("../assets/judgesbg.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100vw 100%;
    height: 92vh;
    overflow: hidden;
    overflow-y: auto;
  }

  @media only screen and (max-width: 600px) {
    .judges {
      background-image: url("../assets/judgesbg.jpg");
      background-position: center;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      height: 93vh;
      overflow: hidden;
      overflow-y: auto;
    }
  }

  .titleRow {
    color: black;
    text-shadow: 1px 1px white;
    justify-content: center;
  }

  @media only screen and (max-width: 600px) {
    .titleRow {
      text-align: center;
    }
  }

  .judgeCards {
    margin: 10px;
  }

  .cardRow {
    display: flex;
    justify-content: center;
  }
</style>