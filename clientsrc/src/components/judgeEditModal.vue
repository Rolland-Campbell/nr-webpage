<template>
  <div class="modal fade" id="judgeEditModal" tabindex="-1" role="dialog" aria-labelledby="modelTitleId"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit Event</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <!-- Name -->
          <label for="name">
            <h5>Name</h5>
          </label>
          <div class="spacing">
            New Name:
            <input id="name" type="text" v-model="edit.name" />
          </div>
          <!-- Date -->
          <label for="date">
            <h5>Certification Date</h5>
          </label>
          <div class="spacing">
            New Date:
            <input id="date" type="date" v-model="edit.date" />
          </div>
          <!-- Home Town -->
          <label for="home">
            <h5>Home Town</h5>
          </label>
          <div class="spacing">
            New Info:
            <input id="home" type="text" v-model="edit.homeTown" />
          </div>
          <!-- Email -->
          <label for="email">
            <h5>Email</h5>
          </label>
          <div class="spacing">
            New Info:
            <input id="email" type="email" v-model="edit.email" />
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click="editJudge" data-dismiss="modal">Save</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: "judgeEditModal",
    props: ["edit"],
    data() {
      return {};
    },
    computed: {},
    methods: {
      editJudge() {
        debugger
        this.$store.dispatch("editJudge", this.edit);
        this.edit = {};
      }
    },
    components: {}
  };
</script>


<style scoped>
  .modal-body {
    display: grid;
    justify-items: baseline;
  }

  .spacing {
    margin-bottom: 2vh;
    text-align: left;
  }
</style>