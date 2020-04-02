<template>
  <div class="cardStyle col-12">
    <div class="col-2 imgStyle">
      <img :src="this.eventProps.logo" alt="logo" />
    </div>
    <div class="col-4 eventInfo">
      <div class="registerButton">
        <button class="btn btn-info fab" @click="register">Register</button>
      </div>
      <h5>{{this.eventProps.title}}</h5>
      <h5>
        <u>Date</u>
        : {{this.eventProps.eventDate | date}}
      </h5>
      <h5>
        <u>Time</u>
        : {{this.eventProps.eventTime}}
      </h5>
      <h5>
        <u>Host</u>
        : {{this.eventProps.host}}
      </h5>
      <h5>
        <u>Registration Cost:</u>
        ${{this.eventProps.cost}}
      </h5>
      <h5>
        <u>Location:</u>
        {{this.eventProps.location}}
      </h5>
      <h5>
        <u>Website:</u>&ensp;
        <a class="webLink" :href="'https://'+ this.eventProps.link">{{this.eventProps.link}}</a>
      </h5>
      <a
        class="webLink"
        data-toggle="collapse"
        :href="'#collapseExample'+ this.eventProps._id"
        role="button"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        <h5>
          <u>Event Information:</u>&ensp;
          <span class="smallText">(Click to open)</span>
        </h5>
      </a>
      <div class="collapse" :id="'collapseExample'+ this.eventProps._id">
        <div class="card card-body mb-3" tabindex="2">
          <h5>{{this.eventProps.description}}</h5>
        </div>
      </div>
      <div
        class="buttonRow"
        v-if="$auth.isAuthenticated && $auth.userInfo.app_metadata.role == 'admin'"
      >
        <button
          class="btn btnSm btn-warning"
          data-toggle="modal"
          :data-target="'#editModal'+ eventProps.id"
        >
          <i class="fa fa-pencil" aria-hidden="true"></i>
        </button>
        <eventEditModal :id="'editModal'+eventProps.id" :edit="eventProps" />
        <button class="btn btnSm btn-danger" @click="deleteEvent">
          <i class="fa fa-trash" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    <!-- register tab -->
    <div class="col-4 registerStyle ml-2" v-if="visibleReg == true">
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
    <div class="col-2 payStyle ml-2" v-if="visiblePay == true">
      <div class="closeButton">
        <button class="btn btn-secondary" @click="closeAll">X</button>
      </div>
      <div :id="'paypal' + this.eventProps._id"></div>
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
    paypal
      .Buttons({
        createOrder: function(data, actions) {
          // This function sets up the details of the transaction, including the amount and line item details.
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
        onApprove: function(data, actions) {
          // This function captures the funds from the transaction.
          return actions.order.capture().then(function(details) {
            // This function shows a transaction success message to your buyer.
            alert("Transaction completed by " + details.payer.name.given_name);
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

.imgStyle {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.644);
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}

.eventInfo {
  display: grid;
  align-content: center;
  background-color: rgba(255, 255, 255, 0.644);
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  text-shadow: 1px 1px white;
  overflow-y: hidden;
}

.registerStyle {
  padding: 20px;
  display: grid;
  align-content: center;
  background-color: rgba(255, 255, 255, 0.644);
  border-radius: 20px;
  text-shadow: 1px 1px white;
}

.payStyle {
  align-content: center;
  background-color: rgba(255, 255, 255, 0.644);
  border-radius: 20px;
}

img {
  height: 90%;
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

.registerButton {
  position: absolute;
  right: 1rem;
  top: 42%;
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
</style>