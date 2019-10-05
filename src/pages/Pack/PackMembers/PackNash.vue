
<template>
  <div class="pack">
    <!-- navigation -->
    <junto-nav>
      <div slot="navIcon" class="nav__icon" @click="navOpen = true">
        <a class="removelink">
          <img src="../../../assets/images/junto-home-2.0__moon.png" alt class="nav__icon--image" />
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
            src="../../../assets/images/junto-home-2.0__headshot--nash.png"
            alt
          />
        </div>
        <!-- <div class="packMember__socials">
          <div class="packMember__social">
            <img
              src="../../../assets/images/junto-home-2.0__email--black.png"
              alt
              class="packMember__social--icon"
            />
            <p class="packMember__social--text">drea@junto.foundation</p>
          </div>
        </div> -->
      </div>
      <div class="packMember__right">
        <h2 slot="packMemberName" class="packMember__name">Neevash Ramdial</h2>
        <h2 slot="packMemberTitle" class="packMember__title">Mobile Developer</h2>

        <p class="packMember__bio">
          Hi there 👋,
          <br />
          <br />I am Trinidadian software engineer obsessed with experimenting, problem-solving and building new things. When I am not coding, I enjoy swimming, music, and writing.
          <br />
          <br />Over the past few years, I've worked on various projects large and small, including participating in and winning a national hackathon hosted by the Government of Trinidad and Tobago.
          <br />
          <br />I am excited to be working on Junto. It is a unique platform which focuses on genuine human interactions and user privacy.
          <br />
          <br />Hope to see you on Junto ✌️
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
      navOpen: false
    };
  },
  components: {
    juntoNav,
    juntoNavOpen,
    juntoFooter
  }
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