<template>
  <div class="contact">
    <div class="row leaderRow">
      <h1 class="text-center">Northern Rockies Administration</h1>
    </div>
    <div class="row cardRow">
      <!-- Card -->
      <MemberCard id="chuck">
        <div slot="pic">
          <img
            src="https://i.insider.com/5a8c83d342e1cc57810ba9ee?width=1100&format=jpeg&auto=webp"
            alt="chucky"
          />
        </div>
        <div slot="name">
          <h2>Chuck McLain</h2>
        </div>
        <div slot="position">
          <h4>Super Chief</h4>
        </div>
      </MemberCard>
      <!-- Card -->
      <MemberCard id="ron">
        <div slot="pic">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/71bk1CAppgL._AC_UX679_.jpg"
            alt="ron"
          />
        </div>
        <div slot="name">
          <h2>Ron Campbell</h2>
        </div>
        <div slot="position">
          <h4>State Chief</h4>
        </div>
      </MemberCard>
      <!-- Card -->
      <MemberCard id="polly">
        <div slot="pic">
          <img
            src="https://cdn4.vectorstock.com/i/1000x1000/05/08/cartoon-rainbow-unicorn-horse-vector-20210508.jpg"
            alt="polly"
          />
        </div>
        <div slot="name">
          <h2>Polly Sauls</h2>
        </div>
        <div slot="position">
          <h4>Event Coordinator</h4>
        </div>
      </MemberCard>
      <!-- Card -->
      <MemberCard id="bud">
        <div slot="pic">
          <img
            src="https://image.shutterstock.com/image-illustration/monkey-typing-on-computer-funny-260nw-573117796.jpg"
            alt="bud"
          />
        </div>
        <div slot="name">
          <h2>Rolland Campbell</h2>
        </div>
        <div slot="position">
          <h4>Trainer</h4>
        </div>
      </MemberCard>
      <!-- Card -->
      <MemberCard id="will">
        <div slot="pic">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/81IBsZBYpDL._AC_SX425_.jpg"
            alt="will"
          />
        </div>
        <div slot="name">
          <h2>Will</h2>
        </div>
        <div slot="position">
          <h4>Trainer</h4>
        </div>
      </MemberCard>
      <!-- Card -->
      <MemberCard id="perrin">
        <div slot="pic">
          <img
            src="https://pa1.narvii.com/6118/91907a5cc4458d200f1bf6c27d6431aab2cbddcd_hq.gif"
            alt="perrin"
          />
        </div>
        <div slot="name">
          <h2>Perrin</h2>
        </div>
        <div slot="position">
          <h4>Trainer</h4>
        </div>
      </MemberCard>
      <!-- Card -->
      <MemberCard id="jenn">
        <div slot="pic">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/e/e2/Valkyrie_by_Mike_Deodato.png"
            alt="jenn"
          />
        </div>
        <div slot="name">
          <h2>Jenn</h2>
        </div>
        <div slot="position">
          <h4>Score Keeper / Admin</h4>
        </div>
      </MemberCard>
      <!-- Card -->
      <MemberCard id="shelly">
        <div slot="pic">
          <img
            src="https://www.pngkey.com/png/detail/7-76799_cartoon-teacher-png-teacher-clipart-png.png"
            alt="shelly"
          />
        </div>
        <div slot="name">
          <h2>Shelly</h2>
        </div>
        <div slot="position">
          <h4>Score Keeper / Kid's Events</h4>
        </div>
      </MemberCard>
      <!-- Card -->
    </div>
  </div>
</template>


<script>
import MemberCard from "../components/memberCard";
export default {
  name: "Contact",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {
    MemberCard
  }
};
</script>


<style scoped>
.contact {
  height: 90vh;
  background-image: url("../assets/contactbg.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  overflow: hidden;
  overflow-y: auto;
}

h1 {
  color: white;
  text-shadow: 1px 1px black;
}

.practiceRow {
  justify-content: center;
  padding-top: 5vh;
}

.leaderRow {
  justify-content: center;
  padding-top: 5vh;
}

.cardRow {
  display: flex;
  justify-content: space-evenly;
  text-align: center;
}

img {
  height: 30vh;
  width: 70%;
  border-radius: 50%;
  padding: 0;
  margin: 5px;
  border-color: black;
  border-style: solid;
}
</style>