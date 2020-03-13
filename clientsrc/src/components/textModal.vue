<template>
  <div class="textModal">
    <div
      class="modal fade"
      id="textModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Register for group texts</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            Name:
            <input class="mb-5" type="text" placeholder required v-model="textAdd.name" />
            Phone Number:
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              placeholder="(###)###-####"
              required
              v-model="textAdd.phone"
            />
            <small>Format: 123-456-7890</small>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="textRequest">Add Me</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "TextModal",
  data() {
    return {
      textAdd: {}
    };
  },
  computed: {},
  methods: {
    textRequest() {
      this.$store.dispatch("textRequest", this.textAdd);
    }
  },
  components: {}
};
</script>


<style scoped>
.modal-body {
  display: grid;
}
</style>