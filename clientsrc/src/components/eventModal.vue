<template>
  <div class="eventModal">
    <!-- Modal -->
    <div
      class="modal fade"
      :id="id"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              <!-- Name of Event -->
              <slot name="title"></slot>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <!-- About event -->
            <h4>Event information:</h4>
            <slot name="about"></slot>
          </div>
          <div class="modal-footer">
            <!-- judging info slot -->
            <div>
              <h4>Extra Information:</h4>
              <slot name="judging"></slot>
            </div>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "EventModal",
  props: ["id"],
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
.modal-footer {
  display: block;
}
</style>