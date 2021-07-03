<template>
  <div class="faqHeader">
    <div class="faqHeader__header">
      <h2 class="faqHeader__header--title">FAQs</h2>
    </div>
    <div class="faqHeader__main">
      <h2 class="faqHeader__main--title">Have a question?</h2>
      <p class="faqHeader__main--subtitle">
        Here's a list of questions we receive on a frequent basis.
        Reach out to us at hi@junto.foundation if there's anything you'd still like clarity on!
      </p>
      <div class="faqHeader__nav">
        <div class="faqHeader__nav--items">
          <p class="faqHeader__nav--item" :class="{ active: all }" @click="setCategory('all')">ALL</p>
          <p
            class="faqHeader__nav--item"
            :class="{ active: community }"
            @click="setCategory('community')"
          >COMMUNITY</p>
          <p
            class="faqHeader__nav--item"
            :class="{ active: technology }"
            @click="setCategory('technology')"
          >DESIGN/TECH</p>
        </div>
      </div>

      <div class="faqHeader__faqs">
        <div
          class="faqHeader__faq"
          v-for="faq in faqs"
          v-if="all"
          @click="toggleVisibility(faq.id)"
        >
          <p class="faqHeader__faq--question">{{ faq.question }}</p>
          <p class="faqHeader__faq--answer" style="display: none;" :id="faq.id">{{ faq.answer }}</p>
        </div>

        <div
          class="faqHeader__faq"
          v-for="faq in faqs"
          v-if="community"
          @click="toggleVisibility(faq.id)"
        >
          <p class="faqHeader__faq--question" v-if="faq.type == 'community'">{{ faq.question }}</p>
          <p
            class="faqHeader__faq--answer"
            v-if="faq.type == 'community'"
            style="display: none;"
            :id="faq.id"
          >{{ faq.answer }}</p>
        </div>

        <div
          class="faqHeader__faq"
          v-for="faq in faqs"
          v-if="design"
          @click="toggleVisibility(faq.id)"
        >
          <p class="faqHeader__faq--question" v-if="faq.type == 'design'">{{ faq.question }}</p>
          <p
            class="faqHeader__faq--answer"
            v-if="faq.type == 'design'"
            style="display: none;"
            :id="faq.id"
          >{{ faq.answer }}</p>
        </div>

        <div
          class="faqHeader__faq"
          v-for="faq in faqs"
          v-if="technology"
          @click="toggleVisibility(faq.id)"
        >
          <p class="faqHeader__faq--question" v-if="faq.type == 'technology'">{{ faq.question }}</p>
          <p
            class="faqHeader__faq--answer"
            v-if="faq.type == 'technology'"
            style="display: none;"
            :id="faq.id"
          >{{ faq.answer }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
      all: true,
      community: false,
      design: false,
      technology: false,
      faqs: [
        {
          question: "What was the inspiration behind Junto?",
          answer:
            "Junto was created to facilitate a more open era of human connection. We want to harness technology's potential to empower rich self-expression, grassroots movements, and meaningful collaboration.",
          type: "community",
          id: 0
        },
        {
          question: "What does Junto mean and how do you pronounce it?",
          answer:
            "Junto means “together” in Spanish and Portuguese. Our team pronounces it “june-toe,” but you can pronounce it however you want!",
          type: "community",
          id: 1
        },
        {
          question: "Who is Junto for?",
          answer: "Everyone! We welcome all walks of life.",
          type: "community",
          id: 2
        },
        {
          question: "How are you addressing privacy concerns with data?",
          answer:
            "We do not own, track, or sell your data. We are also a nonprofit and have no incentive to do so. Your best interest is our best interest.",
          type: "technology",
          id: 3
        },
        {
          question:
            "What does distributed technology mean and what value does it provide?",
          answer:
            "In short, decentralized technology cuts out the need for the middle-man. Today, most web traffic passes through corporate web servers and in the case of social media, this puts corporations in between our interactions. As a result, they have a license to track and sell our data. Their centralized nature is also more prone to hacks and censorship. Built on decentralized technology, Junto is more secure than its centralized counterparts. It is more resilient to censorship and provides its members with ownership of their information. In short, we are unable to track or sell your data even if we wanted to.",
          type: "technology",
          id: 4
        },
        {
          question: "What kind of decentralized technology are you using?",
          answer:
            "Junto is built on Holochain, a biomimicry-inspired framework to build distributed applications. Learn more about the technology at www.holochain.org!",
          type: "technology",
          id: 5
        },

        {
          question:
            "Will you have a cryptocurrency or initial coin offering (ICO)?",
          answer: "No.",
          type: "community",
          id: 6
        },
     
   
        {
          question: "How can I help?",
          answer:
            "This is a community-driven initiative. Help spread the word and join our communication channel on Telegram for more active involvement.",
          type: "community",
          id: 7
        }
      ]
    };
  },

  methods: {
    setCategory(category) {
      this.all = false;
      this.community = false;
      this.design = false;
      this.technology = false;

      if (category == "all") {
        this.all = true;
      } else if (category == "community") {
        this.community = true;
      } else if (category == "design") {
        this.design = true;
      } else if (category == "technology") {
        this.technology = true;
      }
    },

    toggleVisibility(id) {
      if (document.getElementById(id).style.display == "none") {
        document.getElementById(id).style.transition = "all .2s";
        document.getElementById(id).style.display = "block";
      } else {
        document.getElementById(id).style.transition = "all .2s";
        document.getElementById(id).style.display = "none";
      }
    }
  }
};
</script>

<style>
.active {
  color: #333;
}
</style>

