<template>
  <div class="col-12 col-md-4 addJudge">
    <h2 class="text-center">
      <u>Add a Judge</u>
    </h2>
    <!-- name -->
    <label for="name">
      <h5>Judge Name</h5>
    </label>
    <input id="name" type="text" placeholder="Judge's Name" v-model="judgeInfo.name" />
    <!-- cert date -->
    <label for="date">
      <h5>Date of Certification</h5>
    </label>
    <input id="date" type="date" v-model="judgeInfo.date" />
    <!-- home town -->
    <label for="home">
      <h5>Home Town</h5>
    </label>
    <input id="home" type="text" placeholder="Home town" v-model="judgeInfo.homeTown" />
    <!-- state pick -->
    <label for="state"></label>
    <h5>Home State</h5>
    </label>
    <select id="state" class="mb-4" v-model="judgeInfo.state">
      <option value="AL">Alabama</option>
      <option value="AK">Alaska</option>
      <option value="AZ">Arizona</option>
      <option value="AR">Arkansas</option>
      <option value="CA">California</option>
      <option value="CO">Colorado</option>
      <option value="CT">Connecticut</option>
      <option value="DE">Delaware</option>
      <option value="DC">District Of Columbia</option>
      <option value="FL">Florida</option>
      <option value="GA">Georgia</option>
      <option value="HI">Hawaii</option>
      <option value="ID">Idaho</option>
      <option value="IL">Illinois</option>
      <option value="IN">Indiana</option>
      <option value="IA">Iowa</option>
      <option value="KS">Kansas</option>
      <option value="KY">Kentucky</option>
      <option value="LA">Louisiana</option>
      <option value="ME">Maine</option>
      <option value="MD">Maryland</option>
      <option value="MA">Massachusetts</option>
      <option value="MI">Michigan</option>
      <option value="MN">Minnesota</option>
      <option value="MS">Mississippi</option>
      <option value="MO">Missouri</option>
      <option value="MT">Montana</option>
      <option value="NE">Nebraska</option>
      <option value="NV">Nevada</option>
      <option value="NH">New Hampshire</option>
      <option value="NJ">New Jersey</option>
      <option value="NM">New Mexico</option>
      <option value="NY">New York</option>
      <option value="NC">North Carolina</option>
      <option value="ND">North Dakota</option>
      <option value="OH">Ohio</option>
      <option value="OK">Oklahoma</option>
      <option value="OR">Oregon</option>
      <option value="PA">Pennsylvania</option>
      <option value="RI">Rhode Island</option>
      <option value="SC">South Carolina</option>
      <option value="SD">South Dakota</option>
      <option value="TN">Tennessee</option>
      <option value="TX">Texas</option>
      <option value="UT">Utah</option>
      <option value="VT">Vermont</option>
      <option value="VA">Virginia</option>
      <option value="WA">Washington</option>
      <option value="WV">West Virginia</option>
      <option value="WI">Wisconsin</option>
      <option value="WY">Wyoming</option>
    </select>
    <!-- picture -->
    <label for="pic">
      <h5>Judge Picture</h5>
    </label>
    <input id="pic" type="text" placeholder="link to judge's picture" v-model="judgeInfo.pic" />
    <!-- email -->
    <label for="email">
      <h5>Judge's E-mail</h5>
    </label>
    <input id="email" type="email" placeholder="email address" v-model="judgeInfo.email" />
    <div class="buffer"></div>
    <button class="btn btn-success" @click="addJudge">Add Judge</button>
  </div>
</template>


<script>
  export default {
    name: "AddJudge",
    data() {
      return {
        judgeInfo: {}
      };
    },
    computed: {},
    methods: {
      addJudge() {
        debugger
        this.$store.dispatch("addJudge", this.judgeInfo);
        this.judgeInfo = {};
      }
    },
    components: {}
  };
</script>


<style scoped>
  .addJudge {
    margin: 10px;
    display: grid;
    padding: 13px;
    border-radius: 15px;
    background-color: rgba(255, 255, 255, 0.432);
  }

  input {
    margin-bottom: 2vh;
  }

  .buffer {
    height: 18vh;
  }

  @media only screen and (max-width: 600px) {
    .buffer {
      height: 3vh;
    }
  }
</style>