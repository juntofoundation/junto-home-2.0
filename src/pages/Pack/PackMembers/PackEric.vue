
<template>
  <div class="pack">
    <!-- navigation -->
    <junto-nav>
      <div slot="navIcon" class="nav__icon" @click="navOpen = true">
        <a class="removelink">
          <img
            src="../../../assets/images/junto-home-2.0__moon.png"
            alt=""
            class="nav__icon--image"
          />
        </a>
      </div>
    </junto-nav>

    <!-- navigation -->
    <transition name="fade">
      <junto-nav-open v-if="navOpen">
        <img
          @click="navOpen = false"
          slot="navClose"
          class="navOpen__nav--icon"
          src="../../../assets/images/junto-home-2.0__moon--filled.png"
        />
      </junto-nav-open>
    </transition>

    <div class="packMember">
      <div class="packMember__left">
        <div class="packMember__photo">
          <img
            slot="packMemberPhoto"
            class="packMember__photo--image"
            src="../../../assets/images/junto-home-2.0__headshot--eric.png"
            alt=""
          />
        </div>
        <div class="packMember__socials">
          <div class="packMember__social">
            <img
              src="../../../assets/images/junto-home-2.0__email--black.png"
              alt=""
              class="packMember__social--icon"
            />
            <p class="packMember__social--text">eric@junto.foundation</p>
          </div>
          <div class="packMember__social">
            <img
              src="../../../assets/images/junto-home-2.0__logo.png"
              alt=""
              class="packMember__social--icon"
            />
            <p class="packMember__social--text">@eric</p>
          </div>
        </div>
      </div>
      <div class="packMember__right">
        <h2 slot="packMemberName" class="packMember__name">Eric Yang</h2>
        <h2 slot="packMemberTitle" class="packMember__title">
          Founder &amp; Executive Director
        </h2>

        <p class="packMember__bio">
          Hey, Eric here.
          <br /><br />
          I'm a Houston native with parents who emigrated from Taiwan. I'd like
          to first acknowledge all of the sacfrices they've made. Without them,
          I would not be able to do the work I am doing today.
          <br /><br />

          Several years ago, a finance director, friend, and mentor of mine
          shared his concerns about our economic climate. He saw how we were
          printing too much money and taking on too much debt, leaving the
          emerging generations in a vulnerable position.
          <br /><br />
          He also spoke about the power of our shared humanity to change things
          for the better. At the time, I had considered that all the problems we
          face are manifestations of our collective intelligence and awareness.
          His message inspired me to look deeply at the elements that withheld
          myself and those around me from expressing our highest potential.
          <br /><br />
          From this contemplation, arose the inspiration for
          Junto. Social media has become a ubiquitous part of our lives and I
          believe reshaping this tool with the right intentions and holistic
          approach can help activate an expression of humanity that is
          authentic, compassionate, and conscious of our personal freedoms.

          <br /><br />
          I invite you to join us as this next chapter unfolds. This movement is
          yours as much as it is ours and we would love to shift this 
          new paradigm with you together.
        </p>
      </div>
    </div>

    <!-- footer-->
    <junto-footer></junto-footer>
  </div>
</template>

<script>
import juntoNav from "../../../components/Nav/Nav.vue";
import juntoNavOpen from "../../../components/NavOpen/NavOpen.vue";
import juntoFooter from "../../../components/Footer/Footer.vue";

export default {
  data() {
    return {
      navOpen: false,
    };
  },
  components: {
    juntoNav,
    juntoNavOpen,
    juntoFooter,
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>