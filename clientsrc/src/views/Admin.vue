<template>
  <div class="admin container-fluid">
    <div class="row formRow">
      <AddEvent />
      <AddJudge />
    </div>
  </div>
</template>


<script>
import AddEvent from "../components/addEvent";
import AddJudge from "../components/addJudge";
export default {
  name: "Admin",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {
    AddEvent,
    AddJudge
  }
};
</script>


<style scoped>
.admin {
  background-image: url("../assets/adminbg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 90vh;
  overflow: hidden;
  overflow-y: auto;
}

@media only screen and (max-width: 600px) {
  .admin {
    background-image: url("../assets/adminbg.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 92vh;
    overflow: hidden;
    overflow-y: auto;
  }
}

.formRow {
  justify-content: space-evenly;
}
</style>