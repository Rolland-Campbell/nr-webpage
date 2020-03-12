<template>
  <div
    class="modal fade"
    id="eventEditModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="modelTitleId"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit Event</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <!-- Title -->
          <label for="title">
            <h5>Event Title</h5>
          </label>
          <div class="spacing">
            New Title:
            <input type="text" v-model="edit.title" />
          </div>
          <!-- Date -->
          <label for="date">
            <h5>Event Date</h5>
          </label>
          <div class="spacing">
            New Date:
            <input type="date" v-model="edit.eventDate" />
          </div>
          <!-- Time -->
          <label for="time">
            <h5>Event Time</h5>
          </label>
          <div class="spacing">
            New Date:
            <input type="time" v-model="edit.eventTime" />
          </div>
          <!-- Desc -->
          <label for="desc">
            <h5>Event Description</h5>
          </label>
          <div class="spacing">
            <div>
              New Description:
              <input type="text" v-model="edit.description" />
            </div>
          </div>
          <!--  -->
          <label for="link">
            <h5>Event Link</h5>
          </label>
          <div class="spacing">
            <div>
              New Link:
              <input type="text" v-model="edit.link" />
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" @click="editEvent" data-dismiss="modal">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "eventEditModal",
  props: ["edit"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    editEvent() {
      this.$store.dispatch("editEvent", this.edit);
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