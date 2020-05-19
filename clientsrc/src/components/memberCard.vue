<template>
  <div class="memberCard col-12 col-md-4">
    <div class="card">
      <slot name="pic"></slot>
      <div class="card-body">
        <h4 class="card-title">
          <slot name="name"></slot>
        </h4>
        <p class="card-text">
          <slot name="position"></slot>
        </p>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: "MemberCard",
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
  .card {
    border-color: black;
    border-style: solid;
    margin: 5px;
    width: auto;
  }

  @media only screen and (max-width: 600px) {
    .card {
      border-color: black;
      border-style: solid;
      margin: 5px;
      width: 100%;
    }
  }

  .memberCard {
    display: flex;
    justify-content: center;
  }
</style>