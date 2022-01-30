
<template>
  <div class="nav">
    <a href="/" class="removelink">
      <div class="nav__logo--container">
        <img
          class="nav__logo--image"
          src="../../assets/images/junto-home-2.0__logo--rainbow.png"
          alt=""
        />
      </div>
    </a>
    <div class="nav__items">
      <!-- <div class="nav__item">
        <a href="https://learn.junto.foundation/" target="blank" class="removelink">LEARN</a>
      </div> -->

      <!-- <div class="nav__item">
        <a href="/pack" class="removelink">PACK</a>
      </div> -->
      <div class="nav__item">
        <a href="/foundation" class="removelink">ABOUT</a>
      </div>
      <!-- <div class="nav__item">
        <a href="/events" class="removelink">EVENTS</a>
      </div> -->
      <!-- <div class="nav__item">
                <a href='/manifesto' class="removelink">MANIFESTO</a>
            </div> -->
      <!-- <div class="nav__item">
        <a href="/faq" class="removelink">FAQ</a>
      </div> -->
<!-- 
      <div class="nav__button--outline">
        <a
          href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=CX87U4QQQX2TW&source=url"
          target="blank"
          class="removelink"
          >DONATE</a
        >
      </div> -->

      <!-- <div class="nav__button--outline">
        <a
          href="https://junto.typeform.com/to/iY66XCod"
          target="blank"
          class="removelink"
          >SIGN UP</a
        >
      </div> -->
    <div class="nav__button">
        <a
          href="https://fluxsocial.io"
          target="blank"
          class="removelink"
          >TRY FLUX</a
        >
      </div>      

      <slot name="navIcon"></slot>
    </div>
    
  </div>
</template>
