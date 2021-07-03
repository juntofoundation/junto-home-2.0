
<template>
  <div>
    <div class="packHeader" v-if="memberOpen != true">
      <div class="packHeader__header">
        <h2 class="packHeader__header--title">Meet the Pack</h2>
      </div>

      <div class="packHeader__main">
        <h2 class="packHeader__main--title">Mission</h2>
        <p class="packHeader__main--subtitle">
          We've come together from many walks of life to help realign technology
          with humanity. We envision social technology as a tool to activate our
          creative, collaborative, and expressive capacities and welcome anyone
          who feels called to participate in this movement.
        </p>

        <div class="packHeader__section">
          <h2 class="packHeader__main--title">Core Team</h2>
          <div class="packHeader__pack">
            <div class="packHeader__member">
              <a href="/pack-eric" class="removelink">
                <div class="packHeader__member--photo">
                  <p class="packHeader__member--cover--text">Eric's Story</p>
                  <div class="packHeader__member--cover">&nbsp;</div>
                  <img
                    src="../../../assets/images/junto-home-2.0__headshot--eric.png"
                    alt
                    class="packHeader__member--photo--image"
                  />
                </div>

                <div
                  class="packHeader__member--details"
                  @click="navMember('eric')"
                >
                  <p class="packHeader__member--name">Eric Yang</p>
                  <p class="packHeader__member--title">
                    Founder / Executive Director
                  </p>
                </div>
              </a>
            </div>

            <div class="packHeader__member">
              <a href="/pack-josh" class="removelink">
                <div
                  class="packHeader__member--photo"
                  @click="navMember('josh')"
                >
                  <p class="packHeader__member--cover--text">Josh's Story</p>
                  <div class="packHeader__member--cover">&nbsp;</div>
                  <img
                    src="../../../assets/images/junto-home-2.0__headshot--josh.png"
                    alt
                    class="packHeader__member--photo--image"
                  />
                </div>
                <div
                  class="packHeader__member--details"
                  @click="navMember('josh')"
                >
                  <p class="packHeader__member--name">Josh Parkin</p>
                  <p class="packHeader__member--title">
                    CTO &amp; Systems Architect
                  </p>
                </div>
              </a>
            </div>
            <div class="packHeader__member">
              <a href="/pack-dora" class="removelink">
                <div
                  class="packHeader__member--photo"
                  @click="navMember('dora')"
                >
                  <p class="packHeader__member--cover--text">Dora's Story</p>
                  <div class="packHeader__member--cover">&nbsp;</div>
                  <img
                    src="../../../assets/images/junto-home-2.0__headshot--dora.png"
                    alt
                    class="packHeader__member--photo--image"
                  />
                </div>
                <div
                  class="packHeader__member--details"
                  @click="navMember('dora')"
                >
                  <p class="packHeader__member--name">Dora Czovek</p>
                  <p class="packHeader__member--title">
                    Director of Operations
                  </p>
                </div>
              </a>
            </div>

            <div class="packHeader__member">
              <a href="/pack-tomis" class="removelink">
                <div
                  class="packHeader__member--photo"
                  @click="navMember('tomis')"
                >
                  <p class="packHeader__member--cover--text">Tomis' Story</p>
                  <div class="packHeader__member--cover">&nbsp;</div>
                  <img
                    src="../../../assets/images/junto-home-2.0__headshot--tomis.png"
                    alt
                    class="packHeader__member--photo--image"
                  />
                </div>
                <div
                  class="packHeader__member--details"
                  @click="navMember('tomis')"
                >
                  <p class="packHeader__member--name">Tomis Parker</p>
                  <p class="packHeader__member--title">
                    Director of Strategy &amp; Business Development
                  </p>
                </div>
              </a>
            </div>

            <div class="packHeader__member packHeader__member--mobile">
              <div class="packHeader__member--photo">
                <p class="packHeader__member--cover--text">Nastasia's Story</p>
                <div class="packHeader__member--cover">&nbsp;</div>
                <img
                  src="../../../assets/images/junto-home-2.0__headshot--nastasia.png"
                  alt
                  class="packHeader__member--photo--image"
                />
              </div>
              <div
                class="packHeader__member--details"
                @click="navMember('dora')"
              >
                <p class="packHeader__member--name">Nastasia Emelianova</p>
                <p class="packHeader__member--title">
                  Backend / Rust Developer (PT)
                </p>
              </div>
            </div>
            <!-- <div class="packHeader__member packHeader__member--mobile">
              <a href="/pack-drea" class="removelink">
                <div
                  class="packHeader__member--photo"
                  @click="navMember('drea')"
                >
                  <p class="packHeader__member--cover--text">Drea's Story</p>
                  <div class="packHeader__member--cover">&nbsp;</div>
                  <img
                    src="../../../assets/images/junto-home-2.0__headshot--drea.png"
                    alt
                    class="packHeader__member--photo--image"
                  />
                </div>
                <div
                  class="packHeader__member--details"
                  @click="navMember('drea')"
                >
                  <p class="packHeader__member--name">Drea Bennett</p>
                  <p class="packHeader__member--title">Creative Lead</p>
                </div>
              </a>
            </div> -->

            <div class="packHeader__member packHeader__member--mobile">
              <a href="/pack-nash" class="removelink">
                <div class="packHeader__member--photo">
                  <p class="packHeader__member--cover--text">Leif's Story</p>
                  <div class="packHeader__member--cover">&nbsp;</div>
                  <img
                    src="../../../assets/images/junto-home-2.0__headshot--leif.png"
                    alt
                    class="packHeader__member--photo--image"
                  />
                </div>
                <div class="packHeader__member--details">
                  <p class="packHeader__member--name">Leif Riksheim</p>
                  <p class="packHeader__member--title">Lead Web Developer</p>
                </div>
              </a>
            </div>
            <div class="packHeader__member packHeader__member--mobile">
              <div class="packHeader__member--photo">
                <p class="packHeader__member--cover--text">Fayeed's Story</p>
                <div class="packHeader__member--cover">&nbsp;</div>
                <img
                  src="../../../assets/images/junto-home-2.0__headshot--fayeed.png"
                  alt
                  class="packHeader__member--photo--image"
                />
              </div>
              <div class="packHeader__member--details">
                <p class="packHeader__member--name">Fayeed Pawaskar</p>
                <p class="packHeader__member--title">
                  Mobile / Flutter Developer (PT)
                </p>
              </div>
            </div>
          </div>

          <div class="packHeader__pack packHeader__pack--desk">
            <div class="packHeader__member">
              <a class="removelink">
                <div class="packHeader__member--photo">
                  <p class="packHeader__member--cover--text">
                    Nastasia's Story
                  </p>
                  <div class="packHeader__member--cover">&nbsp;</div>
                  <img
                    src="../../../assets/images/junto-home-2.0__headshot--nastasia.png"
                    alt
                    class="packHeader__member--photo--image"
                  />
                </div>
                <div class="packHeader__member--details">
                  <p class="packHeader__member--name">Nastasia Emelianova</p>
                  <p class="packHeader__member--title">
                    Backend / Rust Dev (PT)
                  </p>
                </div>
              </a>
            </div>

            <div class="packHeader__member">
              <a class="removelink">
                <div class="packHeader__member--photo">
                  <p class="packHeader__member--cover--text">Leif's Story</p>
                  <div class="packHeader__member--cover">&nbsp;</div>
                  <img
                    src="../../../assets/images/junto-home-2.0__headshot--leif.png"
                    alt
                    class="packHeader__member--photo--image"
                  />
                </div>
                <div class="packHeader__member--details">
                  <p class="packHeader__member--name">Leif Riksheim</p>
                  <p class="packHeader__member--title">Lead Web Developer</p>
                </div>
              </a>
            </div>
            <div class="packHeader__member">
              <div class="packHeader__member--photo">
                <p class="packHeader__member--cover--text">Fayeed's Story</p>
                <div class="packHeader__member--cover">&nbsp;</div>
                <img
                  src="../../../assets/images/junto-home-2.0__headshot--fayeed.png"
                  alt
                  class="packHeader__member--photo--image"
                />
              </div>
              <div class="packHeader__member--details">
                <p class="packHeader__member--name">Fayeed Pawaskar</p>
                <p class="packHeader__member--title">
                  Mobile / Flutter Dev (PT)
                </p>
              </div>
            </div>
            <div
              class="packHeader__member packHeader__member--desk"
              style="visibility: hidden"
            >
              <div class="packHeader__member--photo">
                <p class="packHeader__member--cover--text">Fayeed's Story</p>
                <div class="packHeader__member--cover">&nbsp;</div>
                <img
                  src="../../../assets/images/junto-home-2.0__headshot--fayeed.png"
                  alt
                  class="packHeader__member--photo--image"
                />
              </div>
              <div class="packHeader__member--details">
                <p class="packHeader__member--name">Fayeed Pawaskar</p>
                <p class="packHeader__member--title">
                  Mobile / Flutter Dev (PT)
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Board of Directions -->
        <!-- 
        <div class="packHeader__section">
          <h2 class="packHeader__main--title">Board of Directors</h2>
          <div class="packHeader__board" style="display: flex;">
            <div class="packHeader__member">
              <a href="/pack-eric" class="removelink">
                <div class="packHeader__member--photo">
                  <p class="packHeader__member--cover--text">Eric's Story</p>
                  <div class="packHeader__member--cover">&nbsp;</div>
                  <img
                    src="../../../assets/images/junto-home-2.0__headshot--eric.png"
                    alt
                    class="packHeader__member--photo--image"
                  />
                </div>
                <div class="packHeader__member--details">
                  <p class="packHeader__member--name">Eric Yang</p>
                  <p class="packHeader__member--title">
                    President, Board Member
                  </p>
                </div>
              </a>
            </div>

            <div class="packHeader__member">
              <a href="/pack-ekene" class="removelink">
                <div class="packHeader__member--photo">
                  <p class="packHeader__member--cover--text">Ekene's Story</p>
                  <div class="packHeader__member--cover">&nbsp;</div>
                  <img
                    src="../../../assets/images/junto-home-2.0__headshot--ekene.png"
                    alt
                    class="packHeader__member--photo--image"
                  />
                </div>
                <div class="packHeader__member--details">
                  <p class="packHeader__member--name">Ekene Nkem-Mmekam</p>
                  <p class="packHeader__member--title">
                    Treasurer, Board Member
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div> -->

        <!-- Advisors -->

        <h2 class="packHeader__main--title">Advisors</h2>
        <div class="packHeader__pack">
          <div class="packHeader__member">
            <a href="/pack-art" class="removelink">
              <div class="packHeader__member--photo">
                <p class="packHeader__member--cover--text">Art's Story</p>
                <div class="packHeader__member--cover">&nbsp;</div>
                <img
                  src="../../../assets/images/junto-home-2.0__headshot--art.png"
                  alt
                  class="packHeader__member--photo--image"
                />
              </div>
              <div class="packHeader__member--details">
                <p class="packHeader__member--name">Arthur Brock</p>
                <p class="packHeader__member--title">Co-founder of Holochain</p>
              </div>
            </a>
          </div>

          <div class="packHeader__member">
            <a
              href="https://commonsengine.org/"
              target="blank"
              class="removelink"
            >
              <div class="packHeader__member--photo">
                <div class="packHeader__member--cover">&nbsp;</div>
                <img
                  src="../../../assets/images/junto-home-2.0__logo--comms-engine.png"
                  alt
                  class="packHeader__member--photo--image"
                />
              </div>
              <div class="packHeader__member--details">
                <p class="packHeader__member--name">Commons Engine</p>
                <p class="packHeader__member--title">
                  Ferananda Ibarra &amp; Emaline Friedman
                </p>
              </div>
            </a>
          </div>

          <div class="packHeader__member">
            <a href="/pack-david" class="removelink">
              <div class="packHeader__member--photo">
                <p class="packHeader__member--cover--text">David's Story</p>
                <div class="packHeader__member--cover">&nbsp;</div>
                <img
                  src="../../../assets/images/junto-home-2.0__headshot--david.png"
                  alt
                  class="packHeader__member--photo--image--david"
                />
              </div>
              <div class="packHeader__member--details">
                <p class="packHeader__member--name">David Magerman</p>
                <p class="packHeader__member--title">
                  Philanthropist, Investor
                </p>
              </div>
            </a>
          </div>
          <div class="packHeader__member">
            <div class="packHeader__member--photo">&nbsp;</div>
          </div>
        </div>
      </div>
    </div>

    <junto-flux v-if="memberOpen != true"></junto-flux>
  </div>
</template>


<script>
import juntoFlux from "../../Flux/Flux.vue";

export default {
  components: {
    juntoFlux,
  },
};
</script>

