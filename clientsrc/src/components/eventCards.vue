<template>
  <div class="cardStyle col-12">
    <div class="col-md-2 imgStyle">
      <img :src="this.eventProps.logo" alt="logo" />
    </div>
    <div class="col-12 col-md-3 eventInfo">
      <p>{{this.eventProps.title}}</p>
      <p>
        <u>Date</u>
        : {{this.eventProps.eventDate | date}}
      </p>
      <p>
        <u>Time</u>
        : {{this.eventProps.eventTime}}
      </p>
      <p>
        <u>Host</u>
        : {{this.eventProps.host}}
      </p>
      <p>
        <u>Registration Cost:</u>
        ${{this.eventProps.cost}}
      </p>
      <p>
        <u>Location:</u>
        {{this.eventProps.location}}
      </p>
      <p>
        <u>Website:</u>&ensp;
        <a class="webLink" :href="'https://'+ this.eventProps.link">{{this.eventProps.link}}</a>
      </p>
      <a class="webLink" data-toggle="collapse" :href="'#collapseExample'+ this.eventProps._id" role="button"
        aria-expanded="false" aria-controls="collapseExample">
        <p>
          <u>Event Information:</u>&ensp;
          <span class="smallText">(Click to open)</span>
        </p>
      </a>
      <div class="collapse" :id="'collapseExample'+ this.eventProps._id">
        <div class="card card-body">
          <p class="infoText">{{this.eventProps.description}}
          </p>
        </div>
      </div>
      <div class="registerButton">
        <button class="btn btn-info" @click="register">Register</button>
      </div>
      <div class="buttonRow" v-if="$auth.isAuthenticated && $auth.userInfo.app_metadata.role == 'admin'">
        <button class="btn btnSm btn-warning" data-toggle="modal" :data-target="'#editModal'+ eventProps.id">
          <i class="fa fa-pencil" aria-hidden="true"></i>
        </button>
        <eventEditModal :id="'editModal'+eventProps.id" :edit="eventProps" />
        <button class="btn btnSm btn-danger" @click="deleteEvent">
          <i class="fa fa-trash" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    <!-- register tab -->
    <div class="col-12 col-md-3 registerStyle md-ml-2" v-if="visibleReg == true">
      <div class="closeButton">
        <button class="btn btn-secondary" @click="closeButton">X</button>
      </div>
      <label for="#">Name:</label>
      <input class id="name" type="text" v-model="athlete.name" />
      <label for="#class">Pick a class:</label>
      <select class="mb-2" id="class" v-model="athlete.registeredClass">
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
      <select class="mb-2" id="shirt" v-model="athlete.shirtSize">
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
      <button class="btn btn-info" @click="showPay">Next</button>
    </div>
    <!-- pay tab -->
    <div class="col-12 col-md-3 payStyle md-ml-2" v-show="visiblePay == true">
      <div class="closeButton">
        <button class="btn btn-secondary" @click="closeAll">X</button>
      </div>
      <div class="paypalButtons" :id="'paypal' + this.eventProps._id"></div>
    </div>
  </div>
</template>
<script>
  import EventEditModal from "../components/editEventModal";
  export default {
    name: "EventCards",
    props: ["eventProps"],
    data() {
      return {
        visibleReg: false,
        visiblePay: false,
        athlete: {
          eventTitle: this.eventProps.title,
          eventDate: this.eventProps.eventDate
        }
      };
    },
    mounted() {
      let vm = this;
      paypal
        .Buttons({
          createOrder(data, actions) {
            // This function sets up the details of the transaction, including the amount and line item details.
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: vm.eventProps.cost
                  }
                }
              ]
            });
          },
          onApprove(data, actions) {
            // This function captures the funds from the transaction.
            return actions.order.capture().then(function (details) {
              // This function shows a transaction success message to your buyer.
              vm.registerAthlete();
              alert("Transaction completed by " + details.payer.name.given_name);
              vm.closeAll();
            });
          }
        })
        .render("#paypal" + this.eventProps._id);
      //This function displays Smart Payment Buttons on your web page.
    },
    methods: {
      register() {
        this.visibleReg = true;
      },

      showPay() {
        this.visiblePay = true;
      },

      deleteEvent() {
        this.$store.dispatch("deleteEvent", this.eventProps);
      },
      closeButton() {
        this.visibleReg = false;
      },
      closeAll() {
        this.visiblePay = false;
        this.visibleReg = false;
      },
      registerAthlete() {
        this.$store.dispatch("registerAthlete", this.athlete)
      }
    },
    components: {
      EventEditModal
    }
  };
</script>
<style>
  .cardStyle {
    height: 40vh;
    margin-bottom: 2vh;
    display: flex;
  }

  @media only screen and (max-width: 600px) {
    .cardStyle {
      display: grid;
      height: 60vh;
    }
  }

  .imgStyle {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.644);
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }

  @media only screen and (max-width: 600px) {
    .imgStyle {
      display: none;
    }
  }

  .eventInfo {
    display: grid;
    align-content: center;
    background-color: rgba(255, 255, 255, 0.644);
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    text-shadow: 1px 1px white;
    overflow-y: auto;
  }

  @media only screen and (max-width: 600px) {
    .eventInfo {
      border-radius: 20px;
    }
  }

  p {
    font-weight: bold;
    margin-bottom: 8px;
  }

  .smallText {
    font-size: smaller;
  }

  .registerStyle {
    padding: 20px;
    display: grid;
    align-content: center;
    background-color: rgba(255, 255, 255, 0.644);
    border-radius: 20px;
    text-shadow: 1px 1px white;
  }

  @media only screen and (max-width: 600px) {
    .registerStyle {
      position: absolute;
      height: 60vh;
      background-color: white;
      z-index: 2;
    }
  }

  @media only screen and (max-width: 600px) {

    input,
    select {
      width: 100%;
    }
  }

  @media only screen and (max-width: 600px) {
    label {
      margin-top: 3vh;
    }
  }

  .payStyle {
    align-content: center;
    background-color: rgba(255, 255, 255, 0.644);
    border-radius: 20px;
  }

  @media only screen and (max-width: 600px) {
    .payStyle {
      position: absolute;
      height: 60vh;
      background-color: white;
      z-index: 3;
    }
  }

  img {
    height: 70%;
    width: 90%;
    border-radius: 20px;
  }

  .webLink {
    color: black;
  }

  .btn.fab {
    padding: 1rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (max-width: 600px) {
    .btn.fab {
      padding: 5px;
      border-radius: 5px;
    }
  }

  .registerButton {
    text-align: center;
    margin-top: 1vh;
  }



  @media only screen and (max-width: 600px) {
    .registerButton {
      position: unset;
    }
  }

  .closeButton {
    position: absolute;
    right: 1rem;
    top: 1rem;
  }

  .buttonRow {
    display: flex;
    justify-content: space-evenly;
  }

  .btnSm {
    border-radius: 50%;
    border-color: black;
    border-style: solid;
  }

  .paypalButtons {
    position: relative;
    top: 13vh;
    /* left: 2vw; */
  }
</style>