
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
            src="../../../assets/images/junto-home-2.0__headshot--tomis.png"
            alt
          />
        </div>
        <div class="packMember__socials">
          <img src alt class="packMember__social" />
        </div>
      </div>
      <div class="packMember__right">
        <h2 slot="packMemberName" class="packMember__name">Tomis Parker</h2>
        <h2 slot="packMemberTitle" class="packMember__title">Director of Strategy &amp; Business Development</h2>

        <p class="packMember__bio">
          Hey there - Tomis here.
          <br />
          <br />One of the most frustrating things I heard growing up was, “that’s just the way it is.” It’s an acceptable answer when inquiring about certain mysteries of the universe, but not when we’re asking why we continue to do things that we know don’t make sense and don’t serve us.
          <br />
          <br />Partially for creative expression and partially out of survival, I have oriented my life’s work towards re-thinking, re-tooling, and re-designing in domains that can leverage the roots of social change. For the last decade, this has primarily been about designing and developing communities that trust young people direct their own lives and author their own stories.
          <br />
          <br />I’m excited to be bringing my experience building trust-based communities to Junto and leading the development of both internal team culture and design patterns that will serve the Junto collective.
          <br />
          <br />
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