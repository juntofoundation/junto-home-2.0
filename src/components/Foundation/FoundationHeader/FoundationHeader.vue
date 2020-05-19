
<template>
  <div class="foundationHeader">
    <div class="foundationHeader__header">
      <h2 class="foundationHeader__header--title">Not For Profit</h2>
    </div>
    <div class="foundationHeader__main">
      <h2 class="foundationHeader__main--title">Support the Junto Foundation</h2>
      <p class="foundationHeader__main--subtitle">
        Junto is a 501c(4) nonprofit registered
        in New York. This is to ensure the independence and integrity of this organization is sustainable long term.
        Any contribution to help move Junto forward is much appreciated!
      </p>

      <div class="foundationHeader__pillars">
        <div class="foundationHeader__pillar">
          <div class="foundationHeader__pillar--left foundationHeader__pillar--left--founder">&nbsp;</div>
          <div class="foundationHeader__pillar--right">
            <p class="foundationHeader__pillar--title">Grassroots Donations</p>
            <p class="foundationHeader__pillar--body">
              Everything we do is not for profit and open source. Your generosity and support is what will
              carry this movement forward. We invite all ranges of donations and walks of life to contribute - thank you for believing in this vision!
            </p>
            <a target="blank" class="removelink">
              <a
                href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=CX87U4QQQX2TW&source=url"
                target="blank"
                class="removelink"
              >
                <button class="foundationHeader__pillar--button">Support Junto</button>
              </a>
            </a>
          </div>
        </div>

        <div class="foundationHeader__pillar">
          <div class="foundationHeader__pillar--left foundationHeader__pillar--left--sponsor">&nbsp;</div>
          <div class="foundationHeader__pillar--right">
            <p class="foundationHeader__pillar--title">Become A Sponsor/Philanthropist</p>
            <p
              class="foundationHeader__pillar--body"
            >If you would like to sponsor Junto and be highlighted on our home page, please end an email to eric@junto.foundation.</p>
            <a href="mailto:eric@junto.foundation" target="blank" class="removelink">
              <button class="foundationHeader__pillar--button">Get In Touch </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      hotOn: false
    };
  },

  methods: {
    showAddress() {}
  }
};
</script>


