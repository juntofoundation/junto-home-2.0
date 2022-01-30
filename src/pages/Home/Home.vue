
<template>
  <div class="home">
    <!-- navigation -->
    <junto-nav>
      <div slot="navIcon" class="nav__icon" @click="navOpen = true">
        <a class="removelink">
          <img
            src="../../assets/images/junto-home-2.0__moon.png"
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
          src="../../assets/images/junto-home-2.0__moon--filled.png"
        />
      </junto-nav-open>
    </transition>

    <!--  header-->
    <junto-home-header> </junto-home-header>

    <!--  video -->
    <!-- <junto-home-video> </junto-home-video> -->

    <!--  pillars-->
    <junto-home-pillars></junto-home-pillars>

    <!-- sponsors-->
    <junto-home-sponsors></junto-home-sponsors>

    <!-- flux-->
    <junto-flux></junto-flux>

    <!-- footer-->
    <junto-footer></junto-footer>
  </div>
</template>

<script>
import juntoNav from "../../components/Nav/Nav.vue";
import juntoNavOpen from "../../components/NavOpen/NavOpen.vue";
import juntoHomeHeader from "../../components/Home/HomeHeader/HomeHeader.vue";
import juntoHomePillars from "../../components/Home/HomePillars/HomePillars.vue";
import juntoHomeSponsors from "../../components/Home/HomeSponsors/HomeSponsors.vue";
import juntoHomeVideo from "../../components/Home/HomeVideo/HomeVideo.vue";
import juntoFlux from "../../components/Flux/Flux.vue";
import juntoFooter from "../../components/Footer/Footer.vue";

export default {
  data() {
    return {
      navOpen: false,
    };
  },

  components: {
    juntoNav,
    juntoNavOpen,
    juntoHomeHeader,
    juntoHomeVideo,
    juntoHomePillars,
    juntoHomeSponsors,
    juntoFlux,
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
