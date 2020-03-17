<template>
  <div class="home containerf-fluid">
    <div class="row titleRow">
      <div
        class="col-10 col-md-8"
      >The Northern Rockies is a 501-(c)3 (81-4950693) charitable organization that strives to educate the communities in which we work about Scottish culture and the history of Scottish Highland Games. Our group of highly motivated volunteers help Scottish Festivals run Scottish Highland Games or Heavy Events around the world. We are based out of Boise Idaho, but have sister chapters in Oregon, Washington, Montana, and Alaska.</div>
    </div>

    <div class="row">
      <div class="col eventTitle">
        <b>Scottish Heavy Events</b>
        <h4>For more information on each event, click a card</h4>
      </div>
    </div>

    <div class="row cardRow">
      <!-- Card W4D-->
      <div class="col-10 col-md-2">
        <div class="card" data-toggle="modal" data-target="#w4d">
          <img class="card-img-top" src="../assets/w4d.jpg" alt="SA Flag" />
          <div class="card-body">
            <h5 class="mb-0">
              <h5>Weight for Distance</h5>
            </h5>
          </div>
        </div>
        <!-- inject modal modal infor below-->
        <EventModal id="w4d">
          <div slot="title">Weight For Distance (W4D)</div>
          <div slot="about">
            <p>The Weight for Distance event consists of a weight made of metal and consist of a spherical or box weight with a chain and handle attached. The handle may be a ring, triangle, or a "D" shape. The implement shall not measure more than 18 inches in overall length from the bottom of the weight to the top of the handle. The official weight of each implement is the total weight, including the handle. The competitor may use either hand to throw the weight, but only one hand may be used. Any style may be used to throw the weight as long as it is deemed safe by the judge. The competitor may start and stop the throw provided that no part of the implement has made contact with the ground or the trig board during the aborted attempt. If the implement has made contact with the ground or the trig board after the attempt was initiated and prior to receiving permission from the judge, then the attempt will be a foul. Standard weights for these two events divided by throwing classes:</p>
            <dl>
              <li>Mens Pros and semi pros throw a 28 lb (kg) light weight and 56 lb (kg) heavy weight.</li>
              <li>Mens Amatures (A, B, C classes) throw a 28 lb (kg) light weight and 56 lb (kg) heavy weight.</li>
              <li>Masters, Novice, and Lightweight competitors throw a 42 lb (kg) heavy weight.</li>
              <li>Women Amatures (open A, B, C classes) throw a 14 lb light weight and a 28 lb heavy weight.</li>
              <li>Women Masters and Women Lightweight throw a 21 lb heavy weight.</li>
            </dl>
          </div>
          <div slot="judging">
            <img src="../assets/standardTrig.jpg" alt="standard-trig" class="trigPic" />
            <p>
              <b>Standard Trig</b> - The traditional trig setup is 4ft 6in in width. There are two back lines. The first line at 7ft 6in is the throwing area an athlete can use for open stone throws. The second line at 9ft is the throwing area for weight for distance events.
            </p>
            <img src="../assets/wingedTrig.jpg" alt="standard-trig" class="trigPic" />
            <p>
              <b>Winged Trig</b> - The Winged Trig setup is becoming more popular. The back lines are the same distances as the Standard Trig. The biggest difference is that the throwing area is pushed out to 6ft 9in and narrows to the traditional 4ft 6in in the front. This trig setup originally was used during foul weather to give the athletes a larger throwing area. Another benefit to the winged trig is that it is easier to judge. If the athlete touches the line or goes over it, the throw is no good or "a scratch".
            </p>
          </div>
        </EventModal>
        <!-- End Card -->
      </div>
      <!-- Card WOB-->
      <div class="col-10 col-md-2">
        <div class="card" data-toggle="modal" data-target="#wob">
          <img class="card-img-top" src="../assets/wob.jpg" alt="SA Flag" />
          <div class="card-body">
            <h5 class="mb-0">
              <h5>Weight Over Bar (WOB)</h5>
            </h5>
          </div>
        </div>
        <!-- inject modal modal infor below-->
        <EventModal id="wob">
          <div slot="title">Weight Over Bar (WOB)</div>
          <div slot="about">
            <p>The athletes attempts to toss weight with an attached handle over a horizontal bar using only one hand. Each athlete is allowed three attempts at each height. Successful clearance of the height allows the athlete to advance into the next round at a greater height. The competition is determined by the highest successful toss with fewest misses being used to break tie scores. The weight for this event is also class specific.</p>
          </div>
          <div slot="judging">
            <dl>
              <li>Mens Professionals and semi professionals throw a 56 lb (kg) weight.</li>
              <li>Mens Amatures (A, B, C classes) throw a 56 lb (kg) weight.</li>
              <li>Masters, Novice, and Lightweight competitors throw a 42 lb (kg) weight.</li>
              <li>Women Amatures (open A, B, C classes) throw a 28 lb weight.</li>
              <li>Women Masters and Women Lightweight throw a 21 lb weight.</li>
            </dl>
          </div>
        </EventModal>
        <!-- End Card -->
      </div>
      <!-- Card Hammers-->
      <div class="col-10 col-md-2">
        <div class="card" data-toggle="modal" data-target="#hammers">
          <img class="card-img-top" src="../assets/hammer.jpg" alt="SA Flag" />
          <div class="card-body">
            <h5 class="mb-0">
              <h5>Scottish Hammers</h5>
            </h5>
          </div>
        </div>
        <!-- inject modal modal infor below-->
        <EventModal id="hammers">
          <div slot="title">Scottish Hammers</div>
          <div slot="about">
            <p>This event is similar to the hammer throw as seen in modern-day track and field competitions, though with some differences. In the Scottish event, a round metal ball weighing 16 lb (kg) for light and 22 lb (kg) for heavy for the men classes. Women throw a 12 lb (kg) light hammer and 16 lb (kg) heavy hammer. The hammer weight is attached to the end of a shaft about 4 feet in length and made out of wood, bamboo, rattan, or plastic. The athlete will have thier back to the field. With the feet in a fixed position, the hammer is whirled about one’s head and thrown for distance over the shoulder. Hammer throwers sometimes employ specially designed footwear with flat blades to dig into the turf to maintain their balance and resist the centrifugal forces of the implement as it is whirled about the head. This substantially increases the distance attainable in the throw.</p>
          </div>
          <div slot="judging">
            <img src="../assets/hammerSpades.jpg" alt="hammer spades" class="hammerSpades" />
            <p>Athletes will sometimes wear boot spades to help hold their feet in place. This helps the athlete increase the distances they can throw.</p>
          </div>
        </EventModal>
        <!-- End Card -->
      </div>
      <!-- Card Stones-->
      <div class="col-10 col-md-2">
        <div class="card" data-toggle="modal" data-target="#stones">
          <img class="card-img-top" src="../assets/stones.jpg" alt="SA Flag" />
          <div class="card-body">
            <h5 class="mb-0">
              <h5>Braemar / Open Stone</h5>
            </h5>
          </div>
        </div>
        <!-- inject modal modal infor below-->
        <EventModal id="stones">
          <div slot="title">Braemar and Open Stones</div>
          <div slot="about">
            <p>
              <b>Open Stone</b>- This event is similar to the modern-day shot put as seen in the Olympic games. Instead of a steel shot, a large stone of variable weight is often used. There are also some differences from the Olympic shot put in allowable techniques. In the “Open Stone” using a 16–22 lb (7.25 - 9.98 kg) stone for men. Women used an 8–12 lb (3.63 - 5.44 kg) stone. Utilizing the forward section of the trig (7ft 6in x 4ft 6in) area. The thrower is allowed to use any throwing style so long as the stone is put with one hand with the stone resting cradled in the neck until the moment of release. Most athletes in the open stone event use either the “glide” or the “spin” techniques.
            </p>
            <p>
              <b>Braemar Stone</b> - This event is similar to the modern-day shot put as seen in the Olympic games. Instead of a steel shot, a large stone of variable weight is often used. There are also some differences from the Olympic shot put in allowable techniques. The “Braemar Stone” uses a 20–26 lb (9-11.7 kg) stone for men. Women us a 13–18 lb (5.89-8.16 kg). Braemar throws do not allow any run up to the toeboard or “trig” to deliver the stone, i.e., it is a standing put with no forward movement.
            </p>
          </div>
          <div slot="judging">
            <img src="../assets/standardTrig.jpg" alt="standard-trig" class="trigPic" />
            <p>
              <b>Standard Trig</b> - The traditional trig setup is 4ft 6in in width. There are two back lines. The first line at 7ft 6in is the throwing area an athlete can use for open stone throws. The second line at 9ft is the throwing area for weight for distance events.
            </p>
            <img src="../assets/wingedTrig.jpg" alt="standard-trig" class="trigPic" />
            <p>
              <b>Winged Trig</b> - The Winged Trig setup is becoming more popular. The back lines are the same distances as the Standard Trig. The biggest difference is that the throwing area is pushed out to 6ft 9in and narrows to the traditional 4ft 6in in the front. This trig setup originally was used during foul weather to give the athletes a larger throwing area. Another benefit to the winged trig is that it is easier to judge. If the athlete touches the line or goes over it, the throw is no good or "a scratch".
            </p>
          </div>
        </EventModal>
        <!-- End Card -->
      </div>
      <!-- Card Cabers-->
      <div class="col-10 col-md-2">
        <div class="card" data-toggle="modal" data-target="#cabers">
          <img class="card-img-top" src="../assets/caber.jpg" alt="SA Flag" />
          <div class="card-body">
            <h5 class="mb-0">
              <h5>Cabers</h5>
            </h5>
          </div>
        </div>
        <!-- inject modal modal infor below-->
        <EventModal id="cabers">
          <div slot="title">Cabers</div>
          <div
            slot="about"
          >The Caber Toss is the signature event of the Highland Games. A Caber (gaelic for "Tree") is a tree that has been cut and trimmed down so one end is slightly wider than the other. It can vary length from 12 to 22 feet and between 50 and 180 pounds. The objective of this event is for the athlete to flip a "12 o’clock” (which is considered a perfect toss) meaning that the athlete will "pick" the caber (the act of leaning down and popping the caber up into their hands), run with the caber and then attempt to flip it end over end so that it lands perfectly straight in front of them or pointing to 12 o'clock on an imaginary clock face on the ground. Points are awarded from 9 o'clock to 3 o'clock, and even if the athlete does not flip the caber they are awarded points for how far it goes over before it falls back in degrees.</div>
          <div slot="judging">
            <img src="../assets/caberScore.gif" alt="caber score" class="caberScore" />
          </div>
        </EventModal>
        <!-- End Card -->
      </div>
      <!-- Card Sheaf-->
      <div class="col-10 col-md-2">
        <div class="card" data-toggle="modal" data-target="#sheaf">
          <img class="card-img-top" src="../assets/sheaf.jpg" alt="SA Flag" />
          <div class="card-body">
            <h5 class="mb-0">
              <h5>Sheaf</h5>
            </h5>
          </div>
        </div>
        <!-- inject modal modal infor below-->
        <EventModal id="sheaf">
          <div slot="title">Sheaf</div>
          <div
            slot="about"
          >The sheaf toss is the only "non-traditional" Highland sport event originally contested at country fairs. A pitchfork is used to hurl a burlap bag stuffed with straw over a horizontal bar above the competitor's head. Typical weight for the bag is 16 lb (kg) for men. Women typically use a 10 lb (kg) bag.</div>
          <div slot="judging">
            <img src="../assets/sheafFork.png" alt="sheaf and fork" class="sheafFork" />
            <p>Lots of athletes will build their own sheaf forks, even though the event provides them. Using the same fork to throw with can help a thrower master this event. Sheaf forks can have 2 or 3 tines.</p>
          </div>
        </EventModal>
        <!-- End Card -->
      </div>
    </div>
  </div>
</template>


<script>
import EventModal from "../components/eventModal";
export default {
  name: "home",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: { EventModal }
};
</script>


<style scoped>
.home {
  background-image: url("../assets/scotlandHighlands.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 92vh;
  width: 100%;
  overflow: hidden;
  overflow-y: auto;
}

.titleRow {
  justify-content: center;
  margin-top: 3vh;
}

@media only screen and (max-width: 600px) {
  .titleRow {
    background-color: rgba(255, 255, 255, 0.473);
    padding: 5px;
    color: black;
    font-size: larger;
    text-shadow: 1px 1px white;
  }
}

.eventTitle {
  margin-top: 3vh;
  text-align: center;
  font-size: 4vh;
}

@media only screen and (max-width: 600px) {
  .eventTitle {
    color: white;
    text-shadow: 1px 1px black;
  }
}

.card {
  border-radius: 20px;
  margin: 5px;
}

.cardRow {
  justify-content: space-evenly;
  padding: 30px;
}

@media only screen and (max-width: 600px) {
  .cardRow {
    justify-content: center;
  }
}

.card-img-top {
  height: 20vh;
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.card-body {
  text-align: center;
}

.trigPic {
  margin-top: 2vh;
  margin-bottom: 2vh;
  height: 20vh;
  width: 100%;
}

.hammerSpades {
  padding-left: 6vw;
  padding-bottom: 3vh;
  margin-top: 3vh;
}

.caberScore {
  /* width: 35vw; */
  margin-bottom: 3vh;
}

.sheafFork {
  height: 30vh;
  width: 30vh;
  margin-left: 5vw;
  margin-bottom: 2vh;
  margin-top: 2vhs;
}
</style>