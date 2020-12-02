
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
          <h2 class="packHeader__main--title">Pack</h2>
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
                    Founder, Executive Director, Designer / Dev (FT)
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
                    CTO &amp; Systems Architect (FT)
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
                    Director of Operations (PT)
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
                    Director of Strategy &amp; Business Development (PT)
                  </p>
                </div>
              </a>
            </div>

            <div class="packHeader__member packHeader__member--mobile">
              <a href="" class="removelink">
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
                <div
                  class="packHeader__member--details"
                  @click="navMember('dora')"
                >
                  <p class="packHeader__member--name">Nastasia Emelianova</p>
                  <p class="packHeader__member--title">
                    Backend / Rust Developer (PT)
                  </p>
                </div>
              </a>
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
                <div
                  class="packHeader__member--photo"
                  @click="navMember('nash')"
                >
                  <p class="packHeader__member--cover--text">Nash's Story</p>
                  <div class="packHeader__member--cover">&nbsp;</div>
                  <img
                    src="../../../assets/images/junto-home-2.0__headshot--nash.png"
                    alt
                    class="packHeader__member--photo--image"
                  />
                </div>
                <div
                  class="packHeader__member--details"
                  @click="navMember('nash')"
                >
                  <p class="packHeader__member--name">Neevash Ramdial</p>
                  <p class="packHeader__member--title">
                    Mobile / Flutter Developer (PT)
                  </p>
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
                  <p class="packHeader__member--name">Nastsia Emelianova</p>
                  <p class="packHeader__member--title">
                    Backend / Rust Dev (PT)
                  </p>
                </div>
              </a>
            </div>

            <div class="packHeader__member">
              <a href="/pack-nash" class="removelink">
                <div
                  class="packHeader__member--photo"
                  @click="navMember('nash')"
                >
                  <p class="packHeader__member--cover--text">Nash's Story</p>
                  <div class="packHeader__member--cover">&nbsp;</div>
                  <img
                    src="../../../assets/images/junto-home-2.0__headshot--nash.png"
                    alt
                    class="packHeader__member--photo--image"
                  />
                </div>
                <div
                  class="packHeader__member--details"
                  @click="navMember('nash')"
                >
                  <p class="packHeader__member--name">Neevash Ramdial</p>
                  <p class="packHeader__member--title">
                    Mobile / Flutter Developer (PT)
                  </p>
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

        <div class="packHeader__section">
          <h2 class="packHeader__main--title">Board of Directors</h2>
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
                <div class="packHeader__member--details">
                  <p class="packHeader__member--name">Eric Yang</p>
                  <p class="packHeader__member--title">
                    President, Board Member
                  </p>
                </div>
              </a>
            </div>

            <div class="packHeader__member">
              <a href="/pack-riley" class="removelink">
                <div class="packHeader__member--photo">
                  <p class="packHeader__member--cover--text">Riley's Story</p>
                  <div class="packHeader__member--cover">&nbsp;</div>
                  <img
                    src="../../../assets/images/junto-home-2.0__headshot--riley.png"
                    alt
                    class="packHeader__member--photo--image"
                  />
                </div>
                <div class="packHeader__member--details">
                  <p class="packHeader__member--name">Riley Wagner</p>
                  <p class="packHeader__member--title">
                    Secretary, Board Member
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

            <div class="packHeader__member">
              <a href="/pack-kyle" class="removelink">
                <div class="packHeader__member--photo">
                  <p class="packHeader__member--cover--text">Kyle's Story</p>
                  <div class="packHeader__member--cover">&nbsp;</div>
                  <img
                    src="../../../assets/images/junto-home-2.0__headshot--kyle.png"
                    alt
                    class="packHeader__member--photo--image"
                  />
                </div>
                <div class="packHeader__member--details">
                  <p class="packHeader__member--name">Kyle Hornick</p>
                  <p class="packHeader__member--title">Board Member</p>
                </div>
              </a>
            </div>
          </div>
        </div>

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
            <a href="/pack-douglas" class="removelink">
              <div class="packHeader__member--photo">
                <p class="packHeader__member--cover--text">Douglas' Story</p>
                <div class="packHeader__member--cover">&nbsp;</div>
                <img
                  src="../../../assets/images/junto-home-2.0__headshot--rushkoff.png"
                  alt
                  class="packHeader__member--photo--image"
                />
              </div>
              <div class="packHeader__member--details">
                <p class="packHeader__member--name">Douglas Rushkoff</p>
                <p class="packHeader__member--title">Activist, Author</p>
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
            <a href="/pack-ray" class="removelink">
              <div class="packHeader__member--photo">
                <p class="packHeader__member--cover--text">Ray's Story</p>
                <div class="packHeader__member--cover">&nbsp;</div>
                <img
                  src="../../../assets/images/junto-home-2.0__headshot--ray.png"
                  alt
                  class="packHeader__member--photo--image"
                />
              </div>
              <div class="packHeader__member--details">
                <p class="packHeader__member--name">Raymond Powell</p>
                <p class="packHeader__member--title">Founder of CoGov</p>
              </div>
            </a>
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


     <!-- <div class="packHeader__member">
              <a href="/pack-yaz" class="removelink">
                <div class="packHeader__member--photo" @click="navMember('yaz')">
                  <p class="packHeader__member--cover--text">Yaz's Story</p>
                  <div class="packHeader__member--cover">&nbsp;</div>
                  <img
                    style="transform: translateY(-1rem);"
                    src="../../../assets/images/junto-home-2.0__headshot--yaz.png"
                    alt
                    class="packHeader__member--photo--image"
                  />
                </div>
                <div class="packHeader__member--details" @click="navMember('yaz')">
                  <p class="packHeader__member--name">Yaz Owainati</p>
                  <p
                    class="packHeader__member--title"
                  >Director of Communication &amp; Experience Design</p>
                </div>
              </a>
            </div> -->

                <!-- <div class="packHeader__member">
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