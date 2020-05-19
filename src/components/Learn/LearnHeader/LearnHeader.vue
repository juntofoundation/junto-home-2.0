
<template>
  <div class="learnHeader">
    <div class="learnHeader__header">
      <h2 class="learnHeader__header--title">A Holistic Approach</h2>
    </div>
    <div class="learnHeader__main">
      <h2 class="learnHeader__main--title">Rebalancing our relationship with technology</h2>
      <p class="learnHeader__main--subtitle">
        Junto holistically integrates new patterns of design, technology, and governance to create
        sustainable online and offline tools that embrace our human potential.
      </p>
      <div class="learnHeader__nav">
        <div class="learnHeader__nav--items">
          <p
            class="learnHeader__nav--item"
            :class="{ active: design }"
            @click="setCategory('design')"
          >DESIGN</p>
          <p
            class="learnHeader__nav--item"
            :class="{ active: technology }"
            @click="setCategory('technology')"
          >TECHNOLOGY</p>
          <p
            class="learnHeader__nav--item"
            :class="{ active: nonprofit }"
            @click="setCategory('nonprofit')"
          >NOT FOR PROFIT</p>
        </div>
      </div>

      <junto-learn-header-design v-if="design">
        <p
          slot="learnDesignMore"
          @click="setCategory('technology')"
          class="learnHeader__more"
        >Learn more about our technology &rarr;</p>
      </junto-learn-header-design>

      <junto-learn-header-technology v-if="technology">
        <p
          slot="learnGovernanceMore"
          @click="setCategory('nonprofit')"
          class="learnHeader__more"
        >Learn more about our governance &rarr;</p>
      </junto-learn-header-technology>

      <junto-learn-header-nonprofit v-if="nonprofit">
        <p
          slot="learnDesignMore"
          @click="setCategory('design')"
          class="learnHeader__more"
        >Learn more about our design &rarr;</p>
      </junto-learn-header-nonprofit>
    </div>
  </div>
</template>

<script>
import juntoLearnHeaderDesign from "./LearnHeaderDesign/LearnHeaderDesign.vue";
import juntoLearnHeaderTechnology from "./LearnHeaderTechnology/LearnHeaderTechnology.vue";
import juntoLearnHeaderNonprofit from "./LearnHeaderNonprofit/LearnHeaderNonprofit.vue";

export default {
  data() {
    return {
      design: true,
      technology: false,
      nonprofit: false
    };
  },
  methods: {
    setCategory(category) {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;

      this.design = false;
      this.technology = false;
      this.nonprofit = false;

      if (category == "design") {
        this.design = true;
      } else if (category == "technology") {
        this.technology = true;
      } else if (category == "nonprofit") {
        this.nonprofit = true;
      }
    }
  },
  components: {
    juntoLearnHeaderDesign,
    juntoLearnHeaderTechnology,
    juntoLearnHeaderNonprofit
  }
};
</script>

<style>
.active {
  color: #333;
}
</style>
