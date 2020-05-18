<template>
  <div class="privacyPolicy">
    <!-- navigation -->
    <junto-nav>
      <div slot="navIcon" class="nav__icon" @click="navOpen = true">
        <a class="removelink">
          <img src="../../assets/images/junto-home-2.0__moon.png" alt class="nav__icon--image" />
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

    <!-- privacy policy header -->
    <junto-privacy-policy-header></junto-privacy-policy-header>

    <!-- footer-->
    <junto-footer></junto-footer>
  </div>
</template>


<script>
import juntoNav from "../../components/Nav/Nav.vue";
import juntoNavOpen from "../../components/NavOpen/NavOpen.vue";
import juntoPrivacyPolicyHeader from "../../components/PrivacyPolicyHeader/PrivacyPolicyHeader.vue";
import juntoFooter from "../../components/Footer/Footer.vue";

export default {
  data() {
    return {
      navOpen: false
    };
  },
  components: {
    juntoNav,
    juntoNavOpen,
    juntoPrivacyPolicyHeader,
    juntoFooter
  }
};
</script>

<style>
</style>