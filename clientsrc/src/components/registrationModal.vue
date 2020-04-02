<template>
  <div class="regModal">
    <p>
      <button class="btn btn-primary" type="button" data-toggle="collapse" :data-target="'#contentId' + eventProps._id"
        aria-expanded="false" aria-controls="contentId">Register</button>
    </p>
    <div class="collapse" :id="'contentId' + eventProps._id">
      <div class="collapse-header">
        <h5 class="collapse-title">Register for {{this.eventProps.title}}</h5>
      </div>
      <div class="collapse-body">
        <label for="#">Name:</label>
        <input id="name" type="text" v-model="athlete.name" />
        <label for="#class">Pick a class:</label>
        <select id="class" v-model="athlete.registeredClass">
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="Men's Lightweight">Men's Lightweight (200 lbs and under)</option>
          <option value="Pro">Pro</option>
          <option value="Masters 40-49">Masters 40-49</option>
          <option value="Masters 50-59">Masters 50-59</option>
          <option value="Masters 60+">Masters 60+</option>
          <option value="Women's Lightweight">Women's Lightweight</option>
          <option value="Women's Masters 40-49">Women's Masters 40-49</option>
          <option value="Women's Masters 50-59">Women's Masters 50-59</option>
          <option value="Women's Masters 60+">Women's Masters 60+</option>
        </select>
        <label for="#shirt">Select a Shirt Size</label>
        <select id="shirt" v-model="athlete.shirtSize">
          <option value="kids">Kids</option>
          <option value="xs">XS</option>
          <option value="s">S</option>
          <option value="m">M</option>
          <option value="l">L</option>
          <option value="xl">XL</option>
          <option value="2xl">2XL</option>
          <option value="3xl">3XL</option>
          <option value="4xl">4XL</option>
        </select>
        Press Next to pay
        <button class="btn btn-info" @click="register">Next</button>
        <div v-show="visible == true" :id="'paypal' + this.eventProps._id"></div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: "RegModal",
    props: ["eventProps"],
    data() {
      return {
        athlete: {
          eventTitle: this.eventProps.title,
          eventDate: this.eventProps.eventDate
        },
        visible: false
      };
    },
    mounted() {
      paypal
        .Buttons({
          createOrder: function (data, actions) {
            // This function sets up the details of the transaction, including the amount and line item details.
            this.visible == false
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: 20
                  }
                }
              ]
            });
          },
          onApprove: function (data, actions) {
            // This function captures the funds from the transaction.
            return actions.order.capture().then(function (details) {
              // This function shows a transaction success message to your buyer.
              alert("Transaction completed by " + details.payer.name.given_name);
            });
          }
        })
        .render("#paypal-button-container" + this.eventProps._id);
      //This function displays Smart Payment Buttons on your web page.
    },
    computed: {},
    methods: {
      register() {
        this.$store.dispatch("registerAthlete", this.athlete);
        this.athlete = {};
        this.visible = true;
      }
    },
    components: {}
  };
</script>


<style scoped>
  .collapse-body {
    display: grid;
  }

  input,
  select {
    margin-bottom: 3vh;
  }

  .btn {
    margin-bottom: 3vh;
  }
</style>